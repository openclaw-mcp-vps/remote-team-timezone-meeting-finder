import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TimeSync — Find Optimal Meeting Times for Remote Teams',
  description: 'Analyzes team timezones, work preferences, and calendar availability to suggest fair meeting times for all participants.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="159d6106-6c35-4338-ad75-c69e177d115e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
