import React from 'react';

type EmailPreviewProps = {
  name: string;
  consultancy: string;
  selectedDate?: string;
  selectedTime?: string;
};

export const EmailPreview: React.FC<EmailPreviewProps> = ({
  name,
  consultancy,
  selectedDate,
  selectedTime,
}) => {
  // Format the WhatsApp link cleanly
  const whatsappUrl = "https://wa.me/923704640009?text=Hi%20Consulty%2C%20I%20just%20booked%20my%20demo%20call!";

  // Professional font stack that renders beautifully across modern email clients
  const fontStack = "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif";

  return (
    <div style={{
      fontFamily: fontStack,
      backgroundColor: '#eefcfd',
      padding: '40px 20px',
      color: '#333333',
    }}>
      {/* Main Container Matching image_8966b9.png */}
      <div style={{
        maxWidth: '560px',
        margin: '0 auto',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        border: '1px solid #dcf6f9'
      }}>
        {/* Header Block */}
        <div style={{ backgroundColor: '#069BAF', padding: '24px', textAlign: 'center' }}>
          <span style={{ 
            fontFamily: fontStack,
            color: '#ffffff', 
            fontSize: '20px', 
            fontWeight: 'bold', 
            letterSpacing: '2px' 
          }}>
            CONSULTY CRM
          </span>
        </div>

        {/* Conversational Body */}
        <div style={{ padding: '30px 40px' }}>
          <h1 style={{ 
            fontFamily: fontStack,
            color: '#069BAF', 
            fontSize: '24px', 
            marginTop: 0, 
            marginBottom: '16px', 
            fontWeight: '700',
            letterSpacing: '-0.5px'
          }}>
            You're in, {name}! 🎉
          </h1>
          
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#4a4a4a', margin: '0 0 16px 0' }}>
            Your strategy session for <strong>{consultancy}</strong> is officially locked in. We’re incredibly excited to connect and map out exactly how to scale your operations. 
          </p>

          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#4a4a4a', margin: '0 0 24px 0' }}>
            This isn’t just a generic tool walk-through—we are going to pull back the curtain and look at customized workflows built specifically around your current bottlenecks.
          </p>

          {/* Styled Booking Details Box */}
          <div style={{
            backgroundColor: '#f4fbfc',
            padding: '20px',
            borderRadius: '6px',
            borderLeft: '4px solid #069BAF',
            marginBottom: '28px'
          }}>
            <p style={{ 
              fontFamily: fontStack,
              margin: '0 0 12px 0', 
              fontWeight: 'bold', 
              color: '#069BAF', 
              fontSize: '13px', 
              letterSpacing: '0.8px', 
              textTransform: 'uppercase' 
            }}>
              Your Session Details
            </p>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <tbody>
                <tr>
                  <td style={{ fontFamily: fontStack, padding: '6px 0', fontSize: '14px', color: '#666', width: '90px' }}><strong>Date:</strong></td>
                  <td style={{ fontFamily: fontStack, padding: '6px 0', fontSize: '14px', color: '#111', fontWeight: 'bold' }}>{selectedDate || 'N/A'}</td>
                </tr>
                <tr>
                  <td style={{ fontFamily: fontStack, padding: '6px 0', fontSize: '14px', color: '#666' }}><strong>Time:</strong></td>
                  <td style={{ fontFamily: fontStack, padding: '6px 0', fontSize: '14px', color: '#111', fontWeight: 'bold' }}>{selectedTime || 'N/A'}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* High-Converting CTA Area */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <p style={{ fontSize: '14px', color: '#4a4a4a', margin: '0 0 16px 0', fontWeight: '500', lineHeight: '1.5' }}>
              Want a quick reminder or need to share details early? <br/>Drop us a line directly on WhatsApp:
            </p>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: fontStack,
                display: 'inline-block',
                backgroundColor: '#25D366',
                color: '#ffffff',
                padding: '14px 28px',
                fontSize: '15px',
                fontWeight: 'bold',
                textDecoration: 'none',
                borderRadius: '6px',
                boxShadow: '0 4px 12px rgba(37, 211, 102, 0.25)',
                letterSpacing: '0.3px'
              }}
            >
               Connect on WhatsApp
            </a>
          </div>

          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#4a4a4a', margin: '0 0 24px 0' }}>
            Let's get ready to build something great together. If you need to rearrange your calendar slot, just hit reply to this email anytime.
          </p>

          <p style={{ fontSize: '14px', color: '#777777', margin: 0, borderTop: '1px solid #eeeeee', paddingTop: '16px', lineHeight: '1.5' }}>
            See you soon,<br />
            <strong>The Consulty Team</strong>
          </p>
        </div>
      </div>

      {/* Footer Block */}
      <div style={{ maxWidth: '560px', margin: '20px auto 0', textAlign: 'center', fontSize: '12px', color: '#999999', lineHeight: '1.5' }}>
        <p style={{ margin: '0 0 4px 0' }}>
          You received this email because you scheduled an optimization call with Consulty.
        </p>
        <p style={{ margin: 0 }}>
          Consulty Inc. • Pakistan
        </p>
      </div>
    </div>
  );
};