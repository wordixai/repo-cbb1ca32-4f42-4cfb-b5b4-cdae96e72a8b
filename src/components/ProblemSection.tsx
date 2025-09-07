import { Palette, CreditCard, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ProblemSection() {
  const problems = [
    {
      icon: <Palette className="w-6 h-6 text-amber-500" />,
      title: "UI Development Challenges",
      description: "Developers struggle to build modern UI and responsive designs from scratch without ready-to-use components."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-green-500" />,
      title: "Payment Integration Complexity",
      description: "Integrating secure payment systems requires complex implementation of subscriptions, and webhooks."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-violet-500" />,
      title: "Essential Features Overhead",
      description: "Implementing core SaaS features like auth, i18n, blog, docs, newsletter, SEO, and theming are tedious and time-consuming."
    }
  ];

  return (
    <section id="problem" className="py-16">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">Problem</h2>
          <p className="text-balance text-2xl text-foreground">Build SaaS from scratch is a hassle</p>
          <p className="text-balance text-lg text-muted-foreground">Don't waste time on designing a landing page or Stripe subscriptions</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-500">
          {problems.map((problem, index) => (
            <div key={index}>
              <Card className="feature-card flex flex-col gap-6 rounded-xl border py-6 border-none shadow-none transition-colors duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      {problem.icon}
                    </div>
                    <h3 className="font-semibold">{problem.title}</h3>
                  </div>
                  <p className="mt-6 text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}