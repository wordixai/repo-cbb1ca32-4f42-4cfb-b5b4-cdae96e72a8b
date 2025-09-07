export function ShowcaseSection() {
  const showcases = [
    {
      name: "Nano Banana AI",
      description: "Edit any image with text prompts — fast, accurate, and photorealistic.",
      href: "https://nanobananas.site/",
      image: "https://pb.indieapp.site/api/files/pbc_550958862/4cawnwwnzo214kh/scr_20250828_jehm_3bftymnurd.png"
    },
    {
      name: "KissPixel",
      description: "Create Stunning AI Images Effortlessly",
      href: "https://kisspixel.ai/",
      image: "https://pb.indieapp.site/api/files/pbc_550958862/eo67sivnpf7zu15/kiss_pixel_ai_4j3a6udlno.png"
    },
    {
      name: "Fast3D",
      description: "Lightning-Fast AI 3D Model Generator",
      href: "https://fast3d.io/",
      image: "https://pb.indieapp.site/api/files/pbc_550958862/24fi7pvlw5d5jij/fast3d_8qh71dnam6.png"
    },
    {
      name: "Edit0",
      description: "Say it. See it. AI-powered Photo Editor",
      href: "https://edit0.com/",
      image: "https://pb.indieapp.site/api/files/pbc_550958862/u22jff0b9aghowt/edit0_rr4dy46y7x.png"
    },
    {
      name: "Qwen Image",
      description: "Immersive AI Image Creation & Editing",
      href: "https://qwenimage.dev/",
      image: "https://pb.indieapp.site/api/files/pbc_550958862/e4aoygcvoc2kokk/qwenimage_gvfs9of8dm.png"
    },
    {
      name: "Nano Banana",
      description: "Free Online AI Image Editor",
      href: "https://www.nano-banana.com/",
      image: "https://pb.indieapp.site/api/files/pbc_550958862/6fprqkvpwfm4yuq/scr_20250830_ihas_2_2ousrnuzzf.png"
    }
  ];

  return (
    <section id="showcase" className="px-4 py-16">
      <div className="mx-auto max-w-6xl space-y-8 md:space-y-16">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">Showcases</h2>
          <p className="text-balance text-2xl text-foreground">What our customers are building</p>
          <p className="text-balance text-lg text-muted-foreground">Launch your SaaS with MkSaaS and get featured here for free!</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcases.map((showcase, index) => (
            <a
              key={index}
              href={showcase.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col h-full border border-border rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:border-primary hover:shadow-lg hover:shadow-primary/20"
              style={{ minHeight: '260px' }}
            >
              <div className="relative w-full aspect-[16/10] rounded-t-xl overflow-hidden">
                <img
                  alt={showcase.name}
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-300 w-full h-full"
                  src={showcase.image}
                />
              </div>
              <div className="flex-1 flex flex-col justify-between p-4 md:p-5">
                <div>
                  <div className="font-semibold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                    <h3>{showcase.name}</h3>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground line-clamp-2 min-h-[2.5em]">
                    {showcase.description}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}