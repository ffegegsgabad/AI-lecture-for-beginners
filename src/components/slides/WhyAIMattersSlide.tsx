export const WhyAIMattersSlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12 pb-32">
      <div className="max-w-5xl space-y-8">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">
          Por que a IA é Importante
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 bg-card border-l-4 border-primary rounded-lg">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Segundo a McKinsey, a IA generativa pode adicionar <span className="font-bold text-foreground">$2.6 a $4.4 trilhões</span> em valor anual à economia global
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="p-6 bg-primary/10 rounded-lg text-center space-y-2">
              <p className="text-4xl font-bold text-primary">75%</p>
              <p className="text-sm text-foreground">das empresas adotarão IA até 2025</p>
            </div>
            <div className="p-6 bg-primary/10 rounded-lg text-center space-y-2">
              <p className="text-4xl font-bold text-primary">40%</p>
              <p className="text-sm text-foreground">de aumento na produtividade com IA</p>
            </div>
            <div className="p-6 bg-primary/10 rounded-lg text-center space-y-2">
              <p className="text-4xl font-bold text-primary">60%</p>
              <p className="text-sm text-foreground">das tarefas podem ser automatizadas</p>
            </div>
          </div>

          <div className="p-8 bg-gradient-to-r from-primary/20 to-primary/5 border border-primary/30 rounded-lg">
            <p className="text-xl lg:text-2xl font-serif font-bold text-foreground text-center leading-relaxed">
              Não é uma onda. É um tsunami.<br />
              <span className="text-primary">E você precisa aprender a surfar.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
