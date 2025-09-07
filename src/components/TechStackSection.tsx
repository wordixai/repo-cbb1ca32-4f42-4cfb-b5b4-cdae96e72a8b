export function TechStackSection() {
  const techStack = [
    {
      name: "Next.js",
      description: "The most popular full stack React framework.",
      href: "https://nextjs.org/",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.5502.0445h-.4787l-.1073-.0633c-.0582-.0389-.1073-.1066-.1358-.1823l-.0328-.1082.0094-4.9991.0096-4.9991.0485-.1103c.0524-.1185.1572-.1925.2758-.1925.0616 0 .3132.0026.5604.0051l.4456.0077.1073.0633c.0582.0389.1073.1066.1358.1823l.0328.1082-.0094 4.9991-.0096 4.9991-.0485.1103c-.0524.1185-.1572.1925-.2758.1925-.0616 0-.3132-.0026-.5604-.0051l-.4456-.0077-.1073-.0633c-.0582-.0389-.1073-.1066-.1358-.1823l-.0328-.1082.0094-4.9991.0096-4.9991.0485-.1103c.0524-.1185.1572-.1925.2758-.1925.0616 0 .3132.0026.5604.0051l.4456.0077.1073.0633z"/>
        </svg>
      )
    },
    {
      name: "BetterAuth",
      description: "The best open source authentication library.",
      href: "https://authjs.dev/",
      icon: (
        <svg className="size-6" viewBox="0 0 500 500" fill="currentColor">
          <path d="M0 0h500v500H0z" fill="#000"/>
          <path d="M69 121h86.988v259H69zM337.575 121H430v259h-92.425z" fill="#fff"/>
          <path d="M427.282 121v83.456h-174.52V121zM430 296.544V380H252.762v-83.456z" fill="#fff"/>
          <path d="M252.762 204.455v92.089h-96.774v-92.089z" fill="#fff"/>
        </svg>
      )
    },
    {
      name: "Drizzle ORM",
      description: "Lightweight, performant, headless TypeScript ORM.",
      href: "https://orm.drizzle.team/",
      icon: (
        <svg className="size-6" viewBox="0 0 160 160" fill="currentColor">
          <rect width="9.631" height="40.852" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)"/>
          <rect width="9.631" height="40.852" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)"/>
          <rect width="9.631" height="40.852" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)"/>
          <rect width="9.631" height="40.852" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)"/>
        </svg>
      )
    },
    {
      name: "Stripe",
      description: "The best and most secure online payment service.",
      href: "https://stripe.com/",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z"/>
        </svg>
      )
    },
    {
      name: "Shadcn UI",
      description: "Open source components for building modern websites.",
      href: "https://ui.shadcn.com/",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"/>
        </svg>
      )
    },
    {
      name: "Tailwind CSS",
      description: "The CSS framework for rapid UI development.",
      href: "https://tailwindcss.com/",
      icon: (
        <svg className="size-6" viewBox="0 0 54 33" fill="currentColor">
          <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"/>
        </svg>
      )
    },
    {
      name: "Resend",
      description: "The best modern email service for developers.",
      href: "https://resend.com/",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.023 0v24h5.553v-8.434h2.998L15.326 24h6.65l-5.372-9.258a7.65 7.65 0 0 0 3.316-3.016q1.063-1.815 1.062-4.08q0-2.194-1.062-3.91q-1.063-1.747-2.95-2.742Q15.12 0 12.823 0Zm5.553 4.87h4.219q1.097 0 1.851.376q.788.378 1.2 1.098q.412.685.412 1.611c0 .926-.126 1.165-.378 1.645q-.343.72-1.03 1.13q-.651.379-1.542.38H7.576Z"/>
        </svg>
      )
    },
    {
      name: "Vercel AI SDK",
      description: "The open source AI Toolkit for TypeScript.",
      href: "https://sdk.vercel.ai/",
      icon: (
        <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.525H0l12-21.05z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="tech-stack" className="py-16 relative z-10">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">Tech Stack</h2>
          <p className="text-balance text-2xl text-foreground">Build with your favorite tech stack</p>
          <p className="text-balance text-lg text-muted-foreground">Use the latest industry-standard tech stack for your next project</p>
        </div>

        <div className="mt-16 grid gap-4 grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech) => (
            <a key={tech.name} target="_blank" className="block group" href={tech.href}>
              <div className="tech-card">
                <div aria-hidden="true" className="absolute inset-0 aspect-video -translate-y-1/2 rounded-full border bg-gradient-to-b opacity-25 blur-2xl duration-300 group-hover:-translate-y-1/4 dark:from-white dark:to-white dark:opacity-5 dark:group-hover:opacity-10"></div>
                <div className="relative">
                  <div className="relative flex items-center gap-3">
                    <div className="flex size-12 rounded-2xl border border-border shadow-sm *:relative *:m-auto">
                      {tech.icon}
                    </div>
                    <h4 className="font-medium">{tech.name}</h4>
                  </div>
                  <p className="mt-6 text-muted-foreground text-sm lg:text-base">{tech.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}