import { Rocket } from "lucide-react";
import fredericoImg from "@/assets/frederico-agent.png";

export const PracticeSlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12 overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Rocket className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Hora de Praticar</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
            Vamos para a <span className="text-primary">Prática!</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
            Chega de teoria — agora é com vocês! 🚀
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center">
          <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
            <img
              src={fredericoImg}
              alt="Agente IA - Frederico Vendedor"
              className="max-h-[500px] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
