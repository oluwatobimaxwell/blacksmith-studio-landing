export const licenceMeta = {
  title: 'Licence',
  lastUpdated: 'April 18, 2026',
  sections: [{ id: 'mit-licence', title: 'MIT Licence' }],
}

export function Licence() {
  return (
    <>
      <section id="mit-licence" className="legal-fade-up legal-fade-up-1" style={{ opacity: 0 }}>
        <h2>MIT Licence</h2>
        <p>Copyright &copy; 2026 Blacksmith Studio Contributors</p>
        <p>
          Permission is hereby granted, free of charge, to any person obtaining a copy of this software
          and associated documentation files (the &quot;Software&quot;), to deal in the Software without
          restriction, including without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the
          Software is furnished to do so, subject to the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be included in all copies or
          substantial portions of the Software.
        </p>
        <p>
          <strong>
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
            PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
            BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT
            OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
            DEALINGS IN THE SOFTWARE.
          </strong>
        </p>

        <h3>What this means</h3>
        <p>
          The MIT Licence is one of the most permissive open-source licences available. In plain
          language, it means:
        </p>
        <ul>
          <li>
            <strong>You can use it freely</strong> — for personal projects, commercial products,
            internal tools, or anything else
          </li>
          <li>
            <strong>You can modify it</strong> — fork the code, change it, improve it, build on top of
            it
          </li>
          <li>
            <strong>You can distribute it</strong> — share copies, include it in other projects, or
            redistribute modified versions
          </li>
          <li>
            <strong>You must keep the licence notice</strong> — include the copyright and licence text
            in all copies or substantial portions of the software
          </li>
          <li>
            <strong>No warranty</strong> — the software is provided as-is; the authors are not liable
            for any damages arising from its use
          </li>
        </ul>

        <h3>Third-party dependencies</h3>
        <p>
          Blacksmith Studio includes third-party open-source software. Each dependency is governed by
          its own licence. A full list of dependencies and their respective licences is available in the{' '}
          <code>THIRD_PARTY_LICENCES</code> file included with the application, and in the project&apos;s
          GitHub repository.
        </p>
        <p>
          If you have questions about the licence or want to discuss commercial arrangements, contact us
          at <a href="mailto:legal@blacksmith.studio">legal@blacksmith.studio</a>.
        </p>
      </section>
    </>
  )
}
