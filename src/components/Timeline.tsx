import { TimelineEvent } from "./TimelineEvent";
import { Shield, Swords, Users, Flag, Crown, Plane, Zap, Target } from "lucide-react";

const timelineEvents = [
  {
    year: "1914",
    title: "O início da guerra",
    description: "Em 28 de junho de 1914, o assassinato do arquiduque Francisco Ferdinando da Áustria desencadeou tensões já existentes entre as potências europeias. A Áustria-Hungria declarou guerra à Sérvia, iniciando o efeito dominó de alianças militares.",
    videoId: "zfZ02UzGxH8", // Primeira Guerra Mundial - O Início
    icon: Crown
  },
  {
    year: "1915",
    title: "Guerra de trincheiras",
    description: "O ano de 1915 consolidou a guerra de trincheiras na Frente Ocidental, principalmente em locais como Verdun e Somme. Milhares de soldados morreram sem grandes avanços territoriais.",
    videoId: "iLsTzrGv9b4", // Primeira Guerra Mundial - Trincheiras
    icon: Shield
  },
  {
    year: "1916",
    title: "Batalha de Verdun",
    description: "A Batalha de Verdun, entre fevereiro e dezembro de 1916, foi uma das mais longas e sangrentas da guerra, envolvendo França e Alemanha.",
    videoId: "QLQI7kuVdzc", // Batalha de Verdun
    icon: Swords
  },
  {
    year: "1917",
    title: "Entrada dos EUA",
    description: "Em abril de 1917, os Estados Unidos declararam guerra à Alemanha, mudando o equilíbrio do conflito. Internamente, a Rússia enfrentava a Revolução que a tiraria do cenário militar.",
    videoId: "UmDLRva-tsc", // EUA na Primeira Guerra
    icon: Users
  },
  {
    year: "1918",
    title: "Fim da guerra",
    description: "Em novembro de 1918, após derrotas militares e crise interna, a Alemanha pediu armistício, encerrando oficialmente a guerra no dia 11 de novembro.",
    videoId: "GcJNjllFWjQ", // Fim da Primeira Guerra Mundial
    icon: Flag
  }
];

export const Timeline = () => {
  return (
    <section 
      className="relative py-[2rem] px-[1rem] sm:py-[3rem] sm:px-[1.5rem] md:py-[4rem] md:px-[2rem] overflow-hidden"
      style={{
        paddingLeft: `calc(1rem + env(safe-area-inset-left))`,
        paddingRight: `calc(1rem + env(safe-area-inset-right))`
      }}
    >
      {/* Elementos decorativos militares no fundo - adaptativos */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <Shield className="absolute top-[5rem] left-[2.5rem] w-[4rem] h-[4rem] text-muted-foreground/20 rotate-12" />
        <Swords className="absolute top-[10rem] right-[5rem] w-[3rem] h-[3rem] text-muted-foreground/15 -rotate-45" />
        <Plane className="absolute top-[15rem] left-1/4 w-[3.5rem] h-[3.5rem] text-muted-foreground/20 rotate-45" />
        <Target className="absolute top-[20rem] right-1/3 w-[2.5rem] h-[2.5rem] text-muted-foreground/25" />
        <Crown className="absolute top-[24rem] left-[5rem] w-[3rem] h-[3rem] text-muted-foreground/20 rotate-12" />
        <Flag className="absolute bottom-[10rem] right-[4rem] w-[3.5rem] h-[3.5rem] text-muted-foreground/15 -rotate-12" />
        <Zap className="absolute bottom-[15rem] left-1/3 w-[2.5rem] h-[2.5rem] text-muted-foreground/20 rotate-45" />
        <Users className="absolute bottom-[20rem] right-1/4 w-[4rem] h-[4rem] text-muted-foreground/15" />
        <Shield className="absolute bottom-[5rem] left-1/2 w-[3rem] h-[3rem] text-muted-foreground/20 -rotate-12" />
      </div>
      
      <div className="relative z-10 max-w-[72rem] mx-auto px-[1rem] sm:px-[1.5rem] md:px-[2rem]">
        <h2 className="text-[1.5rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.25rem] font-bold text-center text-foreground mb-[3rem] sm:mb-[4rem] md:mb-[5rem]">
          Cronologia dos Eventos
        </h2>
        
        <div className="space-y-[2rem] sm:space-y-[3rem] md:space-y-[4rem]">
          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              year={event.year}
              title={event.title}
              description={event.description}
              videoId={event.videoId}
              icon={event.icon}
              isLast={index === timelineEvents.length - 1}
              isLeft={index % 2 === 0} // Alterna entre esquerda (pares) e direita (ímpares)
            />
          ))}
        </div>
      </div>
    </section>
  );
};