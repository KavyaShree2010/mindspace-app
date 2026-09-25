import { LegalPage, LegalSection } from "@/components/legal-page";
import { legalContact } from "@/lib/legal";

export const metadata = { title: "Terms and Conditions | MindSpace" };

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions" intro="These terms govern access to MindSpace, a campus support coordination service.">
      <LegalSection title="Accepting these terms"><p>By using MindSpace, you confirm that you are authorised to use the service and agree to these terms and the Privacy Policy. Registration requires affirmative consent; you can stop using the service if you do not agree.</p></LegalSection>
      <LegalSection title="What MindSpace provides"><p>MindSpace supports account management, appointment requests, check-in, student journaling and mood logging, counsellor workflows, and institution-level administration. Availability, counsellor allocation, response times, and features depend on your institution. MindSpace is not an emergency service, medical diagnosis tool, or replacement for qualified professional care.</p></LegalSection>
      <LegalSection title="Your responsibilities"><p>Keep credentials private, provide accurate information, use only your own account, respect other users, and do not upload unlawful, harmful, or unauthorised content. Report suspected account compromise or safety concerns to your institution immediately.</p></LegalSection>
      <LegalSection title="Acceptable use"><p>You must not probe, scrape, reverse engineer, disrupt, bypass access controls, impersonate another person, or use the service to send unsolicited material. We may suspend access to protect users, the institution, or the service, subject to applicable law and institutional procedures.</p></LegalSection>
      <LegalSection title="Content and records"><p>You retain responsibility for content you submit. You grant the institution and service operators the limited rights needed to store, display, secure, and process it for the service. Student journal and mood content is not made available to counsellors merely because it is stored in the account; access is governed by the product roles and institutional configuration described in the Privacy Policy.</p></LegalSection>
      <LegalSection title="Third-party services"><p>Optional integrations, including Google Calendar, are governed by their own terms and privacy notices. MindSpace does not control third-party availability or content.</p></LegalSection>
      <LegalSection title="Disclaimers and limits"><p>The service is provided on an availability basis and may change or be interrupted for maintenance, safety, or legal reasons. Nothing here excludes rights or remedies that cannot legally be excluded. For support, contact your campus administrator or {legalContact.replace("For privacy, account, or service questions, contact ", "")}.</p></LegalSection>
      <LegalSection title="Governing process"><p>Questions, complaints, and requests should first be raised with your institution or the contact listed below. These terms are intended to operate with applicable Indian law and the institution&apos;s policies; mandatory consumer, privacy, and other legal protections continue to apply.</p></LegalSection>
    </LegalPage>
  );
}
