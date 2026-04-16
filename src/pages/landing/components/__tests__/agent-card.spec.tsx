vi.mock('framer-motion', async () => {
  const React = await import('react')
  return {
    motion: {
      create: (Component: any) =>
        React.forwardRef(
          (
            {
              initial,
              animate,
              exit,
              transition,
              variants,
              whileHover,
              whileTap,
              whileInView,
              viewport,
              ...props
            }: any,
            ref: any,
          ) => React.createElement(Component, { ...props, ref }),
        ),
    },
    AnimatePresence: ({ children }: any) =>
      React.createElement(React.Fragment, null, children),
    useReducedMotion: vi.fn().mockReturnValue(false),
    useAnimation: () => ({ start: vi.fn() }),
    useInView: () => true,
  }
})

import { screen, within } from '@testing-library/react'
import { ClipboardList } from 'lucide-react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { AgentCard } from '../agent-card'
import { agents } from '../../data/agents'
import type { AgentItem } from '../../data/agents'

const testAgent: AgentItem = {
  role: 'Test Agent',
  icon: ClipboardList,
  description: 'A test agent description for verifying rendering.',
  capabilities: ['Alpha', 'Beta', 'Gamma'],
}

describe('AgentCard', () => {
  describe('content rendering', () => {
    it('renders the agent role as an h3 heading', () => {
      renderWithProviders(<AgentCard agent={testAgent} />)
      const heading = screen.getByRole('heading', { level: 3, name: 'Test Agent' })
      expect(heading).toBeInTheDocument()
    })

    it('renders the agent description text', () => {
      renderWithProviders(<AgentCard agent={testAgent} />)
      expect(
        screen.getByText('A test agent description for verifying rendering.'),
      ).toBeInTheDocument()
    })

    it('renders every capability passed in', () => {
      renderWithProviders(<AgentCard agent={testAgent} />)
      for (const cap of testAgent.capabilities) {
        expect(screen.getByText(cap)).toBeInTheDocument()
      }
    })

    it('renders the "Ready" status text', () => {
      renderWithProviders(<AgentCard agent={testAgent} />)
      expect(screen.getByText('Ready')).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('renders a role="group" container for hover interactions', () => {
      renderWithProviders(<AgentCard agent={testAgent} />)
      expect(screen.getByRole('group')).toBeInTheDocument()
    })
  })

  describe('happy path with real agents data', () => {
    it.each(agents.map((a) => [a.role] as const))(
      'renders without throwing for the %s agent',
      (role) => {
        const agent = agents.find((a) => a.role === role)!
        expect(() => renderWithProviders(<AgentCard agent={agent} />)).not.toThrow()
      },
    )

    it('shows the role text of a real agent from the dataset', () => {
      const pm = agents.find((a) => a.role === 'Product Manager')!
      renderWithProviders(<AgentCard agent={pm} />)
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Product Manager')
    })
  })

  describe('edge cases', () => {
    it('renders when capabilities array is empty', () => {
      const agent: AgentItem = { ...testAgent, capabilities: [] }
      renderWithProviders(<AgentCard agent={agent} />)
      const group = screen.getByRole('group')
      // No capability pills should be present
      expect(within(group).queryByText('Alpha')).not.toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Agent')
    })

    it('renders when description is an empty string', () => {
      const agent: AgentItem = { ...testAgent, description: '' }
      expect(() => renderWithProviders(<AgentCard agent={agent} />)).not.toThrow()
      expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument()
    })

    it('re-renders with new props when the agent changes', () => {
      const { rerender } = renderWithProviders(<AgentCard agent={testAgent} />)
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Agent')

      const other: AgentItem = { ...testAgent, role: 'Second Agent' }
      rerender(<AgentCard agent={other} />)
      expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Second Agent')
    })
  })
})
