export const CaseStudyResultSlide = () => {
  return (
    <div className="w-full h-full bg-background flex items-center justify-center p-12">
      <div className="max-w-4xl space-y-12 text-center">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-auto max-h-[500px] object-contain bg-black"
          >
            <source src="/videos/case-study-demo.mov" type="video/mp4" />
          </video>
        </div>

        <div className="pt-6">
          <p className="text-2xl lg:text-3xl font-semibold text-foreground leading-relaxed">
            Ela não gasta mais <span className="text-muted-foreground line-through">horas</span> pensando.<br />
            Ela gasta <span className="text-primary">minutos</span> aprovando.
          </p>
        </div>
      </div>
    </div>
  );
};
