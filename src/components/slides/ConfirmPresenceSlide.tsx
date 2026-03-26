import qrCodePresenca from "@/assets/qr-code-presenca.png";

export const ConfirmPresenceSlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12">
      <div className="max-w-4xl space-y-12 text-center">
        <h2 className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
          Confirme sua presença
        </h2>
        
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <img 
              src={qrCodePresenca} 
              alt="QR Code para confirmar presença" 
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
