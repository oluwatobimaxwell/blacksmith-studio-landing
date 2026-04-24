import { LandingShell } from '@/shared/components/landing-shell'
import { CommunityHero } from './components/community-hero'
import { CommunityRooms } from './components/community-rooms'

import { CommunityCall } from './components/community-call'

export default function CommunityPage() {
  return (
    <LandingShell active="community" currentPage="community">
      <CommunityHero />
      <CommunityRooms />

      <CommunityCall />
    </LandingShell>
  )
}
