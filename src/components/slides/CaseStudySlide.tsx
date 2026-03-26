export const CaseStudySlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12">
      <div className="max-w-5xl space-y-12 text-center">
        <h2 className="text-5xl lg:text-6xl font-serif font-bold text-foreground mt-8">
          Estudo de Caso
        </h2>
        
        <div className="space-y-8">
          <div className="p-10 bg-card border border-border rounded-lg text-left">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold text-primary mb-6">
              O Agente IA de Produção de Conteúdo da Gabi - O Pedrinho
            </h3>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Não é só usar uma ferramenta, é <span className="font-semibold text-foreground">criar um sistema</span>.
              </p>
              <p>
                O Agente IA que criamos para a Gabi já entende:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>A voz dela</li>
                <li>O público dela</li>
                <li>Os objetivos de social selling</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border-2 border-border rounded-lg space-y-3 text-center">
              <div className="text-4xl">⚡</div>
              <h4 className="text-xl font-bold text-primary">Produtividade</h4>
            </div>

            <div className="p-6 bg-card border-2 border-border rounded-lg space-y-3 text-center">
              <div className="text-4xl">📊</div>
              <h4 className="text-xl font-bold text-primary">Quantidade</h4>
            </div>

            <div className="p-6 bg-card border-2 border-border rounded-lg space-y-3 text-center">
              <div className="text-4xl">✨</div>
              <h4 className="text-xl font-bold text-primary">Qualidade</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
