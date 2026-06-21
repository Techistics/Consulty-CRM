// lib/meta-track.ts
// Shared helper to fire Pixel (browser) + CAPI (server) together with matching event_id

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

function generateEventId() {
  return `evt_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

interface TrackOptions {
  email?: string;
  phone?: string;
}

export function trackMetaEvent(eventName: string, options: TrackOptions = {}) {
  const eventId = generateEventId();

  // 1. Browser Pixel
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", eventName, {}, { eventID: eventId });
  }

  // 2. Server-side CAPI (fire and forget, don't block UI)
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      event_name: eventName,
      event_id: eventId,
      event_source_url: typeof window !== "undefined" ? window.location.href : "",
      email: options.email,
      phone: options.phone,
    }),
  }).catch((err) => {
    console.error("Meta CAPI track failed:", err);
  });
}