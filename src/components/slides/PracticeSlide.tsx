import { Rocket, MessageSquare, Bot } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-card border border-border rounded-xl space-y-3 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <MessageSquare className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">ChatGPT ao Vivo</h3>
            <p className="text-sm text-muted-foreground">
              Vamos explorar a ferramenta juntos na tela
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl space-y-3 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Agente IA</h3>
            <p className="text-sm text-muted-foreground">
              Conheçam um Agente IA em ação — automação inteligente na prática
            </p>
          </div>

          <div className="p-6 bg-card border border-border rounded-xl space-y-3 hover:border-primary/40 transition-colors">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground">Sua Vez!</h3>
            <p className="text-sm text-muted-foreground">
              Usem o <strong>Prompt Inteligente</strong> no Agente e vejam o resultado
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
