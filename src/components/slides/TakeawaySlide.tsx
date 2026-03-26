import { Rocket, Brain, Zap, Target } from "lucide-react";

export const TakeawaySlide = () => {
  const takeaways = [
    {
      icon: Brain,
      title: "Entenda a IA",
      description: "Ela não substitui você — ela amplifica o que você já faz de melhor.",
    },
    {
      icon: Zap,
      title: "Comece Pequeno",
      description: "Escolha UMA ferramenta hoje e aplique no seu trabalho esta semana.",
    },
    {
      icon: Target,
      title: "Seja Intencional",
      description: "Use prompts claros, dê contexto, e refine os resultados.",
    },
    {
      icon: Rocket,
      title: "Escale Rápido",
      description: "Quem dominar a IA agora terá uma vantagem competitiva enorme.",
    },
  ];

  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-8">
      <div className="max-w-5xl w-full space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Resumo Final
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground">
            O que levar daqui?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            4 ideias para transformar sua relação com a tecnologia — a partir de hoje.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {takeaways.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-6 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-2xl font-serif font-bold text-primary">
          O futuro pertence a quem começa agora. 🚀
        </p>
      </div>
    </div>
  );
};
