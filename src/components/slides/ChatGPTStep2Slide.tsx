export const ChatGPTStep2Slide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12 overflow-y-auto">
      <div className="max-w-6xl w-full space-y-10 py-8">
        <div className="space-y-8">
          <div className="space-y-6 p-8 bg-card border-l-4 border-primary rounded-lg">
            <h3 className="text-3xl font-serif font-bold text-foreground">Passo 2: Prompts Inteligentes</h3>
            <p className="text-xl text-muted-foreground mb-4">
              Use a fórmula
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/30 rounded-lg space-y-3">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">Papel</p>
                  <p className="text-sm text-muted-foreground">Quem você quer que ela seja</p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Ex: "Aja como especialista em marketing digital"
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg space-y-3">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">Tarefa</p>
                  <p className="text-sm text-muted-foreground">O que você quer que ela faça</p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Ex: "Crie 5 ideias de post"
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg space-y-3">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">Contexto</p>
                  <p className="text-sm text-muted-foreground">Informações relevantes</p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Ex: "Para Instagram, público 25-40 anos"
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg space-y-3">
                <div className="space-y-2">
                  <p className="text-lg font-semibold text-foreground">Resultado</p>
                  <p className="text-sm text-muted-foreground">Como você quer a resposta</p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Ex: "Em formato de tabela com legenda"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
