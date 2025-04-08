import * as React from "react";

import {
  Sidebar as SidebarRoot,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import { SidebarNavWorkspace } from "./components/SidebarNavWorkspace";
import { SidebarNavTeam } from "./components/SidebarNavTeam";
import { SidebarNavSecondary } from "./components/SidebarNavSecondary";

import { sidebarItems } from "./sidebarItems";

import rippletideLogo from "../../assets/logo.svg";
import { SidebarNavUser } from "./components/SidebarNavUser";

export function Sidebar({
  ...props
}: React.ComponentProps<typeof SidebarRoot>) {
  return (
    <SidebarRoot
      className="top-[var(--header-height)] !h-[calc(100svh-var(--header-height))]"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <img src={rippletideLogo} alt="Rippletide Logo" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarNavWorkspace items={sidebarItems.workspace} />
        <SidebarNavTeam items={sidebarItems.team} />
        <SidebarNavSecondary
          items={sidebarItems.navSecondary}
          className="mt-auto"
        />
      </SidebarContent>
      <SidebarFooter>
        <SidebarNavUser />
      </SidebarFooter>
    </SidebarRoot>
  );
}
