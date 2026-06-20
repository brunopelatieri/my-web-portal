import type { MetaFunction } from "react-router";
import { HomePage } from "@/pages/home-page";
import { siteConfig } from "@/lib/constants/navigation";

export const meta: MetaFunction = () => [
  { title: "Bizu SaaS — Acompanhe seus projetos em tempo real" },
  {
    name: "description",
    content:
      "Portal dedicado para seus clientes acompanharem o progresso dos serviços em tempo real, com transparência total.",
  },
  {
    property: "og:title",
    content: "Bizu SaaS — Acompanhe seus projetos em tempo real",
  },
  {
    property: "og:description",
    content:
      "Portal dedicado para seus clientes acompanharem o progresso dos serviços em tempo real.",
  },
  { property: "og:type", content: "website" },
  { property: "og:url", content: siteConfig.url },
];

export default function Home() {
  return <HomePage />;
}
