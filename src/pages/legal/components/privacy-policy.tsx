import {
  DocSection,
  DocSubHeading,
  DocParagraph,
  DocList,
  DocListItem,
  DocEmphasis,
  DocLink,
  DocCode,
} from './legal-document'

export const privacyMeta = {
  title: 'Privacy Policy',
  lastUpdated: 'April 18, 2026',
  sections: [
    { id: 'information-we-collect', title: 'Information We Collect' },
    { id: 'how-we-use', title: 'How We Use Your Information' },
    { id: 'data-sharing', title: 'Data Sharing & Disclosure' },
    { id: 'your-rights', title: 'Your Rights & Choices' },
  ],
}

export function PrivacyPolicy() {
  return (
    <>
      <DocSection id="information-we-collect" title="Information We Collect" index={1}>
        <DocParagraph>
          Blacksmith Studio is a desktop application that runs locally on your machine. We are
          committed to collecting only the minimum amount of data necessary to provide and
          improve our services.
        </DocParagraph>

        <DocSubHeading>Information you provide</DocSubHeading>
        <DocParagraph>
          When you create a Blacksmith account or interact with our services, we may collect:
        </DocParagraph>
        <DocList>
          <DocListItem>Your name and email address when you register for an account</DocListItem>
          <DocListItem>Authentication credentials used to secure your account</DocListItem>
          <DocListItem>
            Feedback, bug reports, or support requests you voluntarily submit
          </DocListItem>
          <DocListItem>
            Payment information if you subscribe to a paid plan (processed by our payment
            provider — we never store full card numbers)
          </DocListItem>
        </DocList>

        <DocSubHeading>Information collected automatically</DocSubHeading>
        <DocParagraph>
          When you use Blacksmith Studio, we may automatically collect certain technical
          information:
        </DocParagraph>
        <DocList>
          <DocListItem>Application version, operating system, and device type</DocListItem>
          <DocListItem>
            Anonymous usage analytics such as feature usage frequency and session duration
          </DocListItem>
          <DocListItem>Crash reports and error logs to help us diagnose and fix issues</DocListItem>
        </DocList>

        <DocSubHeading>Information we do not collect</DocSubHeading>
        <DocParagraph>
          We <DocEmphasis>never</DocEmphasis> collect, transmit, or store your source code,
          project files, or any content within your local workspace unless you explicitly choose
          to share it (for example, when submitting a bug report with a reproduction).
        </DocParagraph>
      </DocSection>

      <DocSection id="how-we-use" title="How We Use Your Information" index={2}>
        <DocParagraph>We use the information we collect for the following purposes:</DocParagraph>
        <DocList>
          <DocListItem>
            <DocEmphasis>Providing the service</DocEmphasis> — to create and manage your account,
            authenticate sessions, and deliver features you&apos;ve requested
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Improving the product</DocEmphasis> — to understand how features are
            used, identify bugs, and prioritise our roadmap
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Communication</DocEmphasis> — to send transactional emails (password
            resets, billing receipts) and, with your consent, product updates
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Security</DocEmphasis> — to detect, prevent, and respond to fraud,
            abuse, or security incidents
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Legal compliance</DocEmphasis> — to comply with applicable laws,
            regulations, and legal processes
          </DocListItem>
        </DocList>
        <DocParagraph>
          We do not sell your personal data. We do not use your data for advertising. We do not
          use your code or project contents to train machine learning models.
        </DocParagraph>
      </DocSection>

      <DocSection id="data-sharing" title="Data Sharing & Disclosure" index={3}>
        <DocParagraph>
          We share your information only in the following limited circumstances:
        </DocParagraph>
        <DocList>
          <DocListItem>
            <DocEmphasis>Service providers</DocEmphasis> — trusted third parties that help us
            operate our services (hosting, payment processing, analytics). These providers are
            contractually bound to use your data only for the purposes we specify
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Legal requirements</DocEmphasis> — when we are required by law,
            regulation, or valid legal process to disclose information
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Business transfers</DocEmphasis> — in connection with a merger,
            acquisition, or sale of assets, with prior notice to affected users
          </DocListItem>
          <DocListItem>
            <DocEmphasis>With your consent</DocEmphasis> — when you explicitly authorise us to
            share specific information
          </DocListItem>
        </DocList>
        <DocParagraph>
          We use end-to-end encryption for all data in transit and encrypt data at rest. Access
          to user data within our organisation is restricted on a need-to-know basis with audit
          logging.
        </DocParagraph>
      </DocSection>

      <DocSection id="your-rights" title="Your Rights & Choices" index={4}>
        <DocParagraph>
          Depending on your location, you may have specific rights regarding your personal data
          under applicable privacy laws (including GDPR and CCPA). These rights may include:
        </DocParagraph>
        <DocList>
          <DocListItem>
            <DocEmphasis>Access</DocEmphasis> — request a copy of the personal data we hold
            about you
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Correction</DocEmphasis> — request that we correct inaccurate or
            incomplete data
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Deletion</DocEmphasis> — request that we delete your personal data,
            subject to legal retention requirements
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Portability</DocEmphasis> — request a machine-readable export of your
            data
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Opt-out</DocEmphasis> — disable anonymous analytics collection at any
            time from <DocCode>Settings → Privacy</DocCode>
          </DocListItem>
        </DocList>
        <DocParagraph>
          To exercise any of these rights, contact us at{' '}
          <DocLink href="mailto:privacy@blacksmith.studio">privacy@blacksmith.studio</DocLink>.
          We will respond within 30 days.
        </DocParagraph>
      </DocSection>
    </>
  )
}
