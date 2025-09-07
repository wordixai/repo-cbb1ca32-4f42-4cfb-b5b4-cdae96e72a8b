import { Button } from '@/components/ui/button';
import { Sun, Moon, Laptop, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 pt-16 md:grid-cols-6">
          {/* Brand Section */}
          <div className="flex flex-col items-start col-span-full md:col-span-2">
            <div className="space-y-4">
              <div className="items-center space-x-2 flex">
                <img alt="Logo" className="size-8 rounded-md" src="https://mksaas.com/logo-dark.png" />
                <span className="text-xl font-semibold">MkSaaS</span>
              </div>
              <p className="text-muted-foreground text-base py-2 md:pr-12">
                Make Your AI SaaS Product in a Weekend
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 py-2">
                <div className="flex items-center gap-2">
                  <a href="https://github.com/MkSaaSHQ" target="_blank" rel="noreferrer" aria-label="GitHub" className="border border-border inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground">
                    <span className="sr-only">GitHub</span>
                    <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="border border-border inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="size-4 shrink-0" />
                  </a>
                  <a href="mailto:support@mksaas.com" target="_blank" rel="noreferrer" aria-label="Email" className="border border-border inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground">
                    <span className="sr-only">Email</span>
                    <Mail className="size-4 shrink-0" />
                  </a>
                </div>
              </div>

              {/* Built with MkSaaS Badge */}
              <a target="_blank" className="secondary-button inline-flex items-center justify-center h-8 gap-1.5 border border-border px-4 rounded-md" href="https://mksaas.com">
                <span>Built with</span>
                <img alt="Logo of MkSaaS" className="size-5 rounded-full" src="https://mksaas.com/mksaas.png" />
                <span className="font-semibold">MkSaaS</span>
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-span-1 md:col-span-1 items-start">
            <span className="text-sm font-semibold uppercase">Product</span>
            <ul className="mt-4 list-inside space-y-3">
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="#features">Features</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="#pricing">Pricing</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/blog/faq">FAQ</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 items-start">
            <span className="text-sm font-semibold uppercase">Resources</span>
            <ul className="mt-4 list-inside space-y-3">
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/blog">Blog</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/docs">Documentation</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="https://roadmap.mksaas.com" target="_blank">Roadmap</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 items-start">
            <span className="text-sm font-semibold uppercase">Company</span>
            <ul className="mt-4 list-inside space-y-3">
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="https://mksaas.affonso.io/" target="_blank">💰 Affiliates</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/submit">🤟 Submit</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="https://discord.com">💬 Join Discord</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-1 items-start">
            <span className="text-sm font-semibold uppercase">Legal</span>
            <ul className="mt-4 list-inside space-y-3">
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/license">License Policy</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/privacy">Privacy Policy</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-primary" href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Badges and Theme Switcher */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 md:flex-nowrap">
            <a href="https://www.producthunt.com/products/mksaas" target="_blank" rel="noreferrer noopener">
              <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1011093&theme=dark" alt="MkSaaS - Make Your AI SaaS Product in a weekend | Product Hunt" style={{width: '250px', height: '54px'}} width="250" height="54" />
            </a>
          </div>
        </div>

        {/* Copyright and Theme Switcher */}
        <div className="border-t py-8">
          <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between gap-x-4">
            <span className="text-muted-foreground text-sm">© 2025 MkSaaS All Rights Reserved.</span>
            
            <div className="flex items-center gap-x-4">
              <div className="flex items-center gap-2 rounded-full border p-1">
                <Button size="icon" className="size-6 px-0 rounded-full hover:bg-accent hover:text-accent-foreground" aria-label="Light">
                  <Sun className="size-4" />
                </Button>
                <Button size="icon" className="size-6 px-0 rounded-full bg-muted text-foreground hover:bg-accent hover:text-accent-foreground" aria-label="Dark">
                  <Moon className="size-4" />
                </Button>
                <Button size="icon" className="size-6 px-0 rounded-full hover:bg-accent hover:text-accent-foreground" aria-label="System">
                  <Laptop className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}