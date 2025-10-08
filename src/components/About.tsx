import { Target, Eye, Heart, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Oferecer soluções hidráulicas de alta qualidade, garantindo eficiência e segurança aos nossos clientes, através de serviços especializados, peças e atendimento personalizado.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser reconhecida como a referência em serviços e produtos hidráulicos na região, promovendo inovação e sustentabilidade, e contribuindo para o crescimento do setor.",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Qualidade, Integridade, Inovação e Trabalho em equipe. Compromisso com a excelência e transparência em todas as relações.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Sobre nós
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Referência em soluções hidráulicas desde 2009
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <value.icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
                    <Building2 className="text-accent" size={48} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Nossa história</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      A Hidrocentro Equipamentos Hidráulicos foi fundada em 3 de fevereiro de 2009, em Santa Maria, RS, com o objetivo de se tornar uma referência no mercado de serviços hidráulicos.
                    </p>
                    <p>
                      Após anos de crescimento, em 2019, a empresa passou por uma reestruturação com a entrada de novos proprietários, que revitalizaram a operação e expandiram a oferta de serviços.
                    </p>
                    <p>
                      Hoje, a Hidrocentro não apenas fornece serviços especializados em sistemas hidráulicos, mas também peças específicas e confecção de mangueiras hidráulicas, consolidando-se como uma força em ascensão no setor.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
