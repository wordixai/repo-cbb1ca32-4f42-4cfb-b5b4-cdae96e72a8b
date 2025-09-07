import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ReactNode } from 'react';

interface FeatureAccordionProps {
  features: Array<{
    icon: ReactNode;
    title: string;
    description: string;
    defaultOpen?: boolean;
  }>;
}

export function FeatureAccordion({ features }: FeatureAccordionProps) {
  return (
    <Accordion type="single" className="w-full">
      {features.map((feature, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="hover:no-underline focus-visible:ring-[3px]">
            <div className="flex items-center gap-2 text-base">
              {feature.icon}
              {feature.title}
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="pt-0 pb-4 text-muted-foreground">
              <p>{feature.description}</p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}