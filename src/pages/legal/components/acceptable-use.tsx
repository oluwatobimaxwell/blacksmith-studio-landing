import {
  DocSection,
  DocSubHeading,
  DocParagraph,
  DocList,
  DocListItem,
  DocEmphasis,
  DocLink,
} from './legal-document'

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
      <DocSection id="permitted-use" title="Permitted Use" index={1}>
        <DocParagraph>
          Blacksmith Studio is designed to help developers build software faster. The following
          uses are explicitly permitted and encouraged:
        </DocParagraph>

        <DocSubHeading>Building software</DocSubHeading>
        <DocList>
          <DocListItem>
            Developing web applications, APIs, CLI tools, libraries, and other software projects
          </DocListItem>
          <DocListItem>Using AI agents to generate, review, refactor, and debug code</DocListItem>
          <DocListItem>
            Building and deploying projects for personal, commercial, or open-source purposes
          </DocListItem>
          <DocListItem>Integrating with external APIs, services, and databases</DocListItem>
        </DocList>

        <DocSubHeading>Learning and exploration</DocSubHeading>
        <DocList>
          <DocListItem>Learning new programming languages, frameworks, and tools</DocListItem>
          <DocListItem>Experimenting with AI-assisted development workflows</DocListItem>
          <DocListItem>
            Security research — including authorised penetration testing, CTF competitions, and
            defensive security work on systems you own or have explicit written permission to
            test
          </DocListItem>
          <DocListItem>Contributing to open-source projects</DocListItem>
        </DocList>
      </DocSection>

      <DocSection id="prohibited" title="Prohibited Activities" index={2}>
        <DocParagraph>
          The following activities are strictly prohibited when using Blacksmith Studio:
        </DocParagraph>

        <DocSubHeading>Harmful and malicious use</DocSubHeading>
        <DocList>
          <DocListItem>
            <DocEmphasis>Weaponization</DocEmphasis> — using the software or AI agents to create
            malware, ransomware, spyware, or other tools designed to harm systems or users
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Mass targeting</DocEmphasis> — automated attacks, credential stuffing,
            or any activity that targets systems or users at scale without authorisation
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Infrastructure attacks</DocEmphasis> — denial-of-service attacks,
            network intrusion, or exploitation of vulnerabilities in systems you do not own or
            have permission to test
          </DocListItem>
        </DocList>

        <DocSubHeading>Illegal and unethical activity</DocSubHeading>
        <DocList>
          <DocListItem>
            Any activity that violates applicable laws or regulations in your jurisdiction or
            the jurisdiction of your target
          </DocListItem>
          <DocListItem>
            Generating, distributing, or storing content that is illegal, including material
            that sexually exploits minors
          </DocListItem>
          <DocListItem>
            Violating others&apos; intellectual property rights, including copyright, trademark,
            and trade secrets
          </DocListItem>
          <DocListItem>
            Collecting or harvesting personal data without consent, or in violation of
            applicable privacy laws such as GDPR or CCPA
          </DocListItem>
        </DocList>

        <DocSubHeading>Abuse of our services</DocSubHeading>
        <DocList>
          <DocListItem>
            Attempting to reverse-engineer, decompile, or disassemble proprietary cloud
            components of Blacksmith Studio
          </DocListItem>
          <DocListItem>
            Using our infrastructure to send spam, phishing emails, or other unsolicited
            communications
          </DocListItem>
          <DocListItem>
            Circumventing rate limits, access controls, or other technical safeguards
          </DocListItem>
          <DocListItem>
            Reselling or sublicensing access to cloud features without our written consent
          </DocListItem>
        </DocList>
      </DocSection>

      <DocSection id="reporting" title="Reporting Violations" index={3}>
        <DocParagraph>
          If you become aware of any use of Blacksmith Studio that violates this policy, or if
          you discover a security vulnerability in our software or services, please report it
          responsibly.
        </DocParagraph>
        <DocParagraph>
          For abuse reports and policy violations, contact us at{' '}
          <DocLink href="mailto:abuse@blacksmith.studio">abuse@blacksmith.studio</DocLink>.
        </DocParagraph>
        <DocParagraph>
          For security vulnerability disclosures, please use our responsible disclosure process
          and contact{' '}
          <DocLink href="mailto:security@blacksmith.studio">security@blacksmith.studio</DocLink>.
          We aim to acknowledge all valid reports within 48 hours and resolve critical issues
          within 14 days.
        </DocParagraph>
        <DocParagraph>
          Violations of this policy may result in suspension or termination of your account,
          reporting to law enforcement, and legal action where appropriate.
        </DocParagraph>
      </DocSection>
    </>
  )
}
