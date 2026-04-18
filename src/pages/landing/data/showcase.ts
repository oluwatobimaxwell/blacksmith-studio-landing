export interface ShowcaseProject {
  id: string
  title: string
  author: string
  stack: string[]
  tasks: number
  duration: string
  cost: string
  image: string
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'blog-comments',
    title: 'Comment system for a blog',
    author: '@marta.dev',
    stack: ['Next.js', 'Django', 'Postgres'],
    tasks: 6,
    duration: '47 min',
    cost: '$0.83',
    image: '/assets/screenshots/canvas.svg',
  },
  {
    id: 'inventory',
    title: 'Inventory tracker for a small shop',
    author: '@kwame.builds',
    stack: ['React', 'FastAPI', 'SQLite'],
    tasks: 9,
    duration: '1 h 12 min',
    cost: '$1.41',
    image: '/assets/screenshots/editor.svg',
  },
  {
    id: 'scheduling',
    title: 'Class scheduling portal',
    author: '@priya.codes',
    stack: ['Remix', 'Django', 'Postgres'],
    tasks: 11,
    duration: '1 h 48 min',
    cost: '$2.07',
    image: '/assets/screenshots/chat.svg',
  },
  {
    id: 'invoices',
    title: 'Invoicing tool for a freelancer',
    author: '@leo.build',
    stack: ['SvelteKit', 'Supabase'],
    tasks: 7,
    duration: '58 min',
    cost: '$1.02',
    image: '/assets/screenshots/git.svg',
  },
  {
    id: 'cms',
    title: 'Content studio for a podcast',
    author: '@naomi.ships',
    stack: ['Next.js', 'Convex', 'R2'],
    tasks: 12,
    duration: '2 h 03 min',
    cost: '$2.34',
    image: '/assets/screenshots/terminal.svg',
  },
  {
    id: 'dashboard',
    title: 'Ops dashboard for a logistics co.',
    author: '@jun.iterates',
    stack: ['Vite', 'NestJS', 'Postgres'],
    tasks: 14,
    duration: '2 h 41 min',
    cost: '$3.15',
    image: '/assets/screenshots/canvas.svg',
  },
]
