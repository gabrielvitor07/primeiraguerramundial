import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Conclusion } from "@/components/Conclusion";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background"
      style={{
        /* Ensure safe area handling on viewport level */
        minHeight: '100dvh' /* Dynamic viewport height for mobile - fallback to 100vh in older browsers */
      }}
    >
      <Hero />
      <Timeline />
      <Conclusion />
    </div>
  );
};

export default Index;
