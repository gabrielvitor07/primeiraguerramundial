import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Minimize2, LucideIcon } from "lucide-react";

interface TimelineEventProps {
  year: string;
  title: string;
  description: string;
  videoId: string;
  icon: LucideIcon;
  isLast?: boolean;
  isLeft?: boolean; // Para alternar os lados
}

export const TimelineEvent = ({ year, title, description, videoId, icon: Icon, isLast, isLeft }: TimelineEventProps) => {
  const [isVideoExpanded, setIsVideoExpanded] = useState(false);
  
  const toggleVideo = () => {
    setIsVideoExpanded(!isVideoExpanded);
  };

  return (
    <div className="relative w-full">
      {/* Timeline line central - adaptativo */}
      {!isLast && (
        <div className="absolute left-1/2 top-[5rem] w-[0.125rem] h-full bg-timeline-line animate-timeline-draw transform -translate-x-0.5 hidden md:block" />
      )}
      
      {/* Container do evento - mobile first com alternância apenas em desktop */}
      <div className={`flex flex-col md:flex-row items-center w-full ${!isLeft ? 'md:flex-row-reverse' : ''}`}>
        {/* Conteúdo do evento */}
        <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-[2rem]' : 'md:pl-[2rem]'} animate-fade-in-up px-[1rem] sm:px-[1.5rem] md:px-0`}>
          <Card className="shadow-[--shadow-historical] hover:shadow-[--shadow-timeline] transition-shadow duration-300">
            <CardContent className="p-[1.5rem] sm:p-[2rem]">
              <div className="mb-[1rem] flex items-center gap-[0.75rem] flex-wrap">
                <Icon className="w-[1.25rem] h-[1.25rem] sm:w-[1.5rem] sm:h-[1.5rem] text-primary flex-shrink-0" />
                <span className="inline-block px-[0.75rem] py-[0.5rem] bg-primary text-primary-foreground text-[0.875rem] font-medium rounded-full">
                  {year}
                </span>
              </div>
              
              <h3 className="text-[1.125rem] sm:text-[1.25rem] md:text-[1.375rem] font-bold text-foreground mb-[1rem] sm:mb-[1.25rem] leading-tight">{title}</h3>
              <p className="text-[0.875rem] sm:text-[1rem] text-muted-foreground leading-relaxed mb-[1rem] sm:mb-[1.25rem]">{description}</p>
              
              {/* Video preview adaptativo */}
              <div className="space-y-[0.5rem]">
                <div 
                  onClick={toggleVideo}
                  className="relative cursor-pointer rounded-lg overflow-hidden bg-muted hover:shadow-md transition-all duration-300"
                >
                  {/* Preview adaptativo do vídeo */}
                  <div className={`relative transition-all duration-500 ${isVideoExpanded ? 'aspect-video' : 'aspect-[16/8] sm:aspect-[16/6]'}`}>
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={title}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                      loading="lazy"
                    />
                    
                    {/* Overlay com ícone de play quando pequeno */}
                    {!isVideoExpanded && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-[0.5rem] sm:p-[0.75rem] hover:bg-white transition-colors">
                          <Play size={16} className="sm:w-[1.25rem] sm:h-[1.25rem] text-primary ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {isVideoExpanded && (
                  <button
                    onClick={toggleVideo}
                    className="flex items-center gap-[0.5rem] px-[0.75rem] py-[0.5rem] bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors duration-200 text-[0.875rem]"
                  >
                    <Minimize2 size={14} />
                    <span>Minimizar</span>
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline marker central - apenas em desktop */}
        <div className="relative z-10 flex-shrink-0 w-[3rem] h-[3rem] sm:w-[3.5rem] sm:h-[3.5rem] bg-timeline-marker-bg border-2 border-timeline-marker rounded-full items-center justify-center shadow-md hover:scale-110 transition-transform duration-300 mt-[1rem] mb-[1rem] md:mt-0 md:mb-0 hidden md:flex">
          <span className="text-[0.875rem] font-bold text-timeline-marker">{year.slice(-2)}</span>
        </div>
        
        {/* Espaço vazio do outro lado - apenas em desktop */}
        <div className="hidden md:block md:w-5/12"></div>
      </div>
    </div>
  );
};