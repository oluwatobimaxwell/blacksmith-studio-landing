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
      <section id="information-we-collect" className="legal-fade-up legal-fade-up-1" style={{ opacity: 0 }}>
        <h2>Information We Collect</h2>
        <p>
          Blacksmith Studio is a desktop application that runs locally on your machine. We are committed to
          collecting only the minimum amount of data necessary to provide and improve our services.
        </p>

        <h3>Information you provide</h3>
        <p>When you create a Blacksmith account or interact with our services, we may collect:</p>
        <ul>
          <li>Your name and email address when you register for an account</li>
          <li>Authentication credentials used to secure your account</li>
          <li>Feedback, bug reports, or support requests you voluntarily submit</li>
          <li>
            Payment information if you subscribe to a paid plan (processed by our payment provider — we
            never store full card numbers)
          </li>
        </ul>

        <h3>Information collected automatically</h3>
        <p>When you use Blacksmith Studio, we may automatically collect certain technical information:</p>
        <ul>
          <li>Application version, operating system, and device type</li>
          <li>Anonymous usage analytics such as feature usage frequency and session duration</li>
          <li>Crash reports and error logs to help us diagnose and fix issues</li>
        </ul>

        <h3>Information we do not collect</h3>
        <p>
          We <strong>never</strong> collect, transmit, or store your source code, project files, or any
          content within your local workspace unless you explicitly choose to share it (for example, when
          submitting a bug report with a reproduction).
        </p>
      </section>

      <section id="how-we-use" className="legal-fade-up legal-fade-up-2" style={{ opacity: 0 }}>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>
            <strong>Providing the service</strong> — to create and manage your account, authenticate
            sessions, and deliver features you&apos;ve requested
          </li>
          <li>
            <strong>Improving the product</strong> — to understand how features are used, identify bugs,
            and prioritise our roadmap
          </li>
          <li>
            <strong>Communication</strong> — to send transactional emails (password resets, billing
            receipts) and, with your consent, product updates
          </li>
          <li>
            <strong>Security</strong> — to detect, prevent, and respond to fraud, abuse, or security
            incidents
          </li>
          <li>
            <strong>Legal compliance</strong> — to comply with applicable laws, regulations, and legal
            processes
          </li>
        </ul>
        <p>
          We do not sell your personal data. We do not use your data for advertising. We do not use your
          code or project contents to train machine learning models.
        </p>
      </section>

      <section id="data-sharing" className="legal-fade-up legal-fade-up-3" style={{ opacity: 0 }}>
        <h2>Data Sharing &amp; Disclosure</h2>
        <p>We share your information only in the following limited circumstances:</p>
        <ul>
          <li>
            <strong>Service providers</strong> — trusted third parties that help us operate our services
            (hosting, payment processing, analytics). These providers are contractually bound to use your
            data only for the purposes we specify
          </li>
          <li>
            <strong>Legal requirements</strong> — when we are required by law, regulation, or valid legal
            process to disclose information
          </li>
          <li>
            <strong>Business transfers</strong> — in connection with a merger, acquisition, or sale of
            assets, with prior notice to affected users
          </li>
          <li>
            <strong>With your consent</strong> — when you explicitly authorise us to share specific
            information
          </li>
        </ul>
        <p>
          We use end-to-end encryption for all data in transit and encrypt data at rest. Access to user
          data within our organisation is restricted on a need-to-know basis with audit logging.
        </p>
      </section>

      <section id="your-rights" className="legal-fade-up legal-fade-up-4" style={{ opacity: 0 }}>
        <h2>Your Rights &amp; Choices</h2>
        <p>
          Depending on your location, you may have specific rights regarding your personal data under
          applicable privacy laws (including GDPR and CCPA). These rights may include:
        </p>
        <ul>
          <li>
            <strong>Access</strong> — request a copy of the personal data we hold about you
          </li>
          <li>
            <strong>Correction</strong> — request that we correct inaccurate or incomplete data
          </li>
          <li>
            <strong>Deletion</strong> — request that we delete your personal data, subject to legal
            retention requirements
          </li>
          <li>
            <strong>Portability</strong> — request a machine-readable export of your data
          </li>
          <li>
            <strong>Opt-out</strong> — disable anonymous analytics collection at any time from{' '}
            <code>Settings → Privacy</code>
          </li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{' '}
          <a href="mailto:privacy@blacksmith.studio">privacy@blacksmith.studio</a>. We will respond within
          30 days.
        </p>
      </section>
    </>
  )
}
