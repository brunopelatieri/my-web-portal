import { useState } from "react";

const faqs = [
  {
    question: "Meu cliente precisa instalar alguma coisa?",
    answer:
      "Não. O portal é 100% web. Basta o cliente receber o convite por e-mail, criar uma senha e acessar pelo navegador. Funciona em qualquer dispositivo — celular, tablet ou desktop.",
  },
  {
    question: "Posso usar meu próprio domínio?",
    answer:
      "Sim, no plano Pro e Agência você pode conectar um domínio personalizado (ex: portal.suaagencia.com.br). Basta configurar um registro CNAME no seu DNS. O processo leva menos de 5 minutos.",
  },
  {
    question: "O que acontece com meus dados se eu cancelar?",
    answer:
      "Você tem 30 dias após o cancelamento para exportar todos os seus dados (projetos, arquivos, histórico). Após esse período, os dados são removidos permanentemente. Nunca vendemos ou compartilhamos dados com terceiros.",
  },
  {
    question: "Posso mudar de plano a qualquer momento?",
    answer:
      "Sim. Upgrade imediato com cobrança proporcional. Downgrade ao final do período atual. Sem contratos de fidelidade, sem taxas de cancelamento.",
  },
  {
    question: "Tem garantia de reembolso?",
    answer:
      "Sim. 30 dias de garantia incondicional. Se por qualquer motivo o portal não atender suas expectativas, devolvemos 100% do valor pago — sem perguntas, sem burocracia.",
  },
  {
    question: "O portal funciona para qualquer tipo de serviço?",
    answer:
      "Sim. Desenvolvimento web, design gráfico, marketing digital, consultoria, arquitetura — qualquer serviço que tenha etapas e entregas se beneficia de um portal de acompanhamento.",
  },
];

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground">{question}</span>
        <span
          aria-hidden="true"
          className={`shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-5 text-sm leading-relaxed text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="border-b border-border/50 bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            FAQ
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground">
            Não encontrou o que precisava?{" "}
            <a
              href="mailto:contato@meuportal.com.br"
              className="text-primary underline-offset-4 hover:underline"
            >
              Fale conosco
            </a>
            .
          </p>
        </div>

        <div className="rounded-xl border border-border/60 bg-card px-6 shadow-sm">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
