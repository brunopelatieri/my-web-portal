import type { MetaFunction } from "react-router";
import { AboutPage } from "@/pages/about-page";

export const meta: MetaFunction = () => [
  { title: "Sobre — Bizu SaaS" },
  {
    name: "description",
    content: "Conheça quem está por trás do Bizu SaaS e como trabalhamos.",
  },
  { property: "og:title", content: "Sobre — Bizu SaaS" },
  { property: "og:type", content: "website" },
];

export default function About() {
  return <AboutPage />;
}
