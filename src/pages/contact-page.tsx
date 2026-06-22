import { ContactForm } from "@/components/contact/contact-form";
import { SocialIcon } from "@/components/icons/social-icons";
import { PageHero } from "@/components/layout/page-hero";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  contactChannelValues,
  contactChannels,
} from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

export function ContactPage() {
  return (
    <>
      <PageHero
        title="Contato"
        description="Vamos conversar sobre seu próximo projeto de SaaS, automação com IA ou arquitetura full-stack."
      />
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <ContactForm />
          <Card>
            <CardHeader>
              <CardTitle>Canais diretos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                {contactChannels.map((channel) => (
                  <li
                    key={channel.label}
                    className="flex items-center justify-between gap-4"
                  >
                    <span className="flex min-w-0 items-center gap-2 text-muted-foreground">
                      <SocialIcon
                        platform={channel.platform}
                        className="size-4 shrink-0"
                      />
                      {channel.label}
                    </span>
                    <a
                      href={channel.href}
                      {...(channel.href.startsWith("mailto:")
                        ? {}
                        : { target: "_blank", rel: "noreferrer noopener" })}
                      className={cn(
                        "flex min-w-0 items-center gap-2 truncate font-medium text-primary",
                        "transition-colors duration-200 hover:text-primary/80",
                      )}
                    >
                      {contactChannelValues[channel.label]}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
