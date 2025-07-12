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
      {/* Timeline line central */}
      {!isLast && (
        <div className="absolute left-1/2 top-20 w-0.5 h-full bg-timeline-line animate-timeline-draw transform -translate-x-0.5" />
      )}
      
      {/* Container do evento com alternância de lados */}
      <div className={`flex items-center w-full ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
        {/* Conteúdo do evento */}
        <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'} animate-fade-in-up`}>
          <Card className="shadow-[--shadow-historical] hover:shadow-[--shadow-timeline] transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <Icon className="w-5 h-5 text-primary" />
                <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                  {year}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
              
              {/* Video preview pequeno */}
              <div className="space-y-2">
                <div 
                  onClick={toggleVideo}
                  className="relative cursor-pointer rounded-lg overflow-hidden bg-muted hover:shadow-md transition-all duration-300"
                >
                  {/* Preview pequeno do vídeo */}
                  <div className={`relative transition-all duration-500 ${isVideoExpanded ? 'aspect-video' : 'aspect-[16/6]'}`}>
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
                        <div className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors">
                          <Play size={20} className="text-primary ml-0.5" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {isVideoExpanded && (
                  <button
                    onClick={toggleVideo}
                    className="flex items-center gap-2 px-3 py-1 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors duration-200 text-sm"
                  >
                    <Minimize2 size={14} />
                    <span>Minimizar</span>
                  </button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline marker central */}
        <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-timeline-marker-bg border-2 border-timeline-marker rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-300">
          <span className="text-sm font-bold text-timeline-marker">{year.slice(-2)}</span>
        </div>
        
        {/* Espaço vazio do outro lado */}
        <div className="w-5/12"></div>
      </div>
    </div>
  );
};