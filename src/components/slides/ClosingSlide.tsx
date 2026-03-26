import qrCodeWhatsApp from "@/assets/qr-code-whatsapp.jpeg";

export const ClosingSlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-8">
      <div className="max-w-3xl space-y-10 text-center">
        <div className="space-y-6">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
            Dúvidas?
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Vamos conversar sobre como aplicar IA no seu negócio
          </p>
        </div>

        <div className="p-8 bg-card border-2 border-border rounded-lg space-y-4">
          <div className="max-w-xs mx-auto">
            <img src={qrCodeWhatsApp} alt="QR Code WhatsApp - Rian Gomes" className="w-full h-auto rounded-lg" />
          </div>
          
          <div className="space-y-1">
            <p className="text-lg font-semibold text-foreground">
              Entre em contato
            </p>
            <p className="text-base text-muted-foreground">
              Escaneie o QR Code para saber mais
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
