import {
  DocSection,
  DocSubHeading,
  DocParagraph,
  DocList,
  DocListItem,
  DocEmphasis,
  DocLink,
  DocCode,
  DocCallout,
} from './legal-document'

export const licenceMeta = {
  title: 'Licence',
  lastUpdated: 'April 18, 2026',
  sections: [{ id: 'mit-licence', title: 'MIT Licence' }],
}

export function Licence() {
  return (
    <>
      <DocSection id="mit-licence" title="MIT Licence" index={1}>
        <DocParagraph>Copyright © 2026 Blacksmith Studio Contributors</DocParagraph>
        <DocParagraph>
          Permission is hereby granted, free of charge, to any person obtaining a copy of this
          software and associated documentation files (the &quot;Software&quot;), to deal in the
          Software without restriction, including without limitation the rights to use, copy,
          modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
          and to permit persons to whom the Software is furnished to do so, subject to the
          following conditions:
        </DocParagraph>
        <DocParagraph>
          The above copyright notice and this permission notice shall be included in all copies
          or substantial portions of the Software.
        </DocParagraph>

        <DocCallout tone="accent">
          <DocEmphasis>
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR
            A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
            HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
            CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
            OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
          </DocEmphasis>
        </DocCallout>

        <DocSubHeading>What this means</DocSubHeading>
        <DocParagraph>
          The MIT Licence is one of the most permissive open-source licences available. In
          plain language, it means:
        </DocParagraph>
        <DocList>
          <DocListItem>
            <DocEmphasis>You can use it freely</DocEmphasis> — for personal projects, commercial
            products, internal tools, or anything else
          </DocListItem>
          <DocListItem>
            <DocEmphasis>You can modify it</DocEmphasis> — fork the code, change it, improve
            it, build on top of it
          </DocListItem>
          <DocListItem>
            <DocEmphasis>You can distribute it</DocEmphasis> — share copies, include it in
            other projects, or redistribute modified versions
          </DocListItem>
          <DocListItem>
            <DocEmphasis>You must keep the licence notice</DocEmphasis> — include the copyright
            and licence text in all copies or substantial portions of the software
          </DocListItem>
          <DocListItem>
            <DocEmphasis>No warranty</DocEmphasis> — the software is provided as-is; the authors
            are not liable for any damages arising from its use
          </DocListItem>
        </DocList>

        <DocSubHeading>Third-party dependencies</DocSubHeading>
        <DocParagraph>
          Blacksmith Studio includes third-party open-source software. Each dependency is
          governed by its own licence. A full list of dependencies and their respective
          licences is available in the <DocCode>THIRD_PARTY_LICENCES</DocCode> file included
          with the application, and in the project&apos;s GitHub repository.
        </DocParagraph>
        <DocParagraph>
          If you have questions about the licence or want to discuss commercial arrangements,
          contact us at{' '}
          <DocLink href="mailto:legal@blacksmith.studio">legal@blacksmith.studio</DocLink>.
        </DocParagraph>
      </DocSection>
    </>
  )
}
