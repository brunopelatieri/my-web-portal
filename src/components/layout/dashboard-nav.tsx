import { NavLink } from "react-router";
import {
  dashboardBottomNav,
  dashboardMainNav,
  type DashboardNavItem,
} from "@/lib/constants/dashboard-nav";
import { cn } from "@/lib/utils";

type DashboardNavProps = {
  collapsed?: boolean;
  onNavigate?: () => void;
  className?: string;
};

function NavItem({
  item,
  collapsed,
  onNavigate,
}: {
  item: DashboardNavItem;
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.href}
      end={item.end}
      onClick={onNavigate}
      className={({ isActive }) =>
        cn(
          "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-primary/10 text-primary shadow-[inset_0_0_0_1px_oklch(var(--primary)/0.15)]"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )
      }
    >
      <Icon className="size-4 shrink-0" />
      {!collapsed ? <span className="truncate">{item.label}</span> : null}
    </NavLink>
  );
}

export function DashboardNav({
  collapsed = false,
  onNavigate,
  className,
}: DashboardNavProps) {
  return (
    <div className={cn("flex flex-1 flex-col", className)}>
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {dashboardMainNav.map((item) => (
          <NavItem
            key={item.href}
            item={item}
            collapsed={collapsed}
            onNavigate={onNavigate}
          />
        ))}
      </nav>

      <div className="space-y-1 border-t border-border p-3">
        {dashboardBottomNav.map((item) => (
          <NavItem
            key={item.href}
            item={item}
            collapsed={collapsed}
            onNavigate={onNavigate}
          />
        ))}
      </div>
    </div>
  );
}
