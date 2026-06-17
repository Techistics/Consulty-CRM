// Slot type definition
export type Slot = {
  id: string;
  date: string; // "2025-06-18"
  day: string; // "Wednesday, Jun 18"
  time: string; // "10:00 AM"
  status: "available" | "reserved";
};

// Helper to format day strings
function formatDay(date: string): string {
  const d = new Date(date + "T00:00:00");
  const options: Intl.DateTimeFormatOptions = { weekday: "long", month: "short", day: "numeric" };
  // e.g., "Wednesday, Jun 18"
  return d.toLocaleDateString("en-US", options);
}

export const SLOTS: Slot[] = [
  // June 18, 2025 (Wednesday)
  { id: "2025-06-18-0", date: "2025-06-18", day: formatDay("2025-06-18"), time: "10:00 AM", status: "reserved" },
  { id: "2025-06-18-1", date: "2025-06-18", day: formatDay("2025-06-18"), time: "11:30 AM", status: "available" },
  { id: "2025-06-18-2", date: "2025-06-18", day: formatDay("2025-06-18"), time: "1:00 PM", status: "reserved" },
  { id: "2025-06-18-3", date: "2025-06-18", day: formatDay("2025-06-18"), time: "2:30 PM", status: "available" },
  { id: "2025-06-18-4", date: "2025-06-18", day: formatDay("2025-06-18"), time: "4:00 PM", status: "reserved" },
  { id: "2025-06-18-5", date: "2025-06-18", day: formatDay("2025-06-18"), time: "5:30 PM", status: "available" },

  // June 19, 2025 (Thursday)
  { id: "2025-06-19-0", date: "2025-06-19", day: formatDay("2025-06-19"), time: "10:00 AM", status: "available" },
  { id: "2025-06-19-1", date: "2025-06-19", day: formatDay("2025-06-19"), time: "11:30 AM", status: "reserved" },
  { id: "2025-06-19-2", date: "2025-06-19", day: formatDay("2025-06-19"), time: "1:00 PM", status: "available" },
  { id: "2025-06-19-3", date: "2025-06-19", day: formatDay("2025-06-19"), time: "2:30 PM", status: "reserved" },
  { id: "2025-06-19-4", date: "2025-06-19", day: formatDay("2025-06-19"), time: "4:00 PM", status: "available" },
  { id: "2025-06-19-5", date: "2025-06-19", day: formatDay("2025-06-19"), time: "5:30 PM", status: "reserved" },

  // June 20, 2025 (Friday)
  { id: "2025-06-20-0", date: "2025-06-20", day: formatDay("2025-06-20"), time: "10:30 AM", status: "reserved" },
  { id: "2025-06-20-1", date: "2025-06-20", day: formatDay("2025-06-20"), time: "12:00 PM", status: "available" },
  { id: "2025-06-20-2", date: "2025-06-20", day: formatDay("2025-06-20"), time: "1:30 PM", status: "reserved" },
  { id: "2025-06-20-3", date: "2025-06-20", day: formatDay("2025-06-20"), time: "3:00 PM", status: "available" },
  { id: "2025-06-20-4", date: "2025-06-20", day: formatDay("2025-06-20"), time: "4:30 PM", status: "reserved" },
  { id: "2025-06-20-5", date: "2025-06-20", day: formatDay("2025-06-20"), time: "6:00 PM", status: "available" },

  // June 21, 2025 (Saturday)
  { id: "2025-06-21-0", date: "2025-06-21", day: formatDay("2025-06-21"), time: "10:00 AM", status: "available" },
  { id: "2025-06-21-1", date: "2025-06-21", day: formatDay("2025-06-21"), time: "12:00 PM", status: "reserved" },
  { id: "2025-06-21-2", date: "2025-06-21", day: formatDay("2025-06-21"), time: "2:00 PM", status: "available" },
  { id: "2025-06-21-3", date: "2025-06-21", day: formatDay("2025-06-21"), time: "3:30 PM", status: "reserved" },
  { id: "2025-06-21-4", date: "2025-06-21", day: formatDay("2025-06-21"), time: "5:00 PM", status: "available" },
  { id: "2025-06-21-5", date: "2025-06-21", day: formatDay("2025-06-21"), time: "6:00 PM", status: "reserved" },

  // June 22, 2025 (Sunday)
  { id: "2025-06-22-0", date: "2025-06-22", day: formatDay("2025-06-22"), time: "10:30 AM", status: "reserved" },
  { id: "2025-06-22-1", date: "2025-06-22", day: formatDay("2025-06-22"), time: "12:30 PM", status: "available" },
  { id: "2025-06-22-2", date: "2025-06-22", day: formatDay("2025-06-22"), time: "2:30 PM", status: "reserved" },
  { id: "2025-06-22-3", date: "2025-06-22", day: formatDay("2025-06-22"), time: "4:30 PM", status: "available" },
  { id: "2025-06-22-4", date: "2025-06-22", day: formatDay("2025-06-22"), time: "5:30 PM", status: "reserved" },
  { id: "2025-06-22-5", date: "2025-06-22", day: formatDay("2025-06-22"), time: "6:00 PM", status: "available" },

  // June 23, 2025 (Monday)
  { id: "2025-06-23-0", date: "2025-06-23", day: formatDay("2025-06-23"), time: "10:00 AM", status: "available" },
  { id: "2025-06-23-1", date: "2025-06-23", day: formatDay("2025-06-23"), time: "11:00 AM", status: "reserved" },
  { id: "2025-06-23-2", date: "2025-06-23", day: formatDay("2025-06-23"), time: "1:00 PM", status: "available" },
  { id: "2025-06-23-3", date: "2025-06-23", day: formatDay("2025-06-23"), time: "2:00 PM", status: "reserved" },
  { id: "2025-06-23-4", date: "2025-06-23", day: formatDay("2025-06-23"), time: "4:00 PM", status: "available" },
  { id: "2025-06-23-5", date: "2025-06-23", day: formatDay("2025-06-23"), time: "5:00 PM", status: "reserved" },

  // June 24, 2025 (Tuesday)
  { id: "2025-06-24-0", date: "2025-06-24", day: formatDay("2025-06-24"), time: "10:15 AM", status: "reserved" },
  { id: "2025-06-24-1", date: "2025-06-24", day: formatDay("2025-06-24"), time: "11:45 AM", status: "available" },
  { id: "2025-06-24-2", date: "2025-06-24", day: formatDay("2025-06-24"), time: "1:15 PM", status: "reserved" },
  { id: "2025-06-24-3", date: "2025-06-24", day: formatDay("2025-06-24"), time: "2:45 PM", status: "available" },
  { id: "2025-06-24-4", date: "2025-06-24", day: formatDay("2025-06-24"), time: "4:15 PM", status: "reserved" },
  { id: "2025-06-24-5", date: "2025-06-24", day: formatDay("2025-06-24"), time: "5:45 PM", status: "available" }
];
