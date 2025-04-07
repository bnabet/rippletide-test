import {
  Headset,
  LayoutPanelLeft,
  LifeBuoy,
  Send,
  UserCog,
  Users,
} from "lucide-react";

export const sidebarItems = {
  workspace: [
    {
      label: "Overview",
      url: "#",
      icon: LayoutPanelLeft,
      isActive: true,
      items: [
        {
          label: "Today's Focus",
          url: "/overview/today",
        },
        {
          label: "Pipeline Summary",
          url: "/overview/pipeline",
        },
        {
          label: "AI Recommendations",
          url: "/overview/ai",
        },
      ],
    },
    {
      label: "Leads",
      url: "#",
      icon: Headset,
      items: [
        {
          label: "My Leads",
          url: "/leads/my-leads",
        },
        {
          label: "Assigned Leads",
          url: "/leads/assigned-leads",
        },
        {
          label: "Archived",
          url: "/leads/archived",
        },
      ],
    },
  ],
  team: [
    {
      label: "Members",
      url: "/team/members",
      icon: Users,
    },
    {
      label: "Roles & Access",
      url: "/team/roles",
      icon: UserCog,
    },
  ],
  navSecondary: [
    {
      label: "Support",
      url: "/support",
      icon: LifeBuoy,
    },
    {
      label: "Feedback",
      url: "/feedback",
      icon: Send,
    },
  ],
};
