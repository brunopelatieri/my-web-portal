import { NavLink } from "react-router";
import { navItems } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils";

type SiteNavLinksProps = {
  variant?: "inline" | "menu";
  onNavigate?: () => void;
  className?: string;
};

export function SiteNavLinks({
  variant = "inline",
  onNavigate,
  className,
}: SiteNavLinksProps) {
  const isMenu = variant === "menu";

  return (
    <nav
      aria-label="Principal"
      className={cn(
        isMenu ? "flex flex-col gap-1 overflow-y-auto p-3" : "flex items-center gap-6",
        className,
      )}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end={item.href === "/"}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "text-sm transition-colors",
              isMenu
                ? cn(
                    "rounded-lg px-3 py-2 font-medium",
                    isActive
                      ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_oklch(var(--primary)/0.15)]"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )
                : cn(
                    "shrink-0",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  ),
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
