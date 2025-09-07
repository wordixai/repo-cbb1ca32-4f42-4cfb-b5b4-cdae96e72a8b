import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CircleCheckBig } from 'lucide-react';

export function PricingSection() {
  const features = [
    "Complete Next.js boilerplate for AI SaaS",
    "Seamless Stripe payments and webhooks",
    "Secure authentication and authorization",
    "Sleek UI components and marketing blocks",
    "Feature-rich blog system and documentation",
    "Auto-generated sitemap and OG metadata",
    "Showcase your products on MkSaaS for free",
    "Unlimited personal and commercial projects",
    "Technical support via email and Discord 🛟",
    "Access to 4+ official Github repositories 🎁",
    "Lifetime updates with no extra cost 🔥"
  ];

  const avatars = [
    "https://avatars.githubusercontent.com/u/70427383",
    "https://avatars.githubusercontent.com/u/157827282",
    "https://pbs.twimg.com/profile_images/1808894379253510146/_SFe0D22_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1852279839946141696/de-jezIY_400x400.jpg",
    "https://pbs.twimg.com/profile_images/1789826928331145216/cPsR9i5A_400x400.jpg",
  ];

  return (
    <section id="pricing" className="relative px-4 py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-balance text-foreground text-4xl font-bold">Pricing</h2>
          <p className="text-balance text-lg text-muted-foreground">Pay once, Lifetime updates, Build unlimited SaaS websites</p>
        </div>

        <div className="mt-12">
          <div className="bg-card relative rounded-2xl border shadow-sm ring-4 ring-muted dark:ring-0">
            <div className="grid items-center gap-12 divide-y px-4 py-12 md:grid-cols-2 md:divide-x md:divide-y-0">
              {/* Pricing Info */}
              <div className="pb-12 text-center md:pb-0 md:pr-12">
                <h3 className="text-2xl font-semibold">Lifetime</h3>
                <p className="mt-2 text-muted-foreground">🎁 Special Offer Limited Time 🎁</p>
                <span className="mb-6 mt-12 inline-block text-6xl font-bold">
                  <span className="text-4xl">$</span>179
                </span>
                
                <div className="mt-4 flex justify-center px-4 md:px-8">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="primary-button mt-4 w-full text-lg py-6">
                        Get MkSaaS
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <div className="p-4">Checkout functionality would be implemented here</div>
                    </DialogContent>
                  </Dialog>
                </div>

                <p className="text-muted-foreground mt-8 text-sm">Pay once, Build unlimited SaaS websites</p>

                <div className="mt-8 flex justify-center">
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
                </div>
              </div>

              {/* Features List */}
              <div className="relative">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CircleCheckBig className="size-4 text-green-500 dark:text-green-400" />
                      <span className="text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}