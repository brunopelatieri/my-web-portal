const testimonials = [
  {
    quote:
      "Antes eu passava horas respondendo 'qual o status do meu site?' Agora meus clientes acompanham tudo sozinhos. Minha produtividade dobrou.",
    name: "Ana Carvalho",
    role: "Designer UX",
    company: "Freelancer",
    initials: "AC",
  },
  {
    quote:
      "O portal passou a imagem de que somos uma empresa muito mais profissional. Clientes novos mencionam isso antes mesmo de fechar contrato.",
    name: "Rafael Mendes",
    role: "CTO",
    company: "Agência Pixel",
    initials: "RM",
  },
  {
    quote:
      "Configurei em menos de 10 minutos e já comecei a convidar meus clientes. A interface é limpa, intuitiva e os clientes adoraram.",
    name: "Juliana Torres",
    role: "Dev Full Stack",
    company: "Studio JT",
    initials: "JT",
  },
];

function StarRating() {
  return (
    <div className="mb-4 flex gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-yellow-500"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="border-b border-border/50 bg-muted/30 py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Depoimentos
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Quem usa, não volta atrás
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Profissionais que transformaram a relação com seus clientes usando o
            portal.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <StarRating />
              <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-foreground">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.role} · {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
