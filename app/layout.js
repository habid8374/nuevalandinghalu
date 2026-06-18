import { Inter, Space_Grotesk, Sora } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600']
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['700']
})

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['700']
})

export const metadata = {
  title: 'HALU Plataforma - Sistema de Gestión Escolar Colombiano',
  description: 'HALU Plataforma - Sistema operativo escolar todo-en-uno para colegios en Colombia. Gestión académica, administrativa y financiera.',
  keywords: 'gestión escolar, software educativo Colombia, plataforma escolar, sistema académico',
  authors: [{ name: 'HALU Plataforma' }],
  openGraph: {
    title: 'HALU Plataforma - Sistema de Gestión Escolar',
    description: 'Sistema operativo escolar todo-en-uno para colegios en Colombia',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} ${sora.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}