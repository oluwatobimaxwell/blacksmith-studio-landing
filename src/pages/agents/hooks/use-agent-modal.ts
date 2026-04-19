import { useCallback, useMemo, useState } from 'react'
import { agents } from '../data/agents'

export function useAgentModal() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const open = useCallback((id: string) => setSelectedId(id), [])
  const close = useCallback(() => setSelectedId(null), [])

  const { agent, index } = useMemo(() => {
    if (!selectedId) return { agent: null, index: -1 }
    const idx = agents.findIndex((a) => a.id === selectedId)
    return { agent: idx >= 0 ? agents[idx] : null, index: idx }
  }, [selectedId])

  return { agent, index, total: agents.length, isOpen: !!agent, open, close }
}
