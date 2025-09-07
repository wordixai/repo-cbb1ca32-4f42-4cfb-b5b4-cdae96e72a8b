import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Menu, Sun, Moon, Languages, ArrowRight } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="sticky inset-x-0 top-0 z-40 py-4 transition-all duration-300 bg-transparent">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <div className="flex items-center">
            <a className="flex items-center space-x-2" href="#hero">
              <img alt="Logo" className="size-8 rounded-md" src="https://mksaas.com/logo-dark.png" />
              <span className="text-xl font-semibold">MkSaaS</span>
            </a>
          </div>

          <div className="flex-1 flex items-center justify-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="#features" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all">
                    Features
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#pricing" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all">
                    Pricing
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/blog" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all">
                    Blog
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="/docs" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all">
                    Docs
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="#showcase" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all">
                    Showcase
                  </a>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <a href="https://mksaas.affonso.io/" target="_blank" className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-transparent text-muted-foreground cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all">
                    Affiliates
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    Log in
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div className="p-4">Login functionality would be implemented here</div>
                </DialogContent>
              </Dialog>
              <Button size="sm" className="primary-button">
                Get MkSaaS
              </Button>
            </div>

            <a href="https://discord.com" target="_blank" className="border border-border inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-accent hover:text-accent-foreground">
              <span className="sr-only">Discord</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.191.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="size-8 p-0.5 border border-border rounded-full">
                  <Sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle mode</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Light</DropdownMenuItem>
                <DropdownMenuItem>Dark</DropdownMenuItem>
                <DropdownMenuItem>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="size-8 p-0.5 border border-border rounded-full">
                  <Languages className="size-3" />
                  <span className="sr-only">Switch language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-between lg:hidden">
          <a className="flex items-center gap-2" href="#hero">
            <img alt="Logo" className="size-8 rounded-md" src="https://mksaas.com/logo-dark.png" />
            <span className="text-xl font-semibold">MkSaaS</span>
          </a>
          
          <div className="flex items-center justify-end gap-4">
            <Button
              variant="outline"
              size="icon"
              className="size-8 flex aspect-square h-fit select-none items-center justify-center rounded-md border"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}