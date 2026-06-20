import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    monthly: "Grátis",
    annual: "Grátis",
    description: "Para começar a impressionar seus primeiros clientes.",
    features: [
      "Até 2 clientes ativos",
      "Até 3 projetos",
      "5 GB de armazenamento",
      "Atualizações de status",
      "Notificações por e-mail",
    ],
    cta: "Começar grátis",
    highlight: false,
  },
  {
    name: "Pro",
    monthly: "R$ 49",
    annual: "R$ 39",
    description: "Para freelancers e estúdios em crescimento.",
    features: [
      "Clientes ilimitados",
      "Projetos ilimitados",
      "50 GB de armazenamento",
      "Portal com domínio próprio",
      "Histórico completo de atividades",
      "Suporte prioritário",
    ],
    cta: "Assinar Pro",
    highlight: true,
    badge: "Mais popular",
  },
  {
    name: "Agência",
    monthly: "R$ 149",
    annual: "R$ 119",
    description: "Para equipes e agências com múltiplos usuários.",
    features: [
      "Tudo do Pro",
      "Até 10 membros de equipe",
      "200 GB de armazenamento",
      "Relatórios avançados",
      "API access",
      "Onboarding dedicado",
    ],
    cta: "Falar com a equipe",
    highlight: false,
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="precos" className="border-b border-border/50 bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Planos
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simples e transparente
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Comece grátis. Escale quando precisar. Sem surpresas na fatura.
          </p>

          {/* Billing toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border/60 bg-muted/50 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${!annual ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}
            >
              Mensal
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium transition-all ${annual ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}
            >
              Anual
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                −20%
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-xl border p-6 shadow-sm transition-shadow hover:shadow-md ${
                plan.highlight
                  ? "border-primary bg-primary/5 shadow-md"
                  : "border-border/60 bg-card"
              }`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {plan.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="mb-1 text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {annual ? plan.annual : plan.monthly}
                  </span>
                  {plan.monthly !== "Grátis" && (
                    <span className="mb-1 text-sm text-muted-foreground">
                      /mês
                    </span>
                  )}
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-4 w-4 shrink-0 text-primary"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>

              <Link to="/login">
                <Button
                  className="w-full"
                  variant={plan.highlight ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Todos os planos incluem SSL, backups automáticos e suporte via e-mail.
          <br />
          30 dias de garantia — reembolso sem perguntas.
        </p>
      </div>
    </section>
  );
}
