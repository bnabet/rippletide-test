import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

import { BadgeCheck, Bell, ChevronsUpDown, LogOut } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export function SidebarNavUser() {
  const { isMobile } = useSidebar();
  const [userLoaded, setUserLoaded] = useState(false);
  const [user, setUser] = useState<{
    name: string;
    email: string;
    user_metadata: { avatar_url: string };
  }>({
    name: "",
    email: "",
    user_metadata: {
      avatar_url: "",
    },
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser();

      if (data?.user) {
        const { email, user_metadata } = data.user;

        setUser({
          name: user_metadata?.full_name || "User",
          email: email || "",
          user_metadata: {
            avatar_url: user_metadata?.avatar_url || "",
          },
        });

        setUserLoaded(true);
      }
    };

    fetchUser();
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              {userLoaded && (
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src={
                      user.user_metadata.avatar_url ||
                      `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(user.name || "User")}`
                    }
                    alt={user.name}
                  />
                  <AvatarFallback className="rounded-lg">
                    {user.name.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              )}
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{user.name}</span>
                <span className="truncate text-xs">{user.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem disabled>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem disabled>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
