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

import { screen } from '@testing-library/react'
import { renderWithProviders } from '@/__tests__/test-utils'
import { AgentTeamSection } from '../agent-team-section'
import { agents } from '../../data/agents'

describe('AgentTeamSection', () => {
  describe('section landmark', () => {
    it('renders a section element with id="agents"', () => {
      renderWithProviders(<AgentTeamSection />)
      expect(document.getElementById('agents')).toBeInTheDocument()
    })

    it('renders the section as an HTML <section>', () => {
      renderWithProviders(<AgentTeamSection />)
      const section = document.getElementById('agents')
      expect(section?.tagName).toBe('SECTION')
    })
  })

  describe('heading and copy', () => {
    it('renders the eyebrow "Multi-Agent Team" label', () => {
      renderWithProviders(<AgentTeamSection />)
      expect(screen.getByText('Multi-Agent Team')).toBeInTheDocument()
    })

    it('renders the main headline as an h2', () => {
      renderWithProviders(<AgentTeamSection />)
      const h2 = screen.getByRole('heading', { level: 2 })
      expect(h2).toHaveTextContent('11 agents. One team.')
    })

    it('renders the descriptive subtext', () => {
      renderWithProviders(<AgentTeamSection />)
      expect(
        screen.getByText(/Every agent operates at the level of a senior professional/i),
      ).toBeInTheDocument()
    })

    it('renders the orchestrator badge text', () => {
      renderWithProviders(<AgentTeamSection />)
      expect(screen.getByText(/All coordinated by Claude AI/i)).toBeInTheDocument()
    })
  })

  describe('agent grid', () => {
    it('renders an h3 for every agent role', () => {
      renderWithProviders(<AgentTeamSection />)
      const h3s = screen.getAllByRole('heading', { level: 3 })
      expect(h3s).toHaveLength(agents.length)
    })

    it.each(agents.map((a) => [a.role] as const))(
      'renders the %s agent role',
      (role) => {
        renderWithProviders(<AgentTeamSection />)
        expect(screen.getByRole('heading', { level: 3, name: role })).toBeInTheDocument()
      },
    )

    it('renders 11 agents (matches the agents dataset)', () => {
      expect(agents.length).toBe(11)
      renderWithProviders(<AgentTeamSection />)
      const groups = screen.getAllByRole('group')
      expect(groups.length).toBe(agents.length)
    })

    it('renders the description for at least one agent from the dataset', () => {
      renderWithProviders(<AgentTeamSection />)
      expect(
        screen.getByText(agents[0].description),
      ).toBeInTheDocument()
    })
  })

  describe('no-throw rendering', () => {
    it('renders without throwing', () => {
      expect(() => renderWithProviders(<AgentTeamSection />)).not.toThrow()
    })
  })
})
