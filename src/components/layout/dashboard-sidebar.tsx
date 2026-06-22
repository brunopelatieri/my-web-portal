import { Link } from "react-router";
import { SiteLogo } from "@/components/layout/site-logo";
import { DashboardNav } from "@/components/layout/dashboard-nav";
import { DashboardUserMenu } from "@/components/layout/dashboard-user-menu";
import { siteConfig } from "@/lib/constants/navigation";
import { useAuth } from "@/providers/auth-provider";
import { cn } from "@/lib/utils";

type SidebarProps = {
  collapsed?: boolean;
  className?: string;
};

export function DashboardSidebar({ collapsed = false, className }: SidebarProps) {
  const { user, signOut } = useAuth();

  return (
    <aside
      className={cn(
        "hidden h-full flex-col border-r border-border bg-card/50 backdrop-blur-sm transition-[width] duration-200 lg:flex",
        collapsed ? "w-[4.5rem]" : "w-60",
        className,
      )}
    >
      <div className="flex h-16 items-center border-b border-border px-4">
        {collapsed ? (
          <img
            src={siteConfig.logo}
            alt={siteConfig.name}
            className="mx-auto h-7 w-auto object-contain"
          />
        ) : (
          <SiteLogo size="sm" asLink={false} />
        )}
      </div>

      <DashboardNav collapsed={collapsed} />

      <div className="border-t border-border p-3">
        <DashboardUserMenu
          user={user}
          collapsed={collapsed}
          onSignOut={() => void signOut()}
        />
      </div>
    </aside>
  );
}

export function DashboardMobileNavHeader() {
  return (
    <div className="border-b border-border px-4 py-4">
      <SiteLogo size="sm" asLink={false} />
    </div>
  );
}

export function DashboardMobileNavFooter({
  onNavigate,
}: {
  onNavigate?: () => void;
}) {
  const { user, signOut } = useAuth();

  return (
    <div className="border-t border-border p-4">
      <DashboardUserMenu
        user={user}
        collapsed={false}
        onSignOut={() => {
          onNavigate?.();
          void signOut();
        }}
      />
      <Link
        to="/"
        onClick={onNavigate}
        className="mt-3 block text-center text-xs text-muted-foreground transition hover:text-foreground"
      >
        ← Site público
      </Link>
    </div>
  );
}
