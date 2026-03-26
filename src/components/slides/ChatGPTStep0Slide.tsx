import chatgptSiteScreenshot from "@/assets/chatgpt-site-screenshot.png";

export const ChatGPTStep0Slide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12 overflow-y-auto">
      <div className="max-w-6xl w-full space-y-10 py-8">
        <div className="space-y-8">
          <div className="space-y-6 p-8 bg-card border-l-4 border-primary rounded-lg">
            <h3 className="text-3xl font-serif font-bold text-foreground">Passo 0: Acessar</h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Abra <span className="font-mono font-semibold text-foreground">chat.openai.com</span> e crie sua conta gratuita
            </p>
            <div className="rounded-lg overflow-hidden border-2 border-border">
              <img src={chatgptSiteScreenshot} alt="Site ChatGPT - chat.openai.com" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
