import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Sobre", id: "sobre" },
    { label: "Produtos", id: "produtos" },
    { label: "Serviços", id: "servicos" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-background"
      }`}
    >
      <nav className="container mx-auto px-4 py-0.5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <img src={logo} alt="Hidrocentro Equipamentos Hidráulicos" className="h-28 md:h-36" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-accent font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Fale conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-foreground/80 hover:text-accent font-medium transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contato")}
              className="w-full mt-4 bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Fale conosco
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
