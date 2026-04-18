import { Path } from '../paths'

describe('Path enum — legal paths', () => {
  it('defines the Privacy path', () => {
    expect(Path.Privacy).toBe('/legal/privacy')
  })

  it('defines the Terms path', () => {
    expect(Path.Terms).toBe('/legal/terms')
  })

  it('defines the AcceptableUse path', () => {
    expect(Path.AcceptableUse).toBe('/legal/acceptable-use')
  })

  it('defines the Licence path', () => {
    expect(Path.Licence).toBe('/legal/licence')
  })

  it('has distinct values for every legal path', () => {
    const values = [Path.Privacy, Path.Terms, Path.AcceptableUse, Path.Licence]
    expect(new Set(values).size).toBe(values.length)
  })
})
