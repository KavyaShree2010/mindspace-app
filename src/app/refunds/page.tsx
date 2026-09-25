import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata = { title: "Refund Policy | MindSpace" };

export default function RefundsPage() {
  return (
    <LegalPage title="Refund Policy" intro="MindSpace currently does not charge students for access or appointment requests, so there is no subscription or appointment fee to refund through this service.">
      <LegalSection title="No paid service at present"><p>MindSpace does not currently collect payment details, sell subscriptions, or charge for counselling appointments. Do not send card, UPI, or bank details through the app.</p></LegalSection>
      <LegalSection title="If charging is introduced"><p>Any future paid feature must show its price, taxes where applicable, cancellation terms, refund method, and support contact before payment. This page will be updated before paid functionality is enabled. The terms shown at checkout will apply to that transaction.</p></LegalSection>
      <LegalSection title="Incorrect or unauthorised charges"><p>If you believe a charge was made in error, contact your institution and <a href="mailto:admin@mindspace.edu.in" className="font-semibold text-brand-ink underline">admin@mindspace.edu.in</a> promptly with the transaction reference. Never include your password or full payment credentials.</p></LegalSection>
    </LegalPage>
  );
}
