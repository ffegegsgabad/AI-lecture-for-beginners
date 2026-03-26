export const WhatIsAISlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12">
      <div className="max-w-6xl w-full space-y-12">
        <h2 className="text-5xl lg:text-6xl font-serif font-bold text-foreground">
          Por que a IA Nasceu?
        </h2>
        
        <div className="space-y-8">
          <div className="bg-card border border-border p-8 rounded-lg">
            <p className="text-2xl text-foreground leading-relaxed">
              O volume de dados e informações no mundo <span className="font-bold text-primary">ultrapassou nossa capacidade humana</span> de processar
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="text-center space-y-3 p-6 bg-muted/50 rounded-lg">
              <div className="text-4xl font-serif font-bold text-primary">∞</div>
              <p className="text-sm text-muted-foreground">
                Vídeos, artigos, fotos<br />por minuto
              </p>
            </div>

            <div className="text-center space-y-3 p-6 bg-muted/50 rounded-lg">
              <div className="text-4xl font-serif font-bold text-primary">🧠</div>
              <p className="text-sm text-muted-foreground">
                Capacidade humana<br />limitada
              </p>
            </div>

            <div className="text-center space-y-3 p-6 bg-muted/50 rounded-lg">
              <div className="text-4xl font-serif font-bold text-primary">⚡</div>
              <p className="text-sm text-muted-foreground">
                IA como cérebro digital<br />para processar
              </p>
            </div>
          </div>

          <p className="text-xl text-muted-foreground leading-relaxed text-center pt-4">
            A IA é um <span className="font-semibold text-foreground">novo paradigma de eficiência</span>,<br />
            uma ferramenta para aumentar nossa inteligência coletiva
          </p>
        </div>
      </div>
    </div>
  );
};
