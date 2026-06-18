import Link from 'next/link';

export const metadata = {
  title: 'Políticas de Privacidad | HALU Plataforma',
  description: 'Conoce cómo HALU Plataforma recopila, usa y protege tu información personal.',
};

export default function PoliticasPrivacidad() {
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
        <h1 className="text-4xl font-bold text-[#1B4B7A] mb-2">Políticas de Privacidad</h1>
        <p className="text-[#6B6B6B] mb-10">Última actualización: junio de 2026</p>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E5E3DF] space-y-8 text-[#2C2C2C]">

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">1. Información que recopilamos</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              HALU Plataforma recopila información personal necesaria para la prestación del servicio educativo, incluyendo: nombres, identificación, correo electrónico, número de teléfono, información académica y financiera de estudiantes, docentes y familias vinculadas a las instituciones educativas usuarias.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">2. Uso de la información</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-3">La información recopilada se utiliza exclusivamente para:</p>
            <ul className="list-disc list-inside text-[#6B6B6B] space-y-2 pl-2">
              <li>Gestión académica y administrativa de la institución educativa.</li>
              <li>Comunicación entre la institución, docentes y familias.</li>
              <li>Procesamiento de pagos y facturación electrónica.</li>
              <li>Mejora continua de la plataforma.</li>
              <li>Cumplimiento de obligaciones legales ante el MEN y entidades reguladoras.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">3. Protección de datos</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              HALU Plataforma cumple con la Ley 1581 de 2012 (Ley de Protección de Datos Personales de Colombia) y el Decreto 1377 de 2013. Los datos son almacenados en servidores seguros con cifrado SSL/TLS. No compartimos información personal con terceros sin autorización expresa, salvo requerimiento legal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">4. Derechos del titular</h2>
            <p className="text-[#6B6B6B] leading-relaxed mb-3">Como titular de datos personales, tienes derecho a:</p>
            <ul className="list-disc list-inside text-[#6B6B6B] space-y-2 pl-2">
              <li>Conocer, actualizar y rectificar tu información.</li>
              <li>Solicitar prueba de la autorización otorgada.</li>
              <li>Ser informado sobre el uso de tus datos.</li>
              <li>Revocar la autorización y solicitar la supresión de tus datos.</li>
              <li>Acceder gratuitamente a tus datos personales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">5. Menores de edad</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              El tratamiento de datos de menores de edad se realiza bajo la autorización de sus padres o acudientes, conforme a lo establecido en la Ley 1581 de 2012 y el Código de Infancia y Adolescencia (Ley 1098 de 2006).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">6. Contacto</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Para ejercer tus derechos o resolver dudas sobre el tratamiento de tus datos, contáctanos en:{' '}
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
