import { Settings, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    "Conserto e reforma de bombas hidráulicas",
    "Conserto e reforma de comandos hidráulicos",
    "Conserto e reforma de válvulas hidráulicas",
    "Conserto e reforma de setor de direção hidráulica",
    "Conserto e reforma de cilindros hidráulicos",
    "Instalação de sistemas hidráulicos",
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossos serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Soluções especializadas em manutenção e instalação de sistemas hidráulicos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-border overflow-hidden">
              <CardContent className="p-8">
                <div className="w-20 h-20 mb-6 rounded-full bg-accent/10 flex items-center justify-center">
                  <Settings className="text-accent" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Manutenção especializada
                </h3>
                <p className="text-muted-foreground mb-6">
                  Nossa equipe técnica altamente qualificada oferece serviços completos de conserto e reforma geral para diversos equipamentos hidráulicos.
                </p>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                      <span className="text-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground">
              <CardContent className="p-8 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  Por que escolher a Hidrocentro?
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block mb-1">Experiência comprovada</strong>
                      <span className="text-primary-foreground/90">Desde 2009 no mercado de soluções hidráulicas</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block mb-1">Atendimento personalizado</strong>
                      <span className="text-primary-foreground/90">Soluções customizadas para cada necessidade</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block mb-1">Qualidade garantida</strong>
                      <span className="text-primary-foreground/90">Peças e serviços de alta performance</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block mb-1">Equipe especializada</strong>
                      <span className="text-primary-foreground/90">Técnicos qualificados e em constante atualização</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
