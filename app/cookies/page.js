import Link from 'next/link';

export const metadata = {
  title: 'Política de Cookies | HALU Plataforma',
  description: 'Información sobre el uso de cookies en HALU Plataforma escolar.',
};

export default function Cookies() {
  return (
    <div className="bg-[#F8F6F3] min-h-screen">
      <header className="bg-white border-b border-[#E5E3DF] py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <img src="/halu-logo.jpg" alt="HALU" className="h-10 rounded-lg" />
          </Link>
          <Link href="/" className="text-sm text-[#1B4B7A] hover:text-[#FF6B7A] transition-colors font-medium">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#1B4B7A] mb-2">Política de Cookies</h1>
        <p className="text-[#6B6B6B] mb-10">Última actualización: junio de 2026</p>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E5E3DF] space-y-8 text-[#2C2C2C]">

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">¿Qué son las cookies?</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Nos permiten recordar tus preferencias, mantener tu sesión activa y entender cómo usas nuestra plataforma para mejorarla continuamente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">Tipos de cookies que usamos</h2>
            <div className="space-y-4">
              <div className="bg-[#F8F6F3] p-4 rounded-xl">
                <h3 className="font-bold text-[#1B4B7A] mb-1">Cookies esenciales</h3>
                <p className="text-sm text-[#6B6B6B]">Necesarias para el funcionamiento básico de la plataforma: autenticación de sesión, seguridad y navegación. No pueden desactivarse.</p>
              </div>
              <div className="bg-[#F8F6F3] p-4 rounded-xl">
                <h3 className="font-bold text-[#1B4B7A] mb-1">Cookies de preferencias</h3>
                <p className="text-sm text-[#6B6B6B]">Recuerdan tus configuraciones y preferencias de uso dentro de la plataforma (idioma, vista, configuraciones de módulos).</p>
              </div>
              <div className="bg-[#F8F6F3] p-4 rounded-xl">
                <h3 className="font-bold text-[#1B4B7A] mb-1">Cookies analíticas</h3>
                <p className="text-sm text-[#6B6B6B]">Nos ayudan a entender cómo los usuarios interactúan con la landing page para mejorar la experiencia. Usamos datos anonimizados y no identificamos usuarios individuales.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">¿Cómo controlar las cookies?</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-3">
              Puedes controlar y eliminar las cookies desde la configuración de tu navegador:
            </p>
            <ul className="list-disc list-inside text-[#6B6B6B] space-y-2 pl-2">
              <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
              <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad</li>
              <li><strong>Safari:</strong> Preferencias → Privacidad</li>
              <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
            </ul>
            <p className="text-[#6B6B6B] mt-3 text-sm">
              Ten en cuenta que deshabilitar las cookies esenciales puede afectar el funcionamiento de la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">Cookies de terceros</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Algunos servicios integrados en HALU (como Google Gemini para IA y Mercado Pago para pagos) pueden instalar sus propias cookies. Estas están sujetas a las políticas de privacidad de cada proveedor y escapan a nuestro control directo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">Contacto</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Si tienes preguntas sobre nuestra política de cookies, escríbenos a:{' '}
              <a href="mailto:haluplataformaescolar@gmail.com" className="text-[#FF6B7A] hover:underline">
                haluplataformaescolar@gmail.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <footer className="text-center py-8 text-sm text-[#6B6B6B]">
        © 2026 HALU Plataforma · Sabanalarga, Atlántico, Colombia
      </footer>
    </div>
  );
}
