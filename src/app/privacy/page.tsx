import { LegalPage, LegalSection } from "@/components/legal-page";
import { legalContact } from "@/lib/legal";

export const metadata = { title: "Privacy Policy | MindSpace" };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" intro="This policy explains what MindSpace collects, why it is needed, who may receive it, and the choices available to you.">
      <LegalSection title="Who is responsible?"><p>{legalContact} The institution that provides your account determines the counselling and administrative purposes for which account and support records are used.</p></LegalSection>
      <LegalSection title="Data we collect"><p>We collect only what the service needs: name, email, password hash, register number, department, optional semester and phone number; appointment details and check-in status; mood logs, journal entries, and information entered into counselling workflows; account, security, and consent records. Counsellors may connect Google Calendar, which then processes appointment details under Google&apos;s terms and privacy policy.</p></LegalSection>
      <LegalSection title="Why we use it"><p>We use this data to create and secure accounts, schedule and manage support sessions, provide student wellbeing features, support counsellor workflows, produce limited aggregate operational reports, prevent misuse, and meet legal or safety obligations. We do not use journal or mood content for advertising.</p></LegalSection>
      <LegalSection title="Sharing and access"><p>Access is role-limited: students access their own records; counsellors access records needed for assigned workflows; authorised administrators receive operational information and aggregate reporting as configured by the institution. We do not sell personal data. Service providers such as hosting, database, authentication, and optional calendar integrations process data only to provide enabled functionality.</p></LegalSection>
      <LegalSection title="Retention and security"><p>Records are retained for the period set by the institution and applicable law, then deleted or anonymised where practical. Passwords are stored as hashes. No online system can promise absolute security, so do not use MindSpace for emergency communication or share information you do not want stored in the service.</p></LegalSection>
      <LegalSection title="Your rights under India&apos;s DPDP Act"><p>Subject to the Act and applicable rules, you may request access to information about your personal data, correction, erasure where retention is not required, withdrawal of consent where consent is the basis, and grievance redressal. Requests can be sent to the contact above; we may verify identity and coordinate with your institution. You may also nominate another individual as permitted by law. Withdrawal may make features unavailable where the data is necessary to provide them.</p></LegalSection>
      <LegalSection title="Children and sensitive support information"><p>Use is intended for students who are authorised by their institution. Do not submit another person&apos;s information without permission. Counselling and wellbeing information can be sensitive; use the service only through your institution&apos;s approved process.</p></LegalSection>
      <LegalSection title="Changes and contact"><p>We may update this policy when the service or law changes. The version date above identifies the policy accepted at registration. For privacy questions or complaints, contact <a href="mailto:admin@mindspace.edu.in" className="font-semibold text-brand-ink underline">admin@mindspace.edu.in</a>.</p></LegalSection>
    </LegalPage>
  );
}
