import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "O diploma da FASUL EAD tem validade nacional?",
      answer:
        "Sim. A FASUL possui nota 5 no MEC; o diploma é registrado e válido em todo o Brasil, tendo o mesmo valor de um diploma presencial.",
    },
    {
      question: "Quando recebo os certificados semestrais?",
      answer:
        "Ao final de cada semestre você pode solicitar o certificado intermediário para incluir no seu currículo. Isso permite que você comece a usar sua formação no mercado de trabalho antes mesmo de concluir o curso.",
    },
    {
      question: "Os cursos EAD têm a mesma qualidade que os presenciais?",
      answer:
        "Sim! A FASUL possui nota 5 no MEC, a nota máxima de qualidade. Nossos cursos EAD seguem as mesmas diretrizes e exigências dos cursos presenciais, com professores qualificados e material didático de excelência.",
    },
    {
      question: "Como funcionam as Pós-Graduações?",
      answer:
        "Ao concluir a sua graduação, você ganha 2 Pós-Graduações gratuitas para dar continuidade nos seus estudos e na sua carreira",
    },
  ];

  return (
    <section id="faq" className="relative overflow-hidden">
      {/* SVG Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-16 md:h-24 rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-primary"
          />
        </svg>
      </div>

      <div className="py-14 md:py-20" style={{ background: 'linear-gradient(to bottom right, #192F45, #0066cc)' }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
            Perguntas Frequentes sobre a Graduação EAD na FASUL
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-white hover:text-white/80">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* JSON-LD Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer,
                  },
                })),
              }),
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
