import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { TechStackSection } from '@/components/TechStackSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { DiscordSection } from '@/components/DiscordSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { MarqueeSection } from '@/components/MarqueeSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { StatsSection } from '@/components/StatsSection';
import { CTASection } from '@/components/CTASection';
import { IntroductionSection } from '@/components/IntroductionSection';
import { ShowcaseSection } from '@/components/ShowcaseSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <div className="flex flex-col">
          <HeroSection />
          <TechStackSection />
          <ProblemSection />
          <SolutionSection />
          <DiscordSection />
          <FeaturesSection />
          <MarqueeSection />
          <PricingSection />
          <FAQSection />
          <StatsSection />
          <DiscordSection />
          <CTASection />
          <IntroductionSection />
          <ShowcaseSection />
          <NewsletterSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;