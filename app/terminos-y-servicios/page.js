import Link from 'next/link';

export const metadata = {
  title: 'Términos y Servicios | HALU Plataforma',
  description: 'Condiciones de uso y términos del servicio de HALU Plataforma escolar.',
};

export default function TerminosYServicios() {
  return (
    <div className="bg-[#F8F6F3] min-h-screen">
      <header className="bg-white border-b border-[#E5E3DF] py-4 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/">
            <img src="/halu-logo.png" alt="HALU" className="h-10 rounded-lg" />
          </Link>
          <Link href="/" className="text-sm text-[#1B4B7A] hover:text-[#FF6B7A] transition-colors font-medium">
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-[#1B4B7A] mb-2">Términos y Servicios</h1>
        <p className="text-[#6B6B6B] mb-10">Última actualización: junio de 2026</p>

        <div className="bg-white rounded-2xl p-8 md:p-12 border border-[#E5E3DF] space-y-8 text-[#2C2C2C]">

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">1. Aceptación de los términos</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Al acceder y utilizar HALU Plataforma, la institución educativa y sus usuarios aceptan los presentes términos y condiciones. Si no está de acuerdo con alguna parte de estos términos, por favor no utilice el servicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">2. Descripción del servicio</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              HALU Plataforma es un sistema de gestión escolar todo-en-uno que ofrece módulos académicos, administrativos y de comunicación para instituciones educativas colombianas. El servicio incluye acceso a la plataforma web, actualizaciones, soporte técnico y capacitación inicial según el plan contratado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">3. Responsabilidades del usuario</h2>
            <ul className="list-disc list-inside text-[#6B6B6B] space-y-2 pl-2">
              <li>Mantener la confidencialidad de las credenciales de acceso.</li>
              <li>Usar la plataforma únicamente para fines educativos y administrativos legítimos.</li>
              <li>No compartir accesos con personas no autorizadas.</li>
              <li>Ingresar información veraz y actualizada.</li>
              <li>Notificar de inmediato cualquier uso no autorizado de su cuenta.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">4. Planes y pagos</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Los planes se contratan por institución educativa con precio por estudiante/año. Los pagos pueden ser mensuales o anuales (con descuento del 10%). HALU se reserva el derecho de suspender el acceso ante mora en el pago, previa notificación con 5 días hábiles de anticipación.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">5. Propiedad intelectual</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Todo el software, diseño, código fuente y contenidos de HALU Plataforma son propiedad exclusiva de sus desarrolladores. Queda prohibida la reproducción, distribución o modificación sin autorización expresa y por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">6. Disponibilidad del servicio</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              HALU Plataforma se compromete a mantener una disponibilidad del 99% del tiempo. Las interrupciones programadas para mantenimiento serán notificadas con al menos 24 horas de anticipación. No nos hacemos responsables por interrupciones causadas por fuerza mayor o fallas en servicios de terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">7. Limitación de responsabilidad</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              HALU Plataforma no será responsable por daños indirectos, pérdida de datos por mal uso, o decisiones tomadas con base en la información gestionada en la plataforma. La responsabilidad máxima de HALU no excederá el valor pagado por el servicio en los últimos 3 meses.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">8. Legislación aplicable</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia será resuelta ante los jueces competentes de Barranquilla, Atlántico.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#1B4B7A] mb-3">9. Contacto</h2>
            <p className="text-[#6B6B6B] leading-relaxed">
              Para consultas sobre estos términos:{' '}
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
