import wwiBackground from "../assets/wwi-background.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative py-20 px-4 text-center bg-gradient-to-br from-secondary to-accent overflow-hidden"
      style={{
        backgroundImage: `url(${wwiBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-background/45 backdrop-blur-[1px]"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in-up">
          Linha do Tempo
        </h1>
        <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-8 animate-fade-in-up [animation-delay:200ms]">
          Primeira Guerra Mundial
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Entenda os principais acontecimentos do conflito que mudou o mundo
        </p>
        
        <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 shadow-[--shadow-historical] max-w-2xl mx-auto animate-fade-in-up [animation-delay:600ms]">
          <p className="text-foreground leading-relaxed italic">
            A Primeira Guerra Mundial (1914-1918) foi um conflito global que marcou o início do século XX 
            com consequências políticas, sociais e econômicas profundas. Aqui você encontrará uma linha do 
            tempo interativa com textos e vídeos explicativos para entender cada fase.
          </p>
        </div>
      </div>
    </section>
  );
};