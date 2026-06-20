import type { MetaFunction } from "react-router";
import { ProjectsPage } from "@/pages/projects-page";

export const meta: MetaFunction = () => [
  { title: "Projetos — Bizu SaaS" },
  {
    name: "description",
    content: "Cases e projetos desenvolvidos.",
  },
  { property: "og:title", content: "Projetos — Bizu SaaS" },
  { property: "og:type", content: "website" },
];

export default function Projects() {
  return <ProjectsPage />;
}
