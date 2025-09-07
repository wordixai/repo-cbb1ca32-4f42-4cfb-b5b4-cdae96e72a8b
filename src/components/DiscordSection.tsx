import { Button } from '@/components/ui/button';

export function DiscordSection() {
  const techIcons = [
    { icon: "🔷", name: "Tech 1" },
    { icon: "🔸", name: "Tech 2" },
    { icon: "⚡", name: "Drizzle" },
    { icon: "🚀", name: "Vercel" },
    { icon: "💳", name: "Stripe" },
    { icon: "🎨", name: "Design" }
  ];

  return (
    <section id="discord" className="px-4 py-16 bg-muted/50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid items-center sm:grid-cols-2">
          {/* Tech Stack Visual */}
          <div className="relative mx-auto w-fit">
            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
              <div className="relative flex size-20 rounded-xl bg-muted dark:bg-muted/50">
                <div className="relative z-20 m-auto size-fit">
                  <span className="text-2xl">🔷</span>
                </div>
              </div>
              <div className="relative flex size-20 rounded-xl bg-muted dark:bg-muted/50">
                <div className="relative z-20 m-auto size-fit">
                  <span className="text-2xl">🔸</span>
                </div>
              </div>
            </div>
            
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <div className="relative flex size-20 rounded-xl bg-muted dark:bg-muted/50">
                <div className="relative z-20 m-auto size-fit">
                  <svg className="size-10" viewBox="0 0 160 160" fill="currentColor">
                    <rect width="9.631" height="40.852" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 43.48 67.304)"/>
                    <rect width="9.631" height="40.852" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 76.94 46.534)"/>
                    <rect width="9.631" height="40.852" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 128.424 46.535)"/>
                    <rect width="9.631" height="40.852" rx="4.816" transform="matrix(.87303 .48767 -.49721 .86763 94.957 67.304)"/>
                  </svg>
                </div>
              </div>
              <div className="relative flex size-20 rounded-xl bg-muted dark:bg-muted">
                <div className="relative z-20 m-auto size-fit">
                  <img alt="Logo" className="rounded-md size-8" src="https://mksaas.com/logo-dark.png" />
                </div>
              </div>
              <div className="relative flex size-20 rounded-xl bg-muted dark:bg-muted/50">
                <div className="relative z-20 m-auto size-fit">
                  <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 22.525H0l12-21.05z"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="mx-auto flex w-fit justify-center gap-2">
              <div className="relative flex size-20 rounded-xl bg-muted dark:bg-muted/50">
                <div className="relative z-20 m-auto size-fit">
                  <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z"/>
                  </svg>
                </div>
              </div>
              <div className="relative flex size-20 rounded-xl bg-muted dark:bg-muted/50">
                <div className="relative z-20 m-auto size-fit">
                  <span className="text-2xl">🎨</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">Join the Discord community</h2>
            <p className="text-muted-foreground">
              Connect with <span className="font-bold text-primary text-2xl">1700+</span> makers and get help with your project.
            </p>
            <Button className="primary-button h-10 rounded-md px-6 gap-2">
              <span className="text-2xl">💬</span>
              <a href="https://discord.com" target="_blank" rel="noreferrer">Join Discord for free</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}