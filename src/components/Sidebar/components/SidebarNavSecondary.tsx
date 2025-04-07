import { NavLink } from "react-router-dom";
import { type LucideIcon } from "lucide-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

type SidebarMenuItem = {
  label: string;
  url: string;
  icon: LucideIcon;
};

type SidebarNavSecondaryProps = {
  items: SidebarMenuItem[];
} & React.ComponentProps<typeof SidebarGroup>;

export function SidebarNavSecondary({
  items,
  ...props
}: SidebarNavSecondaryProps) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
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
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
