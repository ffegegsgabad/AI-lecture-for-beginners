export const ObjectiveSlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12">
      <div className="max-w-5xl space-y-12">
        <div className="space-y-8 text-center">
          <p className="text-3xl lg:text-4xl font-medium text-foreground leading-relaxed">
            Meu objetivo hoje é bem simples:
          </p>
          
          <p className="text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight">
            Desmistificar a Inteligência Artificial
          </p>
          
          <div className="pt-8 space-y-4 text-xl lg:text-2xl text-muted-foreground">
            <p>
              Vamos fugir 100% dos termos técnicos ou daquela conversa de "código".
            </p>
            <p className="text-foreground font-semibold">
              O foco aqui é prático.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
