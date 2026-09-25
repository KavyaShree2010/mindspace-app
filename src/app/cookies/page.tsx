import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata = { title: "Cookies Policy | MindSpace" };

export default function CookiesPage() {
  return (
    <LegalPage title="Cookies Policy" intro="MindSpace uses a small number of cookies needed for the service and does not currently run advertising or analytics cookies.">
      <LegalSection title="Necessary cookies"><p><strong>mindspace-session</strong> keeps you signed in and is HTTP-only. <strong>mindspace-theme</strong> remembers your light or dark theme. These are necessary or requested preferences and are not used to build an advertising profile.</p></LegalSection>
      <LegalSection title="Consent and optional tracking"><p>There are currently no optional analytics, advertising, social-media, or embedded-media trackers enabled on the site. The cookie notice records your choice in local browser storage so it does not repeatedly appear; it does not activate tracking. If analytics or a third-party embed is added later, it must be separately disclosed and gated by consent where required.</p></LegalSection>
      <LegalSection title="Third-party services"><p>Google Calendar is an optional authenticated integration for counsellors. It is not a website tracking cookie; when enabled, Google processes calendar data under its own terms and privacy policy.</p></LegalSection>
      <LegalSection title="Your choices"><p>You can clear cookies and local storage in your browser. Clearing the session cookie signs you out, and clearing the theme cookie restores the default theme. Blocking necessary cookies can prevent sign-in or preferences from working.</p></LegalSection>
    </LegalPage>
  );
}
