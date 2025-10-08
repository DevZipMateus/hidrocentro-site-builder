import { Card, CardContent } from "@/components/ui/card";
import bombasImg from "@/assets/bombas.jpg";
import mangueirasImg from "@/assets/mangueiras.jpg";
import comandosImg from "@/assets/comandos.jpg";
import setorLeveImg from "@/assets/setor-leve.jpg";
import setorPesadaImg from "@/assets/setor-pesada.jpg";
import cilindrosImg from "@/assets/cilindros.jpg";

const Products = () => {
  const products = [
    {
      image: bombasImg,
      title: "Bombas hidráulicas",
      description: "Bombas de alta performance para diversos tipos de aplicações industriais e agrícolas.",
    },
    {
      image: mangueirasImg,
      title: "Mangueiras hidráulicas",
      description: "Mangueiras de qualidade superior para sistemas hidráulicos de alta pressão.",
    },
    {
      image: comandosImg,
      title: "Comandos hidráulicos",
      description: "Comandos precisos e confiáveis para controle de sistemas hidráulicos.",
    },
    {
      image: setorLeveImg,
      title: "Setores de direção linha leve",
      description: "Setores de direção para veículos leves, garantindo segurança e durabilidade.",
    },
    {
      image: setorPesadaImg,
      title: "Setores de direção linha pesada",
      description: "Setores de direção para veículos pesados, com máxima resistência e confiabilidade.",
    },
    {
      image: cilindrosImg,
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
                className="group border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
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
