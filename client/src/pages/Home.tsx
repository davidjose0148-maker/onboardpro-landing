import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Clock, Shield, Users, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    setIsSubmitting(true);
    // Simular envío de datos
    setTimeout(() => {
      toast.success(`¡Gracias ${name}! Te hemos añadido a la lista de espera.`);
      setEmail("");
      setName("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OP</span>
            </div>
            <span className="font-bold text-lg text-slate-900">OnboardPro</span>
          </div>
          <div className="text-sm text-slate-600">Beta Exclusiva</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Tu onboarding de clientes,
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">simplificado</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Menos papeleo, más trabajo real. Automatiza la recopilación de documentos y deja que tus clientes se registren en segundos.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Ahorra horas cada semana en papeleo administrativo</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Impresiona a tus clientes desde el primer día</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700">Centraliza toda la información en un solo lugar</span>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg h-12 px-8 font-semibold text-base"
                onClick={() => document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" })}
              >
                Quiero mi beta gratuita
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl border border-blue-200 shadow-xl flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">📋</div>
                <p className="text-slate-600 font-medium">Gestión simplificada</p>
                <p className="text-sm text-slate-500">Documentos, formularios y firmas en un portal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12 text-center">¿Cansado de perseguir documentos y contratos?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800 border-slate-700 p-6 space-y-4">
              <Clock className="w-10 h-10 text-orange-400" />
              <h3 className="text-xl font-semibold">Pierdes tiempo valioso</h3>
              <p className="text-slate-300">Cada proyecto comienza con un caos de correos y mensajes buscando documentos.</p>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-6 space-y-4">
              <Users className="w-10 h-10 text-red-400" />
              <h3 className="text-xl font-semibold">Tus clientes se frustran</h3>
              <p className="text-slate-300">Procesos manuales y repetitivos que los ahuyentan antes de empezar.</p>
            </Card>
            <Card className="bg-slate-800 border-slate-700 p-6 space-y-4">
              <Shield className="w-10 h-10 text-yellow-400" />
              <h3 className="text-xl font-semibold">Tu imagen se ve afectada</h3>
              <p className="text-slate-300">Un onboarding desorganizado proyecta falta de profesionalismo.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container py-20">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-slate-900">OnboardPro: Tu asistente personal</h2>
            <p className="text-xl text-slate-600">Una plataforma intuitiva donde tus clientes pueden subir archivos, rellenar formularios y firmar contratos de forma segura.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-slate-200 space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📁</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Portales Personalizados</h3>
              <p className="text-slate-600">Cada cliente tiene su espacio seguro con tu logo y marca.</p>
            </Card>
            <Card className="p-8 border-slate-200 space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✍️</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Formularios Inteligentes</h3>
              <p className="text-slate-600">Recopila toda la información que necesitas sin errores.</p>
            </Card>
            <Card className="p-8 border-slate-200 space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Firmas Electrónicas</h3>
              <p className="text-slate-600">Agiliza la aprobación de contratos con validez legal.</p>
            </Card>
            <Card className="p-8 border-slate-200 space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔔</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Recordatorios Automáticos</h3>
              <p className="text-slate-600">Olvídate de perseguir; OnboardPro lo hace por ti.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Más tiempo para crear, menos para gestionar</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Aumenta tu Productividad</h3>
                  <p className="text-slate-600">Empieza los proyectos más rápido y sin demoras.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Mejora la Experiencia del Cliente</h3>
                  <p className="text-slate-600">Ofrece un proceso profesional y sin fricciones.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Reduce Errores</h3>
                  <p className="text-slate-600">Centraliza la información y evita malentendidos.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Escala tu Negocio</h3>
                  <p className="text-slate-600">Gestiona más clientes con el mismo esfuerzo.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Imagen Profesional</h3>
                  <p className="text-slate-600">Proyecta confianza y organización desde el primer contacto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signup Section */}
      <section id="signup" className="container py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-12 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">¿Listo para transformar tu onboarding?</h2>
              <p className="text-lg text-slate-600">Únete a nuestra beta exclusiva y sé de los primeros en experimentar la eficiencia de OnboardPro.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="h-12 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-lg"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white h-12 font-semibold rounded-lg"
              >
                {isSubmitting ? "Registrando..." : "¡Quiero mi beta gratuita!"}
              </Button>
              <p className="text-xs text-slate-500 text-center">Te enviaremos un email cuando esté lista tu beta.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">OP</span>
              </div>
              <span className="font-bold text-white">OnboardPro</span>
            </div>
            <p className="text-sm">© 2026 OnboardPro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
