import { Palette, CreditCard, Sparkles, Code } from 'lucide-react';

export function SolutionSection() {
  const solutions = [
    {
      icon: <Palette className="size-6 text-amber-500" />,
      title: "Ready-to-Use UI Components",
      description: "UI development becomes as simple as building with blocks, including Shadcn/ui, Magic UI, Animate UI, and Tailark blocks."
    },
    {
      icon: <CreditCard className="size-6 text-green-500" />,
      title: "Out-of-the-Box Payment System", 
      description: "Built-in Stripe integration with subscriptions and one-time payments, all you need to do is configure your pricing table."
    },
    {
      icon: <Sparkles className="size-6 text-violet-500" />,
      title: "Complete SaaS Features",
      description: "Built-in auth, i18n, blog, docs, newsletter, dashboard, theming, and SEO optimization, saving you months of development time."
    },
    {
      icon: <Code className="size-6 text-blue-500" />,
      title: "Extensible Codebase",
      description: "Built with industry best practices for maintainability and scalability, and fully customizable implementations for payment, storage, newsletter, and email services."
    }
  ];

  return (
    <section id="solution" className="py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">Solution</h2>
          <p className="text-balance text-2xl text-foreground">Speed up your SaaS development</p>
          <p className="text-balance text-lg text-muted-foreground">MkSaaS solves all the common problems of SaaS development</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 text-gray-500 md:grid-cols-2 xl:grid-rows-2 md:grid-rows-3 xl:auto-rows-fr xl:grid-cols-3">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`group relative items-start overflow-hidden p-6 rounded-2xl feature-card ${
                index === 2 ? 'md:row-span-2' : index === 3 ? 'order-4 md:col-span-2 md:flex-row xl:order-none' : index === 0 ? '' : 'order-3 xl:order-none'
              }`}
            >
              <div>
                <div className="flex items-center gap-2">
                  <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <h3 className="font-semibold text-foreground">{solution.title}</h3>
                </div>
                <div className="mt-4 text-muted-foreground">
                  <p>{solution.description}</p>
                </div>
              </div>
              
              {/* Animated ripples for the large card */}
              {index === 2 && (
                <div className="pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)] -bottom-full">
                  {Array.from({ length: 8 }, (_, i) => (
                    <div
                      key={i}
                      className="absolute animate-ripple rounded-full border bg-foreground/25 shadow-xl"
                      style={{
                        '--i': i,
                        width: `${210 + i * 70}px`,
                        height: `${210 + i * 70}px`,
                        opacity: 0.24 - i * 0.03,
                        animationDelay: `${i * 0.06}s`,
                        borderStyle: i === 7 ? 'dashed' : 'solid',
                        borderWidth: '1px',
                        borderColor: `hsl(var(--foreground), ${0.05 + i * 0.05})`,
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) scale(1)'
                      } as React.CSSProperties}
                    />
                  ))}
                </div>
              )}

              <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-neutral-50 dark:from-neutral-900 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}