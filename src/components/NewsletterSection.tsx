import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would be implemented here
    console.log('Newsletter subscription:', email);
  };

  return (
    <section id="newsletter" className="px-4 py-16 bg-muted/50">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">Newsletter</h2>
          <p className="text-balance text-2xl text-foreground">Join the community</p>
          <p className="text-balance text-lg text-muted-foreground">Subscribe to our newsletter to get the latest news and updates</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full max-w-md mx-auto space-y-4">
          <div className="flex items-center w-full">
            <div className="relative w-full">
              <Label htmlFor="email" className="sr-only">Email</Label>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 rounded-r-none focus:border-primary focus:border-2 focus:border-r-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                required
              />
            </div>
            <Button
              type="submit"
              className="primary-button rounded-l-none size-12"
            >
              <svg className="size-6" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.20308 1.04312C1.00481 0.954998 0.772341 1.0048 0.627577 1.16641C0.482813 1.32802 0.458794 1.56455 0.568117 1.75196L3.92115 7.50002L0.568117 13.2481C0.458794 13.4355 0.482813 13.672 0.627577 13.8336C0.772341 13.9952 1.00481 14.045 1.20308 13.9569L14.7031 7.95693C14.8836 7.87668 15 7.69762 15 7.50002C15 7.30243 14.8836 7.12337 14.7031 7.04312L1.20308 1.04312ZM4.84553 7.10002L2.21234 2.586L13.2689 7.50002L2.21234 12.414L4.84552 7.90002H9C9.22092 7.90002 9.4 7.72094 9.4 7.50002C9.4 7.27911 9.22092 7.10002 9 7.10002H4.84553Z" fill="currentColor"/>
              </svg>
              <span className="sr-only">Subscribe</span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}