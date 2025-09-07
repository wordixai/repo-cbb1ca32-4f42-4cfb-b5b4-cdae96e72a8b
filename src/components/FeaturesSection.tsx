import { Mail, Github, Lock, CircleUser, ShieldCheck, Settings, CircleDollarSign, Webhook, Wallet, Coins, Rocket, DollarSign, UsersRound, FileText, BookText, LayoutDashboard, Crown, Mails, MailCheck, Mailbox, Component, Pyramid, Flame, Slack, Globe, ChartSpline, FileCode, FileCode2, Bot, ServerCrash, Server, Cloud, Image, Bot as BotIcon, Notebook, LibraryBig, SwatchBook, Sparkles, Palette } from 'lucide-react';
import { FeatureAccordion } from './FeatureAccordion';

export function FeaturesSection() {
  const featureSections = [
    {
      title: "Authentication",
      description: "Let your users register and login with email/password, or social providers, and manage their profile.",
      image: "https://mksaas.com/images/home/features/auth-register-dark.png",
      features: [
        {
          icon: <Mail className="size-4" />,
          title: "Email/Password",
          description: "Users can register and login with email/password, and you can set the email verification is required to login or not.",
          defaultOpen: true
        },
        {
          icon: <Github className="size-4" />,
          title: "Social Login",
          description: "Support for multiple social login providers including GitHub, Google, Twitter, and more."
        },
        {
          icon: <Lock className="size-4" />,
          title: "Reset Password",
          description: "Secure password reset functionality with email verification."
        },
        {
          icon: <CircleUser className="size-4" />,
          title: "User Profile",
          description: "Complete user profile management with avatar upload and profile editing."
        },
        {
          icon: <ShieldCheck className="size-4" />,
          title: "Cloudflare Turnstile",
          description: "Built-in bot protection with Cloudflare Turnstile integration."
        }
      ]
    },
    {
      title: "Payments",
      description: "Charge your users with Stripe subscription, and one-time payment, and manage the payments with webhooks.",
      image: "https://mksaas.com/images/home/features/payment-table-dark.png",
      features: [
        {
          icon: <Settings className="size-4" />,
          title: "Pricing Configuration",
          description: "You can configure the pricing table, including the price, name, description, interval, features and limits.",
          defaultOpen: true
        },
        {
          icon: <CircleDollarSign className="size-4" />,
          title: "Subscription and One-Time Payment",
          description: "Support for both subscription and one-time payment models with full Stripe integration."
        },
        {
          icon: <Webhook className="size-4" />,
          title: "Webhooks Integration",
          description: "Complete webhooks handling for payment events and subscription management."
        },
        {
          icon: <Wallet className="size-4" />,
          title: "Billing Management",
          description: "Built-in billing portal for users to manage their subscriptions and payment methods."
        },
        {
          icon: <Coins className="size-4" />,
          title: "Credits System",
          description: "Flexible credits system for usage-based billing and feature limitations."
        }
      ]
    },
    {
      title: "Pages",
      description: "MkSaaS comes with many built-in ready-to-use pages to help you build your SaaS faster and better.",
      image: "https://mksaas.com/images/home/features/more-mksaas-dark.png",
      features: [
        {
          icon: <Rocket className="size-4" />,
          title: "Landing Page",
          description: "MkSaaS comes with a high quality and conversion rate landing page, and you can easily customize it to fit your brand.",
          defaultOpen: true
        },
        {
          icon: <DollarSign className="size-4" />,
          title: "Pricing Page",
          description: "Beautiful and conversion-optimized pricing page with multiple pricing tiers."
        },
        {
          icon: <UsersRound className="size-4" />,
          title: "About Page",
          description: "Professional about page template to showcase your team and company story."
        },
        {
          icon: <Mail className="size-4" />,
          title: "Contact Page",
          description: "Contact form with email integration for customer inquiries."
        },
        {
          icon: <FileText className="size-4" />,
          title: "Legal Pages",
          description: "Complete set of legal pages including privacy policy, terms of service, and more."
        }
      ]
    },
    {
      title: "Blog & Docs",
      description: "MkSaaS comes with beautiful blog and documentation system which are fully customizable and ready to use.",
      image: "https://mksaas.com/images/home/features/marketing-blog-dark.png",
      features: [
        {
          icon: <FileText className="size-4" />,
          title: "Blog",
          description: "MkSaaS has integrated with a MDX-based blog system, supporting the blog list, blog post, blog author, and blog categories.",
          defaultOpen: true
        },
        {
          icon: <BookText className="size-4" />,
          title: "Documentation",
          description: "Complete documentation system built with Fumadocs for beautiful and searchable docs."
        },
        {
          icon: <LayoutDashboard className="size-4" />,
          title: "Custom MDX Components",
          description: "Rich set of custom MDX components for creating engaging content."
        },
        {
          icon: <Crown className="size-4" />,
          title: "Premium Content",
          description: "Paywall functionality for premium content and subscriber-only articles."
        }
      ]
    },
    {
      title: "Email & Newsletter",
      description: "MkSaaS comes with many built-in email templates, waitlist and newsletter system ready to use.",
      image: "https://mksaas.com/images/home/features/newsletter-dark.png",
      features: [
        {
          icon: <Mails className="size-4" />,
          title: "Newsletter",
          description: "MkSaaS has integrated with Resend to help you set up your newsletter, including audiences, broadcasts, and more.",
          defaultOpen: true
        },
        {
          icon: <MailCheck className="size-4" />,
          title: "Emails",
          description: "Complete email system with templates for authentication, notifications, and marketing."
        },
        {
          icon: <Mail className="size-4" />,
          title: "Email Templates",
          description: "Beautiful React email templates for all common use cases."
        },
        {
          icon: <Mailbox className="size-4" />,
          title: "Waitlist",
          description: "Pre-launch waitlist functionality to collect early user interest."
        }
      ]
    },
    {
      title: "Components & Blocks",
      description: "MkSaaS comes with many built-in components and blocks to help you create your pages faster and better.",
      image: "https://mksaas.com/images/home/features/ui-shadcn-dark.png",
      features: [
        {
          icon: <Component className="size-4" />,
          title: "Shadcn UI Components",
          description: "We have included all the components from Shadcn UI, and you can use them to build your pages with AI faster and better.",
          defaultOpen: true
        },
        {
          icon: <Pyramid className="size-4" />,
          title: "Magic UI Components",
          description: "150+ free open source animated components and effects from Magic UI."
        },
        {
          icon: <Flame className="size-4" />,
          title: "Animate UI Components",
          description: "Beautiful animated components to make your interface more engaging."
        },
        {
          icon: <Slack className="size-4" />,
          title: "Tailark Marketing Blocks",
          description: "Responsive, pre-built Shadcn/UI and Tailwindcss blocks for marketing pages."
        }
      ]
    },
    {
      title: "SaaS Features",
      description: "Built-in components and blocks, customizable themes, multiple analytics, SEO optimized, and more.",
      image: "https://mksaas.com/images/home/features/other-i18n-dark.png",
      features: [
        {
          icon: <Globe className="size-4" />,
          title: "Internationalization",
          description: "Reach more customers by making your app multilingual, all pages support i18n, including the email templates and checkout page.",
          defaultOpen: true
        },
        {
          icon: <ChartSpline className="size-4" />,
          title: "Multiple Analytics",
          description: "Support for Google Analytics, Plausible, Umami, and other analytics providers."
        },
        {
          icon: <FileCode className="size-4" />,
          title: "SEO Optimized",
          description: "Built-in SEO optimization with metadata, sitemaps, and structured data."
        },
        {
          icon: <FileCode2 className="size-4" />,
          title: "Cursor and Claude Code rules",
          description: "Pre-configured code rules for AI development tools."
        },
        {
          icon: <Bot className="size-4" />,
          title: "MCP servers",
          description: "Model Context Protocol servers for enhanced AI capabilities."
        }
      ]
    },
    {
      title: "AI Features",
      description: "Built-in AI features, including AI Chat Bot, AI Text Generator, AI Image Generator, and more.",
      image: "https://mksaas.com/images/home/features/ai-image-dark.png",
      features: [
        {
          icon: <Image className="size-4" />,
          title: "AI Image Generator",
          description: "MkSaaS has a built-in AI Image Generator to help you build websites with AI Image Generator.",
          defaultOpen: true
        },
        {
          icon: <FileText className="size-4" />,
          title: "AI Text Generator",
          description: "Powerful AI text generation capabilities for content creation."
        },
        {
          icon: <BotIcon className="size-4" />,
          title: "AI Chat Bot",
          description: "Intelligent chatbot integration for customer support and engagement."
        }
      ]
    },
    {
      title: "Deployment",
      description: "You can deploy MkSaaS on Vercel, Cloudflare Workers, Docker, and any other platform with ease.",
      image: "https://mksaas.com/images/home/features/deployment-vercel-dark.png",
      features: [
        {
          icon: <ServerCrash className="size-4" />,
          title: "Vercel",
          description: "The easiest way to deploy your application is to use Vercel, Vercel has the best developer experience for Next.js applications.",
          defaultOpen: true
        },
        {
          icon: <Server className="size-4" />,
          title: "Docker",
          description: "Docker configuration for containerized deployments."
        },
        {
          icon: <Cloud className="size-4" />,
          title: "Cloudflare Workers",
          description: "Deploy to Cloudflare Workers for global edge computing."
        }
      ]
    },
    {
      title: "Batteries Included",
      description: "Built-in customizable themes, multiple analytics, SEO optimized, and more.",
      image: "https://mksaas.com/images/home/features/other-themes-dark.png",
      features: [
        {
          icon: <Palette className="size-4" />,
          title: "Customizable Theme",
          description: "MkSaaS comes with 5 built-in themes, and you can easily set the default theme and enable the theme switch.",
          defaultOpen: true
        },
        {
          icon: <ChartSpline className="size-4" />,
          title: "Multiple Analytics",
          description: "Support for multiple analytics providers with easy configuration."
        },
        {
          icon: <FileCode className="size-4" />,
          title: "SEO Optimized",
          description: "Built-in SEO optimization for better search engine rankings."
        }
      ]
    },
    {
      title: "More Codebases",
      description: "Not only 1 template, but also 4 codebases of websites built with MkSaaS, and you can directly ship them.",
      image: "https://mksaas.com/images/home/features/more-blog-dark.png",
      features: [
        {
          icon: <Notebook className="size-4" />,
          title: "Blog demo website (ready)",
          description: "You can get access to the codebase of the blog website, which is built with MkSaaS, and you can use it to build your own blog.",
          defaultOpen: true
        },
        {
          icon: <LibraryBig className="size-4" />,
          title: "Directory demo website (ready)",
          description: "Complete directory website codebase for building listing platforms."
        },
        {
          icon: <SwatchBook className="size-4" />,
          title: "AI Outfit SaaS website (ready)",
          description: "AI-powered outfit recommendation SaaS template."
        },
        {
          icon: <Sparkles className="size-4" />,
          title: "AI SaaS website (coming soon)",
          description: "General-purpose AI SaaS template coming soon."
        }
      ]
    }
  ];

  return (
    <section id="features" className="py-16">
      <div className="container max-w-7xl mx-auto space-y-16 px-6 lg:space-y-24">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">Features</h2>
          <p className="text-balance text-2xl text-foreground">What makes MkSaaS different</p>
          <p className="text-balance text-lg text-muted-foreground">MkSaaS comes with everything you need to build your SaaS</p>
        </div>

        {featureSections.map((section, index) => (
          <div key={index} className="grid gap-12 sm:px-12 lg:grid-cols-12 lg:gap-24 lg:px-0">
            <div className="lg:col-span-5 flex flex-col justify-center gap-8 items-start text-left">
              <div className="lg:pr-0 w-full">
                <h3 className="text-3xl font-semibold lg:text-4xl text-primary leading-normal py-1">
                  {section.title}
                </h3>
                <p className="mt-4 text-muted-foreground">{section.description}</p>
              </div>
              <FeatureAccordion features={section.features} />
            </div>

            <div className="bg-background w-full relative flex overflow-hidden rounded-2xl border p-2 lg:h-auto lg:col-span-7">
              <div className="aspect-76/59 bg-background relative w-full rounded-2xl">
                <div className="size-full overflow-hidden rounded-2xl border shadow-md">
                  <img
                    alt={section.title}
                    className="size-full object-cover object-left-top"
                    src={section.image}
                  />
                </div>
              </div>
              
              {/* Animated border gradient */}
              <div className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]">
                <div 
                  className="absolute aspect-square bg-gradient-to-l from-transparent via-green-700 to-transparent dark:via-white/50"
                  style={{
                    width: '200px',
                    offsetPath: 'rect(0px auto auto 0px round 200px)',
                    '--color-from': '#ffaa40',
                    '--color-to': '#9c40ff',
                    offsetDistance: '69.9333%'
                  } as React.CSSProperties}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}