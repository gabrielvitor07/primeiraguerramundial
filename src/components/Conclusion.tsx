import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import wwiConclusionBackground from "../assets/wwi-conclusion-background.jpg";

export const Conclusion = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="relative py-20 px-4 bg-gradient-to-br from-accent to-secondary overflow-hidden"
      style={{
        backgroundImage: `url(${wwiConclusionBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-background/45 backdrop-blur-[1px]"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in-up">
          Conclusão
        </h2>
        
        <Card className="shadow-[--shadow-historical] animate-fade-in-up [animation-delay:200ms]">
          <CardContent className="p-8">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              A Primeira Guerra Mundial redesenhou fronteiras, derrubou impérios e criou as bases 
              para a Segunda Guerra Mundial. Entender seus marcos principais nos ajuda a compreender 
              o mundo atual.
            </p>
            
            <Button 
              onClick={scrollToTop}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Voltar ao início
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};