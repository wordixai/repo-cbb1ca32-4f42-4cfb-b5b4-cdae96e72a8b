export function MarqueeSection() {
  const features = [
    "Google Analytics", "Plausible Analytics", "Umami Analytics", "OpenPanel Analytics",
    "Vercel Analytics", "Datafast Analytics", "Dark Mode", "Responsive Design",
    "Shadcn UI Components", "Magic UI Components", "Animate UI Components", "Tailark Marketing Blocks",
    "Customizable Themes", "Next Theme", "Customizable Fonts", "Built-in Pages",
    "Built-in Blog", "Built-in Documentation", "Newsletter", "SEO Friendly",
    "Content Collections", "Fumadocs", "React Email Templates", "Preview Emails",
    "Email/Password Auth", "Social Auth", "Reset Password", "Email Verification"
  ];

  const features2 = [
    "Change Username", "Change Password", "Change Avatar", "User Management",
    "Ban User", "Stripe Subscription", "Stripe Checkout", "Stripe Billing Portal",
    "Webhooks Handling", "Credits System", "Credit Packages", "Credit Transactions",
    "MCP Servers", "Cursor Rules", "Biome Linting"
  ];

  const features3 = [
    "Biome Formatter", "Subscribe Newsletter", "File Upload", "Dashboard",
    "Internalization", "Auto-generated Sitemap", "OpenGraph Metadata", "Auto-generated Manifest",
    "Zod Validation", "React Hook Form", "Next Safe Server Actions", "Discord Notification",
    "Feishu Notification", "Affiliate System", "Notification System"
  ];

  const MarqueeRow = ({ items, reverse = false }: { items: string[]; reverse?: boolean }) => (
    <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:20s]">
      <div className={`flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] ${reverse ? '[animation-direction:reverse]' : ''}`}>
        {items.map((item, index) => (
          <figure key={index} className="relative cursor-pointer overflow-hidden rounded-xl border p-2 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
            <blockquote className="text-base">{item}</blockquote>
          </figure>
        ))}
      </div>
      <div className={`flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused] ${reverse ? '[animation-direction:reverse]' : ''}`}>
        {items.map((item, index) => (
          <figure key={`${index}-duplicate`} className="relative cursor-pointer overflow-hidden rounded-xl border p-2 border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
            <blockquote className="text-base">{item}</blockquote>
          </figure>
        ))}
      </div>
    </div>
  );

  return (
    <section id="more-features" className="px-4 py-16">
      <div className="mx-auto flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">Not convinced yet?</h2>
          <p className="text-balance text-2xl text-foreground">We provide more features for you</p>
          <p className="text-muted-foreground">
            What you see in the{" "}
            <a href="https://demo.mksaas.com/" className="text-primary underline underline-offset-4" target="_blank" rel="noopener noreferrer">
              demo website
            </a>{" "}
            is what you get in your own website
          </p>
        </div>

        <div className="mt-12 relative w-full overflow-hidden flex flex-col items-center justify-center">
          <div className="flex flex-col">
            <MarqueeRow items={features} />
            <MarqueeRow items={features2} reverse />
            <MarqueeRow items={features3} />
          </div>
          
          {/* Fade gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
        </div>
      </div>
    </section>
  );
}