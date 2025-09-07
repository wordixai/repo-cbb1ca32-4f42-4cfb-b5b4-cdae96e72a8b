import { Button } from '@/components/ui/button';
import { Twitter } from 'lucide-react';

export function IntroductionSection() {
  return (
    <section id="introduction" className="px-4 py-16">
      <div className="flex flex-col items-center text-center gap-4">
        <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">Introduction</h2>
        <p className="text-balance text-2xl text-foreground">MkSaaS is run by an indie maker</p>
      </div>

      <div className="mt-12 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16">
          <div className="flex items-center gap-8">
            <span className="size-32 p-0.5">
              <img className="rounded-full border-4 border-gray-200" alt="Avatar" src="https://mksaas.com/images/avatars/fox.png" />
            </span>
          </div>

          <div className="flex flex-col gap-12 px-4 md:px-0">
            <p className="text-base text-balance text-gray-700 dark:text-gray-300">
              <span className="font-semibold text-lg">👋 Hey, it's Fox.</span>
              <br /><br />
              I'm the founder of{" "}
              <a href="https://mksaas.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">MkSaaS</a>{" "}
              and{" "}
              <a href="https://mkdirs.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Mkdirs</a>.
              <br /><br />
              The goal of MkSaaS is to save your valuable time, and provide you with everything you need to build your SaaS, so you can focus on your core business, no more coding from scratch.
              <br /><br />
              As an indie maker, I've built this product from the ground up, and every feature is crafted with care. I have served 200+ happy customers of{" "}
              <a href="https://mkdirs.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Mkdirs</a>, and now I'm here to serve more and more customers of MkSaaS.
              <br /><br />
              Thank you for supporting indie products and for being a part of this journey. Feel free to contact me if you have any questions or feedback.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="outline" className="secondary-button h-9 px-4 py-2 rounded-lg gap-2">
                <Twitter className="mr-1 size-4" />
                Follow me on X
              </Button>
              <Button className="primary-button h-9 px-4 py-2 rounded-lg gap-2">
                <span className="text-lg">💬</span>
                Talk with me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}