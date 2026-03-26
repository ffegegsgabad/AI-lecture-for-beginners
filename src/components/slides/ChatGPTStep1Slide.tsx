import chatgptPersonalization from "@/assets/chatgpt-personalization.png";
import chatgptAboutYou from "@/assets/chatgpt-about-you.png";

export const ChatGPTStep1Slide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12 overflow-y-auto">
      <div className="max-w-6xl w-full space-y-10 py-8">
        <div className="space-y-8">
          <div className="space-y-6 p-8 bg-card border-l-4 border-primary rounded-lg">
            <h3 className="text-3xl font-serif font-bold text-foreground">Passo 1: Configurações Personalizadas</h3>
            <p className="text-xl text-muted-foreground mb-6">
              Settings → Custom Instructions <span className="text-primary font-bold">(onde 90% erra!)</span>
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border-2 border-border">
                  <img src={chatgptAboutYou} alt="Sobre Você - ChatGPT" className="w-full h-auto" />
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Ex: "Sou uma fonoaudióloga especializada em fala infantil, meu público são pais de crianças de 3 a 7 anos"
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden border-2 border-border">
                  <img src={chatgptPersonalization} alt="Personalização - ChatGPT" className="w-full h-auto" />
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Ex: "Responda de forma profissional mas acessível. Evite termos técnicos. Use emojis nos posts"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
