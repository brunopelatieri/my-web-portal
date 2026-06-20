const features = [
  {
    icon: "📊",
    title: "Dashboard em tempo real",
    body: "Seus clientes visualizam o progresso de cada projeto assim que você faz uma atualização. Sem e-mail, sem WhatsApp.",
  },
  {
    icon: "🏷️",
    title: "Status por etapa",
    body: "Divida cada projeto em etapas e marque o avanço. O cliente sabe exatamente onde está e o que vem a seguir.",
  },
  {
    icon: "📁",
    title: "Repositório de arquivos",
    body: "Compartilhe assets, contratos e entregas em um lugar só. Organizado por projeto, acessível pelo cliente.",
  },
  {
    icon: "🔔",
    title: "Notificações automáticas",
    body: "O cliente recebe um aviso quando você atualiza o status ou adiciona um arquivo. Nenhuma mensagem manual.",
  },
  {
    icon: "🔐",
    title: "Portal exclusivo por cliente",
    body: "Cada cliente acessa apenas seus próprios projetos. Isolamento total de dados e privacidade garantida.",
  },
  {
    icon: "📋",
    title: "Histórico completo",
    body: "Todas as atualizações, comentários e entregas ficam registrados com data e hora. Rastreabilidade total.",
  },
];

export function FeaturesSection() {
  return (
    <section
      id="funcionalidades"
      className="border-b border-border/50 bg-muted/30 py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Funcionalidades
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Tudo que você precisa para impressionar seus clientes
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Ferramentas pensadas para freelancers e pequenos estúdios que querem
            entregar uma experiência premium sem complexidade.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-xl border border-border/60 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="mb-4 block text-3xl">{f.icon}</span>
              <h3 className="mb-2 font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
