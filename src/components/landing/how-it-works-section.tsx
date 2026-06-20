const steps = [
  {
    number: "01",
    verb: "Cadastre-se",
    title: "Crie sua conta em minutos",
    body: "Configure seu portal com nome, logo e domínio personalizado. Sem instalar nada — tudo na nuvem.",
  },
  {
    number: "02",
    verb: "Configure",
    title: "Adicione projetos e clientes",
    body: "Crie projetos, defina as etapas e convide seus clientes por e-mail. Eles recebem acesso imediato ao portal deles.",
  },
  {
    number: "03",
    verb: "Acompanhe",
    title: "Mantenha todos atualizados",
    body: "Atualize o progresso quando quiser. Seus clientes são notificados automaticamente e veem tudo em tempo real.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="como-funciona"
      className="border-b border-border/50 bg-background py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Como funciona
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simples para você. Impressionante para o cliente.
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Três passos para transformar a forma como você se comunica com seus
            clientes.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-3">
          {/* Connecting line (desktop) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
          />

          {steps.map((step) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary/30 bg-primary/10 shadow-sm">
                <span className="text-xl font-bold text-primary">
                  {step.number}
                </span>
              </div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
                {step.verb}
              </p>
              <h3 className="mb-3 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
