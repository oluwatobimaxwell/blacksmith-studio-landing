import { useCallback, useMemo, useState } from 'react'
import { agents, type AgentProfileData } from './agents-data'

type AgentProfileDataOrNull = AgentProfileData | null

export function useAgentModal() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const open = useCallback((id: string) => setSelectedId(id), [])
  const close = useCallback(() => setSelectedId(null), [])

  const { agent, index } = useMemo(() => {
    if (!selectedId) return { agent: null as AgentProfileDataOrNull, index: -1 }
    const idx = agents.findIndex((a) => a.id === selectedId)
    const found = idx >= 0 ? agents[idx] ?? null : null
    return { agent: found, index: found ? idx : -1 }
  }, [selectedId])

  return { agent, index, total: agents.length, isOpen: !!agent, open, close }
}
