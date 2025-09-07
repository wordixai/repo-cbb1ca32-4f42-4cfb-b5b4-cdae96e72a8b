import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const avatars = [
    "https://avatars.githubusercontent.com/u/70427383",
    "https://avatars.githubusercontent.com/u/157827282",
    "https://pbs.twimg.com/profile_images/1808894379253510146/_SFe0D22_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1852279839946141696/de-jezIY_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1789826928331145216/cPsR9i5A_400x400.jpg",
  ];

  return (
    <main id="hero" className="overflow-hidden">
      {/* Background Gradients */}
      <div aria-hidden="true" className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block">
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]"></div>
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]"></div>
      </div>

      <div className="relative pt-12">
        <div className="mx-auto max-w-7xl px-6">
          {/* Animated Ripples */}
          <div className="pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]">
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

          <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
            {/* Discord Banner */}
            <div className="mx-auto">
              <a
                target="_blank"
                className="hover:bg-accent group mx-auto flex w-fit items-center gap-2 rounded-full border p-1 pl-4"
                href="https://discord.com"
              >
                <span className="text-foreground text-sm">Join Discord with 1700+ makers</span>
                <div className="size-6 overflow-hidden rounded-full duration-500">
                  <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                    <span className="flex size-6">
                      <ArrowRight className="m-auto size-3" />
                    </span>
                  </div>
                </div>
              </a>
            </div>

            {/* Hero Title */}
            <h1 className="mt-8 text-balance font-bold lg:mt-16 text-5xl xl:text-[5rem]">
              <span className="inline-block whitespace-pre">Make</span>
              <span className="inline-block whitespace-pre"> Your</span>
              <span className="inline-block whitespace-pre"> AI</span>
              <span className="inline-block whitespace-pre"> SaaS</span>
              <span className="inline-block whitespace-pre"> Product</span>
              <span className="inline-block whitespace-pre"> 
                <span className="relative inline-block px-2 rounded-lg hero-highlight mx-1 py-0.5">
                  in a weekend
                </span>
              </span>
            </h1>

            {/* Hero Description */}
            <p className="mx-auto mt-8 max-w-4xl text-balance text-lg text-muted-foreground">
              The complete Next.js boilerplate for building profitable SaaS, packed with AI, auth, payments, i18n, newsletter, dashboard, blog, docs, blocks, themes, SEO and more.
            </p>

            {/* Hero Buttons */}
            <div className="mt-12 flex flex-row items-center justify-center gap-4">
              <div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
                <Button className="primary-button h-10 rounded-xl px-5 text-base">
                  Get MkSaaS
                </Button>
              </div>
              <Button variant="outline" className="secondary-button h-10 rounded-xl px-5">
                See Demo
              </Button>
            </div>

            {/* User Avatars */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4">
              <div className="z-10 flex -space-x-4 rtl:space-x-reverse">
                {avatars.map((src, index) => (
                  <img
                    key={index}
                    className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                    src={src}
                    width={40}
                    height={40}
                    alt={`Avatar ${index + 1}`}
                  />
                ))}
                <a className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black">
                  180+
                </a>
              </div>
              <p className="text-muted-foreground text-sm">180+ makers ship faster with MkSaaS</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-16">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg bg-muted/50">
            <img
              alt="app screen"
              className="relative rounded-2xl w-full"
              src="https://mksaas.com/images/home/hero/dashboard-dark.png"
            />
          </div>
        </div>
      </div>
    </main>
  );
}