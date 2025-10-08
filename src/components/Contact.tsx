import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "RST 509, Nº 3253",
      subContent: "Santa Maria, RS",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(55) 3286-1274",
      link: "tel:+555532861274",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@hehidraulico.com",
      link: "mailto:contato@hehidraulico.com",
    },
    {
      icon: Clock,
      title: "Horário de funcionamento",
      content: "Segunda a sexta",
      subContent: "08:00 às 12:00 e 13:30 às 18:00",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Entre em contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Estamos prontos para atender você e oferecer as melhores soluções hidráulicas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <info.icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-muted-foreground hover:text-accent transition-colors block"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <>
                      <p className="text-muted-foreground">{info.content}</p>
                      {info.subContent && (
                        <p className="text-muted-foreground text-sm mt-1">{info.subContent}</p>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-border overflow-hidden bg-gradient-to-br from-accent via-accent to-accent/90">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-4">
                Precisa de uma solução hidráulica?
              </h3>
              <p className="text-accent-foreground/90 mb-6 max-w-2xl mx-auto">
                Nossa equipe está pronta para atender sua necessidade com agilidade e qualidade. Entre em contato agora mesmo!
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
              >
                <a href="https://wa.me/555532861274" target="_blank" rel="noopener noreferrer">
                  Falar no WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
