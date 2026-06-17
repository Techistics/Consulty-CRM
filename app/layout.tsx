import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Consulty - Sales Funnel',
  description: 'CRM for study abroad consultancies',
  // Load fonts via link tags
  icons: {
    // placeholder if needed
  },
  // The Next.js layout supports adding head elements via Metadata or directly in component
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Clash Display */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
          rel="stylesheet"
        />
        {/* Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-[#0a0a0a] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
