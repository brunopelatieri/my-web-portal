const painPoints = [
  {
    icon: "💬",
    title: "Clientes perguntando o tempo todo",
    body: "\"Qual o status do projeto?\" — a mensagem mais repetida de qualquer dev freelancer. Tempo perdido em atualização manual.",
  },
  {
    icon: "📂",
    title: "Arquivos espalhados por e-mail",
    body: "Briefings no WhatsApp, contratos no e-mail, assets no Drive. Sem um lugar central, o caos é inevitável.",
  },
  {
    icon: "🔍",
    title: "Falta de visibilidade para o cliente",
    body: "O cliente não sabe se o projeto está avançando. Sem visibilidade, a confiança diminui — e o relacionamento sofre.",
  },
];

export function AboutSection() {
  return (
    <section className="border-b border-border/50 bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* Pain points */}
        <div className="mb-20">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            O problema
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Você já passou por isso?
          </h2>
          <p className="mb-12 max-w-2xl text-muted-foreground">
            A maioria dos desenvolvedores enfrenta os mesmos gargalos de
            comunicação. Eles custam tempo, confiança e contratos.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((p) => (
              <div
                key={p.title}
                className="rounded-xl border border-border/60 bg-card p-6 shadow-sm"
              >
                <span className="mb-4 block text-3xl">{p.icon}</span>
                <h3 className="mb-2 font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution bridge */}
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            A solução
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Há uma forma melhor.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            O <strong className="text-foreground">Bizu SaaS</strong> é o
            elo entre você e seus clientes. Um espaço onde cada atualização de
            projeto se transforma em confiança, e cada entrega reforça seu
            profissionalismo — automaticamente.
          </p>
        </div>
      </div>
    </section>
  );
}
