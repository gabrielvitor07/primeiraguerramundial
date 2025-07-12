import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Conclusion } from "@/components/Conclusion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <Timeline />
      <Conclusion />
    </div>
  );
};

export default Index;
