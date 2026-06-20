import { Link } from "react-router";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 px-8 py-16 shadow-sm">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Eleve o padrão da sua comunicação com clientes.
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            Junte-se a profissionais que pararam de responder "qual o status?" e
            começaram a entregar uma experiência premium — automaticamente.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/login">
              <Button size="lg" className="min-w-48 text-base font-semibold">
                Criar conta grátis
              </Button>
            </Link>
            <Link to="#como-funciona">
              <Button variant="outline" size="lg" className="min-w-48 text-base">
                Ver como funciona
              </Button>
            </Link>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Sem cartão de crédito · Configuração em 5 minutos · 30 dias de
            garantia
          </p>
        </div>
      </div>
    </section>
  );
}
