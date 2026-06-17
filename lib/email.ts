import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendLeadConfirmation({
  toProspect,
  toInternal,
  from,
  subject,
  html,
}: {
  toProspect: string;
  toInternal: string;
  from: string;
  subject: string;
  html: string;
}) {
  // Send email to the prospect
  await resend.emails.send({
    from,
    to: toProspect,
    subject,
    html,
  });

  // Send copy to internal address
  await resend.emails.send({
    from,
    to: toInternal,
    subject: `[Consulty] New Lead – ${toProspect}`,
    html,
  });
}
