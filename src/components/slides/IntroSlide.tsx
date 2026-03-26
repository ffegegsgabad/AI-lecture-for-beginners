export const IntroSlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12">
      <div className="max-w-5xl space-y-12">
        <h2 className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
          Quem é o Rian
        </h2>
        
        <div className="space-y-8 text-xl text-foreground leading-relaxed">
          <div className="space-y-6 text-xl lg:text-2xl text-muted-foreground border-l-4 border-primary pl-8">
            <p className="text-foreground">
              Natural de Tubarão-SC, filho amado de Deus e namorado da Laura
            </p>
            <p className="text-foreground">
              Apaixonado por tecnologia e inovação
            </p>
            <p className="text-foreground">
              Treinamentos em Inteligência Artificial em instituições de referência mundial, como Stanford e MIT
            </p>
            <p className="text-foreground">
              Possuo mais de 3 anos de experiência em vendas no digital e já fundei e vendi uma startup
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
