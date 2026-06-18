# HALU Plataforma - Landing Page

Landing page profesional construida con Next.js 14 para HALU Plataforma.

## 🚀 Deployment

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente que es un proyecto Next.js
3. Click en "Deploy"

**O usa el CLI de Vercel:**

```bash
npm i -g vercel
cd landing-nextjs
vercel
```

### Railway

1. Conecta tu repositorio a Railway
2. Configura las variables:
   - **Build Command**: `cd landing-nextjs && yarn build`
   - **Start Command**: `cd landing-nextjs && yarn start`
3. Deploy

## 💻 Desarrollo Local

```bash
cd landing-nextjs
yarn install
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🏗️ Build para Producción

```bash
yarn build
yarn start
```

## 📁 Estructura del Proyecto

```
landing-nextjs/
├── app/
│   ├── layout.js       # Layout principal con metadatos SEO
│   ├── page.js         # Página principal (Home)
│   └── globals.css     # Estilos globales
├── components/
│   └── ui/             # Componentes UI (Shadcn)
├── lib/
│   └── utils.js        # Utilidades
├── public/
│   ├── halu-logo.jpg   # Logo HALU
│   └── favicon.svg     # Favicon
└── package.json
```

## 🎨 Stack Tecnológico

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Space Grotesk, Sora)

## 📞 Contacto

- **WhatsApp**: +57 324 686 8538
- **Email**: haluplataformaescolar@gmail.com
- **Ubicación**: Sabanalarga - Atlántico, Colombia

## 📝 Características

✅ SEO Optimizado
✅ Performance optimizado
✅ Totalmente responsive
✅ Smooth scroll navigation
✅ Precios reales configurados
✅ Logo y favicon profesionales
✅ Listo para deployment en Vercel/Railway