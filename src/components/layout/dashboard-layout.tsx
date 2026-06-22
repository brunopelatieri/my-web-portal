import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import {
  DashboardMobileNavFooter,
  DashboardMobileNavHeader,
  DashboardSidebar,
} from "@/components/layout/dashboard-sidebar";
import { DashboardNav } from "@/components/layout/dashboard-nav";
import { DashboardTopbar } from "@/components/layout/dashboard-topbar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { dashboardTitleFromPath } from "@/lib/constants/dashboard-nav";

export function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { pathname } = useLocation();
  const title = dashboardTitleFromPath(pathname);

  function closeMobileNav() {
    setMobileNavOpen(false);
  }

  return (
    <div className="flex h-svh overflow-hidden bg-background">
      <DashboardSidebar collapsed={collapsed} />

      <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
        <SheetContent side="left" className="w-[min(100vw-2rem,18rem)] p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Menu do dashboard</SheetTitle>
            <SheetDescription>Navegação da área autenticada</SheetDescription>
          </SheetHeader>

          <DashboardMobileNavHeader />
          <DashboardNav onNavigate={closeMobileNav} className="min-h-0" />
          <DashboardMobileNavFooter onNavigate={closeMobileNav} />
        </SheetContent>
      </Sheet>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <DashboardTopbar
          sidebarCollapsed={collapsed}
          onToggleSidebar={() => setCollapsed((value) => !value)}
          onOpenMobileNav={() => setMobileNavOpen(true)}
          title={title}
        />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
