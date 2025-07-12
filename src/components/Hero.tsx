import wwiBackground from "../assets/wwi-background.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative py-[3rem] px-[1rem] sm:py-[4rem] sm:px-[1.5rem] md:py-[5rem] md:px-[2rem] text-center bg-gradient-to-br from-secondary to-accent overflow-hidden"
      style={{
        backgroundImage: `url(${wwiBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        /* Safe area considerations */
        paddingTop: `calc(3rem + env(safe-area-inset-top))`,
        paddingLeft: `calc(1rem + env(safe-area-inset-left))`,
        paddingRight: `calc(1rem + env(safe-area-inset-right))`
      }}
    >
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-background/45 backdrop-blur-[1px]"></div>
      <div className="relative z-10 max-w-[72rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[2rem]">
        <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-foreground mb-[1.5rem] sm:mb-[2rem] animate-fade-in-up leading-tight">
          Linha do Tempo
        </h1>
        <h2 className="text-[1.25rem] sm:text-[1.5rem] md:text-[1.75rem] lg:text-[2rem] text-primary font-semibold mb-[2rem] sm:mb-[2.5rem] animate-fade-in-up [animation-delay:200ms] leading-tight">
          Primeira Guerra Mundial
        </h2>
        <p className="text-[1rem] sm:text-[1.125rem] md:text-[1.25rem] text-muted-foreground mb-[2rem] sm:mb-[2.5rem] max-w-[48rem] mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Entenda os principais acontecimentos do conflito que mudou o mundo
        </p>
        
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-[1.5rem] sm:p-[2rem] shadow-[--shadow-historical] max-w-[32rem] sm:max-w-[40rem] mx-auto animate-fade-in-up [animation-delay:600ms]">
          <p className="text-foreground leading-relaxed italic text-[0.875rem] sm:text-[1rem]">
            A Primeira Guerra Mundial (1914-1918) foi um conflito global que marcou o início do século XX 
            com consequências políticas, sociais e econômicas profundas. Aqui você encontrará uma linha do 
            tempo interativa com textos e vídeos explicativos para entender cada fase.
          </p>
        </div>
      </div>
    </section>
  );
};