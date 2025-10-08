import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hidrocentro Equipamentos Hidráulicos
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 font-light max-w-3xl mx-auto">
            Soluções hidráulicas de alta qualidade com eficiência, segurança e atendimento personalizado para o seu negócio
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Expertise hidráulica ao seu alcance
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              onClick={() => scrollToSection("servicos")}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-glow transition-all group"
            >
              Nossos serviços
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              onClick={() => scrollToSection("contato")}
              size="lg"
              variant="outline"
              className="bg-white/10 text-primary-foreground border-white/30 hover:bg-white/20 hover:border-white/50 transition-all"
            >
              Entre em contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
