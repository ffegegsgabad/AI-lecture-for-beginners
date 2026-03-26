export const CoverSlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12">
      <div className="max-w-4xl w-full space-y-10 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight text-foreground">
            INTELIGÊNCIA<br />ARTIFICIAL
          </h1>
        </div>

        <div className="bg-primary text-primary-foreground p-10 space-y-2 inline-block">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold leading-snug">
            Como a IA Pode<br />
            Multiplicar Suas Vendas<br />
            e Sua Produtividade
          </h2>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Descubra como aplicar a inteligência artificial no seu dia a dia e expandir seu potencial de produtividade.
        </p>
      </div>
    </div>
  );
};
