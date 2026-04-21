import type { BlogPost } from './types'
import { helsinkiForLagos } from './posts/helsinki-for-lagos'
import { elevenAgents } from './posts/eleven-agents'
import { aiCodingTechDebt } from './posts/ai-coding-tech-debt'
import { firstHundredBuilders } from './posts/first-hundred-builders'
import { whyTwentyDollars } from './posts/why-twenty-dollars'
import { seniorDiscipline } from './posts/senior-discipline'
import { teamNotAutopilot } from './posts/team-not-autopilot'
import { tasteIsEngineering } from './posts/taste-is-engineering'
import { firstLagosMeetup } from './posts/first-lagos-meetup'

export type { BlogPost, BlogTag, BlogContentBlock } from './types'

export const blogPosts: readonly BlogPost[] = [
  helsinkiForLagos,
  elevenAgents,
  aiCodingTechDebt,
  firstHundredBuilders,
  whyTwentyDollars,
  seniorDiscipline,
  teamNotAutopilot,
  tasteIsEngineering,
  firstLagosMeetup,
] as const

export function findBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
