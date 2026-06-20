import type { MetaFunction } from "react-router";
import { ContactPage } from "@/pages/contact-page";

export const meta: MetaFunction = () => [
  { title: "Contato — Bizu SaaS" },
  {
    name: "description",
    content: "Entre em contato para iniciar seu próximo projeto.",
  },
  { property: "og:title", content: "Contato — Bizu SaaS" },
  { property: "og:type", content: "website" },
];

export default function Contact() {
  return <ContactPage />;
}
