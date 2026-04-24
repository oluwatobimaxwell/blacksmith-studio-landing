import { rooms } from '../rooms'
import { DISCORD_URL, GITHUB_URL } from '@/shared/constants'

describe('rooms data', () => {
  it('exports exactly four rooms', () => {
    expect(rooms).toHaveLength(4)
  })

  it('each room has the required fields with non-empty values', () => {
    for (const room of rooms) {
      expect(room.id.length).toBeGreaterThan(0)
      expect(room.eyebrow.length).toBeGreaterThan(0)
      expect(room.title.length).toBeGreaterThan(0)
      expect(room.body.length).toBeGreaterThan(0)
      expect(room.ctaLabel.length).toBeGreaterThan(0)
      expect(room.ctaHref.length).toBeGreaterThan(0)
      expect(['primary', 'ghost']).toContain(room.ctaVariant)
    }
  })

  it('room ids are unique', () => {
    const ids = rooms.map((r) => r.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('contains no em dash (U+2014) characters in any field', () => {
    for (const room of rooms) {
      for (const value of [room.id, room.eyebrow, room.title, room.body, room.ctaLabel, room.ctaHref]) {
        expect(value).not.toMatch(/—/)
      }
    }
  })

  it('wires Discord and GitHub rooms to the shared constant URLs', () => {
    const discord = rooms.find((r) => r.id === 'discord')
    const github = rooms.find((r) => r.id === 'github')
    expect(discord?.ctaHref).toBe(DISCORD_URL)
    expect(github?.ctaHref).toBe(GITHUB_URL)
  })

  it('rewrites GitHub room body to use a colon and "all public"', () => {
    const github = rooms.find((r) => r.id === 'github')
    expect(github?.body).toContain('The studio, the SDK, the templates: all public.')
  })

  it('rewrites office-hours body to use a comma instead of em dash', () => {
    const oh = rooms.find((r) => r.id === 'office-hours')
    expect(oh?.body).toContain('every timezone gets a prime-time seat, not just one.')
  })

  it('rewrites in-app body so the pricing aside stands as its own sentence', () => {
    const inApp = rooms.find((r) => r.id === 'in-app')
    expect(inApp?.body).toContain('A community developer picks it up. Free, or at a fair rate you set together.')
  })
})
