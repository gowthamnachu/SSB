import type { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'SSB Constructions & Roadways | Building Infrastructure, Powering Progress',
  description: 'SSB Constructions & Roadways - Leading construction company specializing in CC Roads, CC Drains, Building Construction, and Infrastructure Development. 11+ years of excellence with ₹80+ Crores project value.',
  keywords: 'construction company, roadways, CC roads, CC drains, infrastructure development, building construction, India construction',
  authors: [{ name: 'SSB Constructions & Roadways' }],
  icons: {
    icon: [
      { url: '/SSB_LOGO_Transp.png', sizes: '32x32', type: 'image/png' },
      { url: '/SSB_LOGO_Transp.png', sizes: '64x64', type: 'image/png' },
      { url: '/SSB_LOGO_Transp.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/SSB_LOGO_Transp.png',
    apple: { url: '/SSB_LOGO_Transp.png', sizes: '180x180' },
  },
  openGraph: {
    title: 'SSB Constructions & Roadways',
    description: 'Building Roads. Creating Infrastructure. Powering Progress.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-proxima antialiased">
        {children}
      </body>
    </html>
  )
}
