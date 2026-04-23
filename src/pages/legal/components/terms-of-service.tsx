import {
  DocSection,
  DocParagraph,
  DocList,
  DocListItem,
  DocEmphasis,
  DocLink,
} from './legal-document'

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
      <DocSection id="acceptance" title="Acceptance of Terms" index={1}>
        <DocParagraph>
          By downloading, installing, or using Blacksmith Studio, you agree to be bound by these
          Terms of Service. If you do not agree, do not use the software.
        </DocParagraph>
        <DocParagraph>
          These terms apply to all users of Blacksmith Studio, including both the free desktop
          application and any paid services we may offer. We may update these terms from time to
          time — continued use of the software after changes constitutes acceptance of the
          revised terms.
        </DocParagraph>
      </DocSection>

      <DocSection id="using" title="Using Blacksmith Studio" index={2}>
        <DocParagraph>
          Blacksmith Studio is free, open-source software released under the MIT Licence. You
          may use, copy, modify, and distribute it in accordance with that licence.
        </DocParagraph>
        <DocParagraph>
          Certain cloud features (account management, sync, collaboration) are provided as an
          optional service. Use of these features is subject to these terms in addition to the
          MIT Licence.
        </DocParagraph>
        <DocList>
          <DocListItem>You must be at least 13 years old to create an account</DocListItem>
          <DocListItem>
            You are responsible for maintaining the security of your account credentials
          </DocListItem>
          <DocListItem>You may not share, sell, or transfer access to your account</DocListItem>
          <DocListItem>
            You are responsible for all activity that occurs under your account
          </DocListItem>
        </DocList>
      </DocSection>

      <DocSection id="conduct" title="Acceptable Conduct" index={3}>
        <DocParagraph>
          When using Blacksmith Studio and any associated cloud services, you agree not to
          engage in conduct that:
        </DocParagraph>
        <DocList>
          <DocListItem>
            <DocEmphasis>Abuses our infrastructure</DocEmphasis> — including automated scraping,
            denial-of-service attacks, or sending spam through our services
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Violates others&apos; rights</DocEmphasis> — including intellectual
            property rights, privacy rights, or rights under applicable law
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Circumvents security measures</DocEmphasis> — including
            reverse-engineering proprietary cloud components, attempting to bypass
            authentication, or probing for vulnerabilities without written authorisation
          </DocListItem>
          <DocListItem>
            <DocEmphasis>Misrepresents identity</DocEmphasis> — including impersonating other
            users, Blacksmith Studio employees, or third parties
          </DocListItem>
        </DocList>
        <DocParagraph>
          See our <DocLink href="/legal/acceptable-use">Acceptable Use Policy</DocLink> for the
          complete list of permitted and prohibited activities.
        </DocParagraph>
      </DocSection>

      <DocSection id="warranties" title="No Warranties" index={4}>
        <DocParagraph>
          Blacksmith Studio is provided <DocEmphasis>&quot;as is&quot;</DocEmphasis> and{' '}
          <DocEmphasis>&quot;as available&quot;</DocEmphasis>, without warranty of any kind. To
          the maximum extent permitted by applicable law, we disclaim all warranties, express
          or implied, including:
        </DocParagraph>
        <DocList>
          <DocListItem>
            Warranties of merchantability or fitness for a particular purpose
          </DocListItem>
          <DocListItem>
            Warranties that the software will be uninterrupted, error-free, or secure
          </DocListItem>
          <DocListItem>
            Warranties regarding the accuracy or reliability of any output or result
          </DocListItem>
        </DocList>
        <DocParagraph>
          You use the software entirely at your own risk. We strongly recommend maintaining
          regular backups of all important data.
        </DocParagraph>
      </DocSection>

      <DocSection id="liability" title="Limitation of Liability" index={5}>
        <DocParagraph>
          To the fullest extent permitted by law, Blacksmith Studio and its contributors shall
          not be liable for any indirect, incidental, special, exemplary, or consequential
          damages arising from your use of the software or services, including but not limited
          to:
        </DocParagraph>
        <DocList>
          <DocListItem>Loss of data, revenue, profits, or business opportunities</DocListItem>
          <DocListItem>Costs of substitute goods or services</DocListItem>
          <DocListItem>
            Damages resulting from unauthorised access to your account or data
          </DocListItem>
        </DocList>
        <DocParagraph>
          Our total liability for any claim arising out of these terms shall not exceed the
          amount you paid us in the twelve months preceding the claim, or £100 GBP, whichever
          is greater.
        </DocParagraph>
      </DocSection>
    </>
  )
}
