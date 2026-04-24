import { DISCORD_URL, GITHUB_URL } from '@/shared/constants'

export interface Room {
  id: string
  eyebrow: string
  title: string
  body: string
  ctaLabel: string
  ctaHref: string
  ctaVariant: 'primary' | 'ghost'
}

export const rooms: Room[] = [
  {
    id: 'discord',
    eyebrow: 'Live chat',
    title: 'The room is always open.',
    body: 'Ask, share, critique, celebrate. Twelve timezones, three thousand-plus builders. The conversation does not stop when your local clock does.',
    ctaLabel: 'Join on Discord',
    ctaHref: DISCORD_URL,
    ctaVariant: 'primary',
  },
  {
    id: 'github',
    eyebrow: 'Open development',
    title: 'The code is in the open.',
    body: 'The studio, the SDK, the templates: all public. File issues, send PRs, read the commits. We ship in public because we want you to see how it is made, and help make it.',
    ctaLabel: 'Contribute on GitHub',
    ctaHref: GITHUB_URL,
    ctaVariant: 'ghost',
  },
  {
    id: 'office-hours',
    eyebrow: 'Thursdays, open mic',
    title: 'Weekly working sessions.',
    body: 'Live demos, critique, and working sessions. Rotating regional slots so every timezone gets a prime-time seat, not just one.',
    ctaLabel: 'See the calendar',
    ctaHref: '#',
    ctaVariant: 'ghost',
  },
  {
    id: 'in-app',
    eyebrow: 'Human support',
    title: 'A real developer, one click away.',
    body: 'Stuck on something the AI cannot unstick? Raise a ticket from inside the studio. A community developer picks it up. Free, or at a fair rate you set together. A bridge, inside the tool.',
    ctaLabel: 'How it works',
    ctaHref: '#',
    ctaVariant: 'ghost',
  },
]
