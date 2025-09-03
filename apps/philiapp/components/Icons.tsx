import { LucideProps, MessageSquare, User } from 'lucide-react'

export const Icons = {
  user: User,
  logo: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 200 200'>
      <g>
        <path
          d='M40 40 L40 160 L60 160 L60 110 L100 110 C120 110 140 90 140 70 C140 50 120 40 100 40 Z M60 60 L100 60 C110 60 120 60 120 70 C120 80 110 90 100 90 L60 90 Z'
          fill='#4285F4'
        />
        <path
          d='M160 60 C160 50 150 40 140 40 C135 40 130 42 127 45 C124 42 119 40 114 40 C104 40 94 50 94 60 C94 70 104 80 127 100 C150 80 160 70 160 60 Z'
          fill='#EA4335'
        />
      </g>
    </svg>
  ),
  google: (props: LucideProps) => (
    <svg {...props} viewBox='0 0 24 24'>
      <path
        d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
        fill='#4285F4'
      />
      <path
        d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
        fill='#34A853'
      />
      <path d='M1 1h22v22H1z' fill='none' />
    </svg>
  ),
  commentReply: MessageSquare,
}
