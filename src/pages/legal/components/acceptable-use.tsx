export const acceptableUseMeta = {
  title: 'Acceptable Use Policy',
  lastUpdated: 'April 18, 2026',
  sections: [
    { id: 'permitted-use', title: 'Permitted Use' },
    { id: 'prohibited', title: 'Prohibited Activities' },
    { id: 'reporting', title: 'Reporting Violations' },
  ],
}

export function AcceptableUse() {
  return (
    <>
      <section id="permitted-use" className="legal-fade-up legal-fade-up-1" style={{ opacity: 0 }}>
        <h2>Permitted Use</h2>
        <p>
          Blacksmith Studio is designed to help developers build software faster. The following uses are
          explicitly permitted and encouraged:
        </p>

        <h3>Building software</h3>
        <ul>
          <li>Developing web applications, APIs, CLI tools, libraries, and other software projects</li>
          <li>Using AI agents to generate, review, refactor, and debug code</li>
          <li>Building and deploying projects for personal, commercial, or open-source purposes</li>
          <li>Integrating with external APIs, services, and databases</li>
        </ul>

        <h3>Learning and exploration</h3>
        <ul>
          <li>Learning new programming languages, frameworks, and tools</li>
          <li>Experimenting with AI-assisted development workflows</li>
          <li>
            Security research — including authorised penetration testing, CTF competitions, and defensive
            security work on systems you own or have explicit written permission to test
          </li>
          <li>Contributing to open-source projects</li>
        </ul>
      </section>

      <section id="prohibited" className="legal-fade-up legal-fade-up-2" style={{ opacity: 0 }}>
        <h2>Prohibited Activities</h2>
        <p>The following activities are strictly prohibited when using Blacksmith Studio:</p>

        <h3>Harmful and malicious use</h3>
        <ul>
          <li>
            <strong>Weaponization</strong> — using the software or AI agents to create malware, ransomware,
            spyware, or other tools designed to harm systems or users
          </li>
          <li>
            <strong>Mass targeting</strong> — automated attacks, credential stuffing, or any activity that
            targets systems or users at scale without authorisation
          </li>
          <li>
            <strong>Infrastructure attacks</strong> — denial-of-service attacks, network intrusion, or
            exploitation of vulnerabilities in systems you do not own or have permission to test
          </li>
        </ul>

        <h3>Illegal and unethical activity</h3>
        <ul>
          <li>
            Any activity that violates applicable laws or regulations in your jurisdiction or the
            jurisdiction of your target
          </li>
          <li>
            Generating, distributing, or storing content that is illegal, including material that
            sexually exploits minors
          </li>
          <li>
            Violating others&apos; intellectual property rights, including copyright, trademark, and
            trade secrets
          </li>
          <li>
            Collecting or harvesting personal data without consent, or in violation of applicable privacy
            laws such as GDPR or CCPA
          </li>
        </ul>

        <h3>Abuse of our services</h3>
        <ul>
          <li>
            Attempting to reverse-engineer, decompile, or disassemble proprietary cloud components of
            Blacksmith Studio
          </li>
          <li>
            Using our infrastructure to send spam, phishing emails, or other unsolicited communications
          </li>
          <li>Circumventing rate limits, access controls, or other technical safeguards</li>
          <li>
            Reselling or sublicensing access to cloud features without our written consent
          </li>
        </ul>
      </section>

      <section id="reporting" className="legal-fade-up legal-fade-up-3" style={{ opacity: 0 }}>
        <h2>Reporting Violations</h2>
        <p>
          If you become aware of any use of Blacksmith Studio that violates this policy, or if you
          discover a security vulnerability in our software or services, please report it responsibly.
        </p>
        <p>
          For abuse reports and policy violations, contact us at{' '}
          <a href="mailto:abuse@blacksmith.studio">abuse@blacksmith.studio</a>.
        </p>
        <p>
          For security vulnerability disclosures, please use our responsible disclosure process and
          contact{' '}
          <a href="mailto:security@blacksmith.studio">security@blacksmith.studio</a>. We aim to
          acknowledge all valid reports within 48 hours and resolve critical issues within 14 days.
        </p>
        <p>
          Violations of this policy may result in suspension or termination of your account, reporting
          to law enforcement, and legal action where appropriate.
        </p>
      </section>
    </>
  )
}
