export const ExplainingAISlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12 pb-32">
      <div className="max-w-5xl space-y-10 text-center">
        <div className="space-y-10">
          <div className="p-10 bg-card border-2 border-border rounded-lg">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-primary mb-6">
              A IA é como um assistente superdotado
            </h3>
            <div className="space-y-4 text-xl text-muted-foreground leading-relaxed">
              <p>✓ Nunca cansa</p>
              <p>✓ Processa informações rapidamente</p>
              <p>✓ Tem memória gigante</p>
              <p>✓ Aprende constantemente</p>
            </div>
          </div>
          
          <div className="p-10 bg-primary/10 rounded-lg">
            <p className="text-2xl text-foreground font-medium">
              <span className="font-bold">MAS:</span> Ela não tem bom senso, contexto ou experiência de vida
            </p>
          </div>
          
          <p className="text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed pt-4">
            Nosso trabalho é aprender a ser o <span className="text-primary">líder</span> desse estagiário superdotado
          </p>
        </div>
      </div>
    </div>
  );
};
