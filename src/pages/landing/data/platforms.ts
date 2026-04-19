import { Apple, Terminal, Square, type LucideIcon } from 'lucide-react'

export interface Platform {
  icon: LucideIcon
  name: string
  meta: string
}

export const platforms: Platform[] = [
  { icon: Apple, name: 'macOS', meta: 'Universal · Apple Silicon + Intel' },
  { icon: Terminal, name: 'Linux', meta: 'AppImage · deb · rpm' },
  { icon: Square, name: 'Windows', meta: 'x64 · ARM64' },
]
