import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID!;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN!;
const API_VERSION = 'v21.0';

// Meta requires PII (email, phone) to be hashed with SHA-256
function hash(value: string): string {
  return crypto
    .createHash('sha256')
    .update(value.trim().toLowerCase())
    .digest('hex');
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      event_name,       // e.g. "Lead", "Contact", "PageView"
      email,            // optional
      phone,            // optional
      event_id,         // optional but recommended (dedupe with pixel)
      event_source_url, // the page URL where this happened
    } = body;

    if (!event_name) {
      return NextResponse.json({ error: 'event_name is required' }, { status: 400 });
    }

    // Get visitor IP and user agent for Meta's matching
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0] ||
      req.headers.get('x-real-ip') ||
      '';
    const userAgent = req.headers.get('user-agent') || '';

    const userData: Record<string, any> = {
      client_ip_address: ip,
      client_user_agent: userAgent,
    };

    if (email) userData.em = [hash(email)];
    if (phone) userData.ph = [hash(phone.replace(/\D/g, ''))]; // digits only before hashing

    const payload = {
      data: [
        {
          event_name,
          event_time: Math.floor(Date.now() / 1000),
          event_id, // important: must match the browser pixel's eventID to avoid double counting
          event_source_url,
          action_source: 'website',
          user_data: userData,
        },
      ],
    };

    const res = await fetch(
      `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }
    );

    const result = await res.json();

    if (!res.ok) {
      console.error('Meta CAPI error:', result);
      return NextResponse.json({ error: result }, { status: 500 });
    }

    return NextResponse.json({ success: true, result });
  } catch (err) {
    console.error('CAPI route error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}