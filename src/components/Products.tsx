import { Wrench, Cable, Cog, CircleDot, Cylinder } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Products = () => {
  const products = [
    {
      icon: Wrench,
      title: "Bombas hidráulicas",
      description: "Bombas de alta performance para diversos tipos de aplicações industriais e agrícolas.",
    },
    {
      icon: Cable,
      title: "Mangueiras hidráulicas",
      description: "Mangueiras de qualidade superior para sistemas hidráulicos de alta pressão.",
    },
    {
      icon: Cog,
      title: "Comandos hidráulicos",
      description: "Comandos precisos e confiáveis para controle de sistemas hidráulicos.",
    },
    {
      icon: CircleDot,
      title: "Setores de direção",
      description: "Setores de direção para linha leve e pesada, garantindo segurança e durabilidade.",
    },
    {
      icon: Cylinder,
      title: "Cilindros hidráulicos",
      description: "Cilindros hidráulicos robustos para as mais diversas aplicações industriais.",
    },
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Nossos produtos
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Equipamentos e peças hidráulicas de alta qualidade para o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mb-4 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <product.icon className="text-accent" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{product.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
