import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import wwiConclusionBackground from "../assets/wwi-conclusion-background.jpg";

export const Conclusion = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="relative py-[3rem] px-[1rem] sm:py-[4rem] sm:px-[1.5rem] md:py-[5rem] md:px-[2rem] bg-gradient-to-br from-accent to-secondary overflow-hidden"
      style={{
        backgroundImage: `url(${wwiConclusionBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        /* Safe area considerations */
        paddingBottom: `calc(3rem + env(safe-area-inset-bottom))`,
        paddingLeft: `calc(1rem + env(safe-area-inset-left))`,
        paddingRight: `calc(1rem + env(safe-area-inset-right))`
      }}
    >
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-background/45 backdrop-blur-[1px]"></div>
      <div className="relative z-10 max-w-[48rem] mx-auto text-center px-[1rem] sm:px-[1.5rem] md:px-[2rem]">
        <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-foreground mb-[2rem] sm:mb-[2.5rem] animate-fade-in-up">
          Conclusão
        </h2>
        
        <Card className="shadow-[--shadow-historical] animate-fade-in-up [animation-delay:200ms]">
          <CardContent className="p-[1.5rem] sm:p-[2rem] md:p-[2.5rem]">
            <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] text-foreground leading-relaxed mb-[2rem] sm:mb-[2.5rem]">
              A Primeira Guerra Mundial redesenhou fronteiras, derrubou impérios e criou as bases 
              para a Segunda Guerra Mundial. Entender seus marcos principais nos ajuda a compreender 
              o mundo atual.
            </p>
            
            <Button 
              onClick={scrollToTop}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-[2rem] py-[0.75rem] text-[1rem] sm:text-[1.125rem] font-semibold transition-all duration-300 hover:scale-105"
            >
              Voltar ao início
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};