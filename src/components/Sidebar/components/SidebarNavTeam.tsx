import { NavLink } from "react-router-dom";
import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type SidebarMenuItem = {
  label: string;
  url: string;
  icon: LucideIcon;
};

type SidebarNavTeamProps = {
  items: SidebarMenuItem[];
};

export function SidebarNavTeam({ items }: SidebarNavTeamProps) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>Team</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.label}>
            <NavLink to={item.url}>
              {({ isActive }) => (
                <SidebarMenuButton isActive={isActive}>
                  {item.icon && <item.icon />}
                  {item.label}
                </SidebarMenuButton>
              )}
            </NavLink>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
