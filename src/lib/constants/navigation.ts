export const siteConfig = {
  name: "Bizu SaaS",
  description: "Portal pessoal e profissional",
  locale: "pt-BR",
  url: "https://bizu.bru.ia.br",
  links: {
    demo: "https://bizu.bru.ia.br",
    github: "https://github.com/brunopelatieri/bizu-saas",
    linkedin: "https://linkedin.com/in/[A-DEFINIR]",
  },
} as const;

export const navItems = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
] as const;

export type NavItem = (typeof navItems)[number];
