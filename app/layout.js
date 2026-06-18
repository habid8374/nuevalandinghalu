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
  title: 'HALU Plataforma | Sistema de Gestión Escolar para Colegios Colombianos',
  description: 'HALU es el sistema de gestión escolar todo-en-uno para colegios en Colombia. 14 módulos activos: académico, finanzas, asistencia QR, IA con Gemini, simulacros ICFES y más. Implementación en 15 días.',
  keywords: 'gestión escolar Colombia, software educativo colegio, plataforma escolar colombiana, sistema académico, notas digitales, asistencia QR, simulacros ICFES, gestión colegios Colombia',
  authors: [{ name: 'HALU Plataforma' }],
  metadataBase: new URL('https://haluplataform.com'),
  alternates: { canonical: 'https://haluplataform.com' },
  openGraph: {
    title: 'HALU Plataforma | Sistema de Gestión Escolar Colombiano',
    description: 'Sistema operativo escolar todo-en-uno para colegios en Colombia. 14 módulos, IA con Gemini, asistencia QR, pagos en línea. Implementación en 15 días.',
    url: 'https://haluplataform.com',
    siteName: 'HALU Plataforma',
    type: 'website',
    locale: 'es_CO',
    images: [{ url: 'https://haluplataform.com/halu-logo.jpg', width: 800, height: 600, alt: 'HALU Plataforma Escolar' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HALU Plataforma | Gestión Escolar Colombiana',
    description: 'Sistema operativo escolar para colegios en Colombia. 14 módulos, IA, pagos en línea.',
  },
  robots: { index: true, follow: true },
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