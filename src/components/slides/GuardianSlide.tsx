import qrCodeGuardiao from "@/assets/qr-code-guardiao.png";

export const GuardianSlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12">
      <div className="max-w-4xl space-y-12 text-center">
        <h2 className="text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
          Seja um Guardião do Método Oásis
        </h2>
        
        <div className="flex justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <img 
              src={qrCodeGuardiao} 
              alt="QR Code para ser Guardião do Método Oásis" 
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
