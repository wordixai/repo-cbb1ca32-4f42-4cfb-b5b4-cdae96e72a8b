import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export function FAQSection() {
  const faqs = [
    {
      question: "What do I get exactly?",
      answer: "You get the complete MkSaaS codebase with all features, documentation, and access to our Discord community for support."
    },
    {
      question: "Can I see what I am getting before I pay?",
      answer: "Yes! You can check out our demo website and documentation to see exactly what's included in MkSaaS."
    },
    {
      question: "What are the AI features included?",
      answer: "MkSaaS includes AI image generation, text generation, chatbot integration, and more AI-powered features out of the box."
    },
    {
      question: "How many websites can I build with MkSaaS?",
      answer: "You can build unlimited websites with MkSaaS. There are no restrictions on the number of projects you can create."
    },
    {
      question: "Why should I buy MkSaaS instead of others?",
      answer: "MkSaaS offers the most comprehensive feature set, better documentation, active community support, and lifetime updates."
    },
    {
      question: "How to get technical support?",
      answer: "You can get support through our Discord community, email support, and comprehensive documentation."
    },
    {
      question: "Can I get a refund?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with MkSaaS."
    },
    {
      question: "How can I get access to the Github repositories?",
      answer: "After purchase, you'll receive an invitation to our private GitHub organization with access to all repositories."
    },
    {
      question: "Can't find the question you're looking for?",
      answer: "Feel free to reach out to us on Discord or via email, and we'll be happy to help you with any questions."
    }
  ];

  return (
    <section id="faqs" className="px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="uppercase tracking-wider text-primary font-semibold font-mono">FAQ</h2>
          <p className="text-muted-foreground mt-4 text-balance text-lg">
            For more questions, you can check out the{" "}
            <a className="text-primary underline underline-offset-4" href="/blog/faq">FAQ page</a>
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" className="w-full rounded-2xl border px-6 md:px-8 py-4 shadow-sm" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 border-dashed">
                <AccordionTrigger className="cursor-pointer text-base hover:no-underline focus-visible:ring-[3px]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="text-muted-foreground">{faq.answer}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}