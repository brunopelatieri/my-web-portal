import { Link } from "react-router";
import { Menu, PanelLeftClose } from "lucide-react";
import { DashboardUserMenu } from "@/components/layout/dashboard-user-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/providers/auth-provider";
import { cn } from "@/lib/utils";

type TopbarProps = {
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  onOpenMobileNav?: () => void;
  title?: string;
  className?: string;
};

export function DashboardTopbar({
  sidebarCollapsed,
  onToggleSidebar,
  onOpenMobileNav,
  title = "Dashboard",
  className,
}: TopbarProps) {
  const { user, signOut } = useAuth();

  return (
    <header
      className={cn(
        "flex h-16 shrink-0 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenMobileNav}
          aria-label="Abrir menu"
          className="h-8 w-8 lg:hidden"
        >
          <Menu className="size-4" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label={sidebarCollapsed ? "Expandir menu" : "Recolher menu"}
          className="hidden h-8 w-8 lg:inline-flex"
        >
          {sidebarCollapsed ? (
            <Menu className="size-4" />
          ) : (
            <PanelLeftClose className="size-4" />
          )}
        </Button>

        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-foreground">{title}</p>
          <p className="hidden text-xs text-muted-foreground sm:block">
            Área autenticada
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="hidden text-xs text-muted-foreground transition hover:text-foreground md:block"
        >
          Site público
        </Link>

        <ThemeToggle />

        <div className="hidden lg:block">
          <DashboardUserMenu
            user={user}
            collapsed
            onSignOut={() => void signOut()}
          />
        </div>
      </div>
    </header>
  );
}
