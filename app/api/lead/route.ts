import { NextResponse } from 'next/server';
import sql from '@/lib/db';
import { sendLeadConfirmation } from '@/lib/email';
import { EmailPreview } from '@/app/funnel/step2/EmailPreview'; // Adjust this import path to your file structure
import { render } from '@react-email/components';
import React from 'react';

export async function POST(request: Request) {
  try {
    const {
      name,
      consultancy,
      whatsapp,
      email,
      answers,
      selectedDate,
      selectedTime,
    } = await request.json();

    if (!name || !consultancy || !whatsapp || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Insert lead into Neon Postgres
    const result = await sql`
        INSERT INTO leads (name, consultancy, whatsapp, email, q1, q2, q3, q4, selected_date, selected_time)
        VALUES (${name}, ${consultancy}, ${whatsapp}, ${email},
                ${answers?.q1 || null}, ${answers?.q2 || null},
                ${answers?.q3 || null}, ${answers?.q4 || null},
                ${selectedDate || null}, ${selectedTime || null})
        RETURNING id;
      `;
    const leadId = result[0].id;

    // Use React Email tool to safely generate production-safe markup
    const htmlEmail = await render(
      React.createElement(EmailPreview, {
        name,
        consultancy,
        selectedDate,
        selectedTime,
      })
    );

    await sendLeadConfirmation({
      toProspect: email,
      toInternal: process.env.INTERNAL_EMAIL!,
      from: process.env.RESEND_FROM!, // Ensure this matches the exact domain you verified in Hostinger!
      subject: `Booking Confirmed: ${consultancy} Demo Call`, 
      html: htmlEmail,
    });

    return NextResponse.json({ leadId }, { status: 200 });
  } catch (error: any) {
    console.error('Lead submission error:', error);
    return NextResponse.json({ error: error.message || 'Server error' }, { status: 500 });
  }
}