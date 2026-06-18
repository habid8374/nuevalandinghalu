'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  BookOpen, 
  Brain, 
  QrCode, 
  Target, 
  Users, 
  UserCheck, 
  CreditCard, 
  Bell, 
  CheckCircle2,
  ArrowRight,
  Mail,
  MapPin,
  GraduationCap,
  BarChart3,
  Shield,
  Sparkles
} from 'lucide-react';

export default function Home() {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-[#F8F6F3] text-[#2C2C2C] overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-[#E5E3DF]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/halu-logo.jpg" alt="HALU" className="h-12 rounded-lg" />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#plataforma" className="hover:text-[#FF6B7A] transition-colors">Plataforma</a>
            <a href="#modulos" className="hover:text-[#FF6B7A] transition-colors">Módulos</a>
            <a href="#planes" className="hover:text-[#FF6B7A] transition-colors">Planes</a>
          </nav>
          <Button 
            onClick={scrollToContact}
            className="bg-[#FF6B7A] hover:bg-[#FF5565] text-white font-medium px-6"
          >
            Contáctanos
          </Button>
        </div>
      </header>

      {/* Hero Section - Asimétrico */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/fondo-hero.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#F8F6F3]/85 z-10" />
        <div className="relative z-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <div className="inline-block mb-4 px-4 py-2 bg-white rounded-full text-sm font-medium text-[#1B4B7A] border border-[#1B4B7A]/20">
              Software de gestión escolar colombiano
            </div>
            <h1 className="font-display font-bold text-5xl md:text-7xl leading-[1.1] mb-6 text-[#1B4B7A]">
              Todo el colegio,{' '}
              <span className="relative inline-block">
                ordenado
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 4 150 4 198 10" stroke="#FF6B7A" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
              {' '}y bajo control
            </h1>
            <p className="text-lg md:text-xl text-[#6B6B6B] mb-8 max-w-xl leading-relaxed">
              El sistema operativo escolar todo-en-uno que necesitan los colegios en Colombia. Sin hojas de cálculo, sin diez programas distintos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="bg-[#1B4B7A] hover:bg-[#143A62] text-white font-semibold px-8 py-6 text-lg group"
              >
                Solicita una demostración
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open('https://wa.me/573246868538', '_blank')}
                className="border-2 border-[#1B4B7A] text-[#1B4B7A] hover:bg-[#1B4B7A] hover:text-white font-semibold px-8 py-6 text-lg"
              >
                <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp
              </Button>
            </div>
          </div>
          <div className="md:col-span-5 relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border-4 border-[#1B4B7A]/10">
              <div className="absolute -top-4 -right-4 bg-[#FF6B7A] text-white px-4 py-2 rounded-lg font-bold text-sm rotate-3">
                ✓ 100% colombiano
              </div>
              <div className="space-y-4">
                <div className="bg-[#F8F6F3] p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#1B4B7A] rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold">Académico completo</div>
                  </div>
                  <div className="text-xs text-[#6B6B6B]">Mallas, planes de clase, notas y boletines</div>
                </div>
                <div className="bg-[#F8F6F3] p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#FF6B7A] rounded-lg flex items-center justify-center">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold">Inteligencia artificial</div>
                  </div>
                  <div className="text-xs text-[#6B6B6B]">Planeación automática con Google Gemini</div>
                </div>
                <div className="bg-[#F8F6F3] p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-[#1B4B7A] rounded-lg flex items-center justify-center">
                      <Bell className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold">Comunicación en tiempo real</div>
                  </div>
                  <div className="text-xs text-[#6B6B6B]">Familias conectadas con el colegio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Problema Antes/Después */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1B4B7A] mb-4">
            Del caos al orden
          </h2>
          <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
            Conocemos la realidad de gestionar un colegio en Colombia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Antes */}
          <div className="bg-white p-8 rounded-2xl border-2 border-[#E5E3DF] relative">
            <div className="absolute -top-4 left-8 bg-[#6B6B6B] text-white px-4 py-1 rounded-full text-sm font-bold">
              Antes
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFE5E5] flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-[#FF6B7A] font-bold text-sm">✕</span>
                </div>
                <p className="text-[#6B6B6B]">Hojas de Excel por todos lados, sin sincronizar</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFE5E5] flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-[#FF6B7A] font-bold text-sm">✕</span>
                </div>
                <p className="text-[#6B6B6B]">Docentes pierden horas llenando planillas a mano</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFE5E5] flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-[#FF6B7A] font-bold text-sm">✕</span>
                </div>
                <p className="text-[#6B6B6B]">Padres llamando para saber cómo va su hijo</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFE5E5] flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-[#FF6B7A] font-bold text-sm">✕</span>
                </div>
                <p className="text-[#6B6B6B]">Recaudar pensiones es un dolor de cabeza mensual</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FFE5E5] flex items-center justify-center mt-1 flex-shrink-0">
                  <span className="text-[#FF6B7A] font-bold text-sm">✕</span>
                </div>
                <p className="text-[#6B6B6B]">Sistemas diferentes que no se hablan entre sí</p>
              </div>
            </div>
          </div>

          {/* Después */}
          <div className="bg-[#1B4B7A] p-8 rounded-2xl text-white relative shadow-xl">
            <div className="absolute -top-4 left-8 bg-[#FF6B7A] text-white px-4 py-1 rounded-full text-sm font-bold">
              Con HALU
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF6B7A] mt-1 flex-shrink-0" />
                <p>Todo en un solo lugar: académico, financiero y administrativo</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF6B7A] mt-1 flex-shrink-0" />
                <p>Planes de clase generados con IA en minutos</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF6B7A] mt-1 flex-shrink-0" />
                <p>Acudientes ven notas y pagos desde su celular</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF6B7A] mt-1 flex-shrink-0" />
                <p>Recaudo automático con Mercado Pago y facturación electrónica</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#FF6B7A] mt-1 flex-shrink-0" />
                <p>Pasa lista en 5 minutos escaneando códigos QR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Los 3 Grandes Mundos - Narrativa NO rejilla */}
      <section id="modulos" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1B4B7A] mb-6">
              Tres mundos,{' '}
              <span className="text-[#FF6B7A]">una sola plataforma</span>
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-3xl">
              HALU integra todo lo que necesita un colegio colombiano moderno, desde la planeación curricular hasta el recaudo de pensiones.
            </p>
          </div>

          {/* Mundo 1: ACADÉMICO */}
          <div className="mb-24">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <div className="sticky top-32">
                  <div className="inline-flex items-center gap-2 mb-4 text-[#FF6B7A] font-semibold">
                    <BookOpen className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-wide">Mundo Académico</span>
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-[#1B4B7A] mb-4">
                    Lo pedagógico, completo y a la colombiana
                  </h3>
                  <p className="text-lg text-[#6B6B6B] mb-6">
                    Desde las mallas curriculares alineadas con EBC y DBA hasta los boletines con niveles de desempeño del Decreto 1290.
                  </p>
                  <div className="h-1 w-24 bg-[#FF6B7A] rounded-full"></div>
                </div>
              </div>
              <div className="md:col-span-7 space-y-6">
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#1B4B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1B4B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-[#1B4B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Mallas y planes de clase</h4>
                      <p className="text-[#6B6B6B]">Diseña mallas por período académico, crea planes de clase semanales con flujo de aprobación coordinador-docente.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#1B4B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1B4B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-[#1B4B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Libro de notas digital</h4>
                      <p className="text-[#6B6B6B]">Calificaciones, deberes y boletines con niveles de desempeño (Bajo, Básico, Alto, Superior). Todo sincronizado.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#1B4B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1B4B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-[#1B4B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Simulacros Saber e ICFES</h4>
                      <p className="text-[#6B6B6B]">Banco de preguntas y generación automática de simulacros con IA por grado y área. Prepara a tus estudiantes para las pruebas de Estado.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#1B4B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1B4B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-[#1B4B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Inclusión con PIAR (Decreto 1421)</h4>
                      <p className="text-[#6B6B6G]">Planes Individuales de Ajuste Razonable con seguimiento por materia y período.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Mundo 2: ADMINISTRATIVO */}
          <div className="mb-24">
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7 order-2 md:order-1 space-y-6">
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#FF6B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF6B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <QrCode className="w-6 h-6 text-[#FF6B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Asistencia con código QR</h4>
                      <p className="text-[#6B6B6B]">Cada estudiante y docente tiene su carnet con QR. Pasa lista desde tu celular en segundos y los reportes se generan automáticamente.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#FF6B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF6B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <UserCheck className="w-6 h-6 text-[#FF6B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Admisiones y matrícula</h4>
                      <p className="text-[#6B6B6B]">Portal para aspirantes, importación masiva desde Excel y matrícula que genera las cuentas de pago automáticamente.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#FF6B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF6B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CreditCard className="w-6 h-6 text-[#FF6B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Finanzas y pagos en línea</h4>
                      <p className="text-[#6B6B6B]">Gestión de pensiones, recaudo con Mercado Pago y facturación electrónica. Los padres pagan desde casa.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#FF6B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#FF6B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-[#FF6B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Roles diferenciados</h4>
                      <p className="text-[#6B6B6B]">Coordinador, docente, estudiante y familiar: cada uno con su propio panel y permisos específicos.</p>
                    </div>
                  </div>
                </Card>
              </div>
              <div className="md:col-span-5 order-1 md:order-2">
                <div className="sticky top-32">
                  <div className="inline-flex items-center gap-2 mb-4 text-[#FF6B7A] font-semibold">
                    <Users className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-wide">Mundo Administrativo</span>
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-[#1B4B7A] mb-4">
                    La operación diaria, sin papeleos
                  </h3>
                  <p className="text-lg text-[#6B6B6B] mb-6">
                    Desde que llega un aspirante hasta que se recauda la última pensión: todo fluye, todo queda registrado.
                  </p>
                  <div className="h-1 w-24 bg-[#FF6B7A] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Mundo 3: COMUNICACIÓN */}
          <div>
            <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <div className="sticky top-32">
                  <div className="inline-flex items-center gap-2 mb-4 text-[#FF6B7A] font-semibold">
                    <Bell className="w-5 h-5" />
                    <span className="text-sm uppercase tracking-wide">Mundo Comunicación</span>
                  </div>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-[#1B4B7A] mb-4">
                    Familias conectadas, en tiempo real
                  </h3>
                  <p className="text-lg text-[#6B6B6B] mb-6">
                    Se acabaron las llamadas de "¿cómo va mi hijo?". Los padres tienen toda la información, cuando la necesitan.
                  </p>
                  <div className="h-1 w-24 bg-[#FF6B7A] rounded-full"></div>
                </div>
              </div>
              <div className="md:col-span-7 space-y-6">
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#1B4B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1B4B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Bell className="w-6 h-6 text-[#1B4B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Notificaciones instantáneas</h4>
                      <p className="text-[#6B6B6B]">Avisos automáticos por correo y notificación push cuando se publica una nota, hay una circular o vence un pago.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#1B4B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1B4B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#1B4B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Mensajería integrada</h4>
                      <p className="text-[#6B6B6B]">Comunicación directa entre docentes, coordinadores y familias dentro de la plataforma.</p>
                    </div>
                  </div>
                </Card>
                <Card className="p-6 border-2 border-[#E5E3DF] hover:border-[#1B4B7A] transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#1B4B7A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-[#1B4B7A]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-[#1B4B7A]">Portal para familias</h4>
                      <p className="text-[#6B6B6B]">Los acudientes ven notas, asistencia, pagos pendientes y circulares desde su celular. Transparencia total.</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección IA Destacada */}
      <section className="py-24 px-6 bg-[#1B4B7A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B7A] rounded-full blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 bg-white/10 px-4 py-2 rounded-full">
                <Sparkles className="w-5 h-5 text-[#FF6B7A]" />
                <span className="text-sm font-semibold">Potenciado por Google Gemini</span>
              </div>
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Inteligencia artificial que trabaja por ti
              </h2>
              <p className="text-lg text-white/80 mb-6">
                No es marketing: es IA real integrada en tu día a día docente.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#FF6B7A] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Brain className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Planeación de clases automática</h4>
                    <p className="text-white/70 text-sm">Dile a la IA el tema, el grado y los DBA, y te genera un plan de clase completo en minutos.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#FF6B7A] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Alertas de refuerzo inteligentes</h4>
                    <p className="text-white/70 text-sm">Cuando un estudiante baja en notas, el sistema sugiere actividades de refuerzo personalizadas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#FF6B7A] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Análisis de convivencia</h4>
                    <p className="text-white/70 text-sm">La IA analiza anotaciones de comportamiento y detecta patrones (Ley 1620 de convivencia).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="mb-4">
                <div className="inline-block bg-white/10 px-3 py-1 rounded text-xs font-mono mb-3">
                  Ejemplo real
                </div>
                <div className="text-sm text-white/60 mb-2">Solicitud del docente:</div>
                <div className="bg-[#0F2A42] p-4 rounded-lg mb-4 text-sm">
                  "Genera un plan de clase de Ciencias Naturales para grado 5º sobre el sistema digestivo, alineado con los DBA del segundo período"
                </div>
                <div className="text-sm text-white/60 mb-2">Respuesta de HALU IA:</div>
                <div className="bg-white/10 p-4 rounded-lg text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B7A]" />
                    <span>Objetivo de aprendizaje claro</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B7A]" />
                    <span>3 actividades secuenciadas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B7A]" />
                    <span>Evaluación formativa incluida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B7A]" />
                    <span>Recursos sugeridos</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/50 italic mt-4">
                Tiempo de generación: 45 segundos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1B4B7A] mb-4">
            Lo que dicen los colegios
          </h2>
          <p className="text-lg text-[#6B6B6B]">Historias reales de transformación</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 border-2 border-[#E5E3DF] hover:border-[#1B4B7A] transition-all">
            <div className="mb-4">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FF6B7A] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#6B6B6B] mb-6 italic">
                "Antes perdíamos horas consolidando notas de diferentes profesores. Con HALU, los boletines se generan solos. Nos ahorra mínimo 20 horas al mes."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#1B4B7A] rounded-full flex items-center justify-center text-white font-bold">
                MC
              </div>
              <div>
                <div className="font-bold text-sm">[Testimonio aquí]</div>
                <div className="text-xs text-[#6B6B6B]">Coordinadora Académica</div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-[#E5E3DF] hover:border-[#1B4B7A] transition-all">
            <div className="mb-4">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FF6B7A] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#6B6B6B] mb-6 italic">
                "El módulo de pagos cambió nuestra vida. Antes teníamos que perseguir a los padres; ahora pagan en línea y todo se registra automático. Recaudamos un 35% más rápido."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#1B4B7A] rounded-full flex items-center justify-center text-white font-bold">
                LG
              </div>
              <div>
                <div className="font-bold text-sm">[Testimonio aquí]</div>
                <div className="text-xs text-[#6B6B6B]">Rectora</div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-2 border-[#E5E3DF] hover:border-[#1B4B7A] transition-all">
            <div className="mb-4">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FF6B7A] text-xl">★</span>
                ))}
              </div>
              <p className="text-[#6B6B6B] mb-6 italic">
                "Como padre, me encanta poder ver en tiempo real cómo va mi hija. Las notas, la asistencia, todo está ahí. Ya no tengo que estar llamando al colegio."
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#1B4B7A] rounded-full flex items-center justify-center text-white font-bold">
                JP
              </div>
              <div>
                <div className="font-bold text-sm">[Testimonio aquí]</div>
                <div className="text-xs text-[#6B6B6B]">Padre de familia</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-[#1B4B7A] mb-4">
              Planes a la medida de tu colegio
            </h2>
            <p className="text-lg text-[#6B6B6B] max-w-2xl mx-auto">
              No cobramos por usuario: cobramos por institución. Así de simple.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 border-2 border-[#E5E3DF] hover:shadow-xl transition-all">
              <div className="text-sm font-semibold text-[#6B6B6B] mb-2 uppercase tracking-wide">Básico</div>
              <div className="mb-6">
                <div className="text-4xl font-display font-bold text-[#1B4B7A] mb-2">$5,000</div>
                <div className="text-sm text-[#6B6B6B]">por estudiante/año</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Hasta 200 estudiantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Módulo académico completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Asistencia con QR</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Portal para familias</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Soporte por correo</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-white border-2 border-[#1B4B7A] text-[#1B4B7A] hover:bg-[#1B4B7A] hover:text-white font-semibold"
                onClick={scrollToContact}
              >
                Solicitar información
              </Button>
            </Card>

            <Card className="p-8 border-4 border-[#FF6B7A] shadow-2xl relative transform md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B7A] text-white px-4 py-1 rounded-full text-sm font-bold">
                Más popular
              </div>
              <div className="text-sm font-semibold text-[#FF6B7A] mb-2 uppercase tracking-wide">Profesional</div>
              <div className="mb-6">
                <div className="text-4xl font-display font-bold text-[#1B4B7A] mb-2">$4,500</div>
                <div className="text-sm text-[#6B6B6B]">por estudiante/año</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Hasta 500 estudiantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Todo lo del plan Básico +</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Planeación con IA (Gemini)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Simulacros Saber/ICFES</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Pagos en línea (Mercado Pago)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">PIAR (inclusión)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Soporte prioritario WhatsApp</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-[#FF6B7A] hover:bg-[#FF5565] text-white font-semibold"
                onClick={scrollToContact}
              >
                Solicitar demostración
              </Button>
            </Card>

            <Card className="p-8 border-2 border-[#E5E3DF] hover:shadow-xl transition-all">
              <div className="text-sm font-semibold text-[#6B6B6B] mb-2 uppercase tracking-wide">Enterprise</div>
              <div className="mb-6">
                <div className="text-3xl font-display font-bold text-[#1B4B7A] mb-2">Precio personalizado</div>
                <div className="text-sm text-[#6B6B6B]">Solicita reunión para acordar precio según tus necesidades</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+500 estudiantes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm"><strong>Todo lo del plan Profesional +</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Multi-sede</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Integraciones personalizadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Capacitación presencial</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#1B4B7A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Gerente de cuenta dedicado</span>
                </li>
              </ul>
              <Button 
                className="w-full bg-white border-2 border-[#1B4B7A] text-[#1B4B7A] hover:bg-[#1B4B7A] hover:text-white font-semibold"
                onClick={scrollToContact}
              >
                Solicitar reunión
              </Button>
            </Card>
          </div>

          <div className="text-center bg-[#F8F6F3] p-8 rounded-2xl">
            <p className="text-[#6B6B6B] mb-2">
              <strong className="text-[#1B4B7A]">Sin letra pequeña:</strong> incluimos hosting, actualizaciones, soporte técnico y capacitación inicial.
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Pagos mensuales o anuales (10% de descuento en plan anual)
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 px-6 bg-[#1B4B7A] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">
            ¿Listo para ordenar tu colegio?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Agenda una demostración en vivo y te mostramos cómo HALU puede transformar la gestión de tu institución.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-[#FF6B7A] hover:bg-[#FF5565] text-white font-semibold px-8 py-6 text-lg"
            >
              Solicitar demostración gratuita
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://wa.me/573246868538', '_blank')}
              className="border-2 border-white text-white hover:bg-white hover:text-[#1B4B7A] font-semibold px-8 py-6 text-lg"
            >
              <svg className="mr-2 w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Escríbenos por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contacto" className="bg-[#0F2A42] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img src="/halu-logo.jpg" alt="HALU" className="h-12 rounded-lg" />
              </div>
              <p className="text-white/70 mb-6">
                Conectando mentes, creando futuros. El sistema operativo escolar que los colegios colombianos necesitan.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-[#FF6B7A]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <a href="https://wa.me/573246868538" className="hover:text-[#FF6B7A] transition-colors">
                    +57 324 686 8538
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#FF6B7A]" />
                  <a href="mailto:haluplataformaescolar@gmail.com" className="hover:text-[#FF6B7A] transition-colors">
                    haluplataformaescolar@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#FF6B7A]" />
                  <span className="text-white/70">Sabanalarga - Atlántico, Colombia</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#modulos" className="hover:text-[#FF6B7A] transition-colors">Módulos</a></li>
                <li><a href="#planes" className="hover:text-[#FF6B7A] transition-colors">Planes y precios</a></li>
                <li><a href="#" className="hover:text-[#FF6B7A] transition-colors">Recursos</a></li>
                <li><a href="#" className="hover:text-[#FF6B7A] transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-[#FF6B7A] transition-colors">Sobre nosotros</a></li>
                <li><a href="#" className="hover:text-[#FF6B7A] transition-colors">Casos de éxito</a></li>
                <li><a href="#contacto" className="hover:text-[#FF6B7A] transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-[#FF6B7A] transition-colors">Soporte</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
            <p>© 2025 HALU Plataforma. Todos los derechos reservados.</p>
            <p className="mt-2">Hecho con ❤️ en Colombia para la educación colombiana</p>
          </div>
        </div>
      </footer>
    </div>
  );
}