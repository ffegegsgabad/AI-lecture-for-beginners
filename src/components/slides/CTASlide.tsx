export const CTASlide = () => {
  return (
    <div className="w-full h-full bg-primary text-primary-foreground flex items-center justify-center p-12">
      <div className="max-w-4xl mx-auto space-y-10 text-center">
        <h2 className="text-4xl lg:text-6xl font-serif font-bold leading-tight">
          Construa seu<br />Agente Pessoal
        </h2>
        
        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-xl lg:text-2xl">
            O que mostrei aqui não é um truque de produtividade.<br />
            É o <span className="font-bold">próximo nível de eficiência</span>.
          </p>
          
          <div className="p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
            <p className="text-xl font-semibold mb-4">
              Imagine ter um assistente digital que entende:
            </p>
            <div className="space-y-2 text-base">
              <p>✓ Sua rotina</p>
              <p>✓ Seus produtos</p>
              <p>✓ Seus clientes</p>
            </div>
          </div>

          <p className="text-lg lg:text-xl mb-2">
            Um copiloto feito sob medida para você
          </p>

          <div>
            <p className="text-xl font-bold mb-2">
              Seja para:
            </p>
            <div className="space-y-1 text-base max-w-2xl mx-auto">
              <p>• Automatizar produção de conteúdo</p>
              <p>• Estruturar mentorias</p>
              <p>• Qualificar leads</p>
              <p>• Otimizar sua rotina</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
