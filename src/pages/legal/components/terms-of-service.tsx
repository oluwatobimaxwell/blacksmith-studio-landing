export const termsMeta = {
  title: 'Terms of Service',
  lastUpdated: 'April 18, 2026',
  sections: [
    { id: 'acceptance', title: 'Acceptance of Terms' },
    { id: 'using', title: 'Using Blacksmith Studio' },
    { id: 'conduct', title: 'Acceptable Conduct' },
    { id: 'warranties', title: 'No Warranties' },
    { id: 'liability', title: 'Limitation of Liability' },
  ],
}

export function TermsOfService() {
  return (
    <>
      <section id="acceptance" className="legal-fade-up legal-fade-up-1" style={{ opacity: 0 }}>
        <h2>Acceptance of Terms</h2>
        <p>
          By downloading, installing, or using Blacksmith Studio, you agree to be bound by these Terms of
          Service. If you do not agree, do not use the software.
        </p>
        <p>
          These terms apply to all users of Blacksmith Studio, including both the free desktop application
          and any paid services we may offer. We may update these terms from time to time — continued use
          of the software after changes constitutes acceptance of the revised terms.
        </p>
      </section>

      <section id="using" className="legal-fade-up legal-fade-up-2" style={{ opacity: 0 }}>
        <h2>Using Blacksmith Studio</h2>
        <p>
          Blacksmith Studio is free, open-source software released under the MIT Licence. You may use,
          copy, modify, and distribute it in accordance with that licence.
        </p>
        <p>
          Certain cloud features (account management, sync, collaboration) are provided as an optional
          service. Use of these features is subject to these terms in addition to the MIT Licence.
        </p>
        <ul>
          <li>You must be at least 13 years old to create an account</li>
          <li>You are responsible for maintaining the security of your account credentials</li>
          <li>You may not share, sell, or transfer access to your account</li>
          <li>You are responsible for all activity that occurs under your account</li>
        </ul>
      </section>

      <section id="conduct" className="legal-fade-up legal-fade-up-3" style={{ opacity: 0 }}>
        <h2>Acceptable Conduct</h2>
        <p>
          When using Blacksmith Studio and any associated cloud services, you agree not to engage in
          conduct that:
        </p>
        <ul>
          <li>
            <strong>Abuses our infrastructure</strong> — including automated scraping, denial-of-service
            attacks, or sending spam through our services
          </li>
          <li>
            <strong>Violates others&apos; rights</strong> — including intellectual property rights,
            privacy rights, or rights under applicable law
          </li>
          <li>
            <strong>Circumvents security measures</strong> — including reverse-engineering proprietary
            cloud components, attempting to bypass authentication, or probing for vulnerabilities without
            written authorisation
          </li>
          <li>
            <strong>Misrepresents identity</strong> — including impersonating other users, Blacksmith
            Studio employees, or third parties
          </li>
        </ul>
        <p>
          See our <a href="/legal/acceptable-use">Acceptable Use Policy</a> for the complete list of
          permitted and prohibited activities.
        </p>
      </section>

      <section id="warranties" className="legal-fade-up legal-fade-up-4" style={{ opacity: 0 }}>
        <h2>No Warranties</h2>
        <p>
          Blacksmith Studio is provided <strong>&quot;as is&quot;</strong> and{' '}
          <strong>&quot;as available&quot;</strong>, without warranty of any kind. To the maximum extent
          permitted by applicable law, we disclaim all warranties, express or implied, including:
        </p>
        <ul>
          <li>Warranties of merchantability or fitness for a particular purpose</li>
          <li>Warranties that the software will be uninterrupted, error-free, or secure</li>
          <li>Warranties regarding the accuracy or reliability of any output or result</li>
        </ul>
        <p>
          You use the software entirely at your own risk. We strongly recommend maintaining regular
          backups of all important data.
        </p>
      </section>

      <section id="liability" className="legal-fade-up legal-fade-up-5" style={{ opacity: 0 }}>
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Blacksmith Studio and its contributors shall not be
          liable for any indirect, incidental, special, exemplary, or consequential damages arising from
          your use of the software or services, including but not limited to:
        </p>
        <ul>
          <li>Loss of data, revenue, profits, or business opportunities</li>
          <li>Costs of substitute goods or services</li>
          <li>Damages resulting from unauthorised access to your account or data</li>
        </ul>
        <p>
          Our total liability for any claim arising out of these terms shall not exceed the amount you
          paid us in the twelve months preceding the claim, or £100 GBP, whichever is greater.
        </p>
      </section>
    </>
  )
}
