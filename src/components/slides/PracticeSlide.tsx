import { Rocket } from "lucide-react";

export const PracticeSlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12 overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl w-full space-y-10 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mx-auto">
          <Rocket className="h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Hora de Praticar</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground leading-tight">
          Vamos para a <span className="text-primary">Prática!</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
          Chega de teoria — agora é com vocês! 🚀
        </p>

      </div>
    </div>
  );
};
