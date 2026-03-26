export const Tool6Slide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12 overflow-y-auto pb-32">
      <div className="max-w-5xl w-full space-y-12">
        <div className="p-10 bg-card border-l-8 border-primary rounded-lg space-y-6">
          <h3 className="text-4xl lg:text-5xl font-serif font-bold text-primary">
            YouTube Summarize
          </h3>
          
          <p className="text-2xl text-muted-foreground font-medium">
            Para Resumir Vídeos
          </p>
          
          <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
            Resume vídeos longos do YouTube em poucos segundos
          </p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto max-h-[400px] object-contain bg-black"
          >
            <source src="/videos/youtube-summary-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};
