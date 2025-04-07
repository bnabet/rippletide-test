import { createBrowserRouter, Navigate } from "react-router-dom";

import { LoginPage } from "@/pages/Login/LoginPage";
import { ProtectedLayout } from "@/layouts/ProtectedLayout";
import { TodaysFocus } from "@/pages/Overview/TodaysFocus/TodaysFocus";
import { PipelineSummary } from "@/pages/Overview/PipelineSummary/PipelineSummary";
import { AIRecommendations } from "@/pages/Overview/AIRecommendations/AIRecommendations";
import { MyLeads } from "@/pages/Leads/MyLeads/MyLeads";
import { AssignedLeads } from "@/pages/Leads/AssignedLeads/AssignedLeads";
import { Archived } from "@/pages/Leads/Archived/Archived";
import { Members } from "@/pages/Members/Members";
import { RolesAndAccess } from "@/pages/RolesAndAccess/RolesAndAccess";
import { Support } from "@/pages/Support/Support";
import { Feedback } from "@/pages/Feedback/Feedback";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage onLogin={() => {}} />,
  },
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/overview/today" />,
      },
      {
        path: "overview",
        children: [
          { path: "today", element: <TodaysFocus /> },
          { path: "pipeline", element: <PipelineSummary /> },
          { path: "ai", element: <AIRecommendations /> },
        ],
      },
      {
        path: "leads",
        children: [
          { path: "my-leads", element: <MyLeads /> },
          { path: "assigned-leads", element: <AssignedLeads /> },
          { path: "archived", element: <Archived /> },
        ],
      },
      {
        path: "team",
        children: [
          { path: "members", element: <Members /> },
          { path: "roles", element: <RolesAndAccess /> },
        ],
      },
      { path: "support", element: <Support /> },
      { path: "feedback", element: <Feedback /> },
    ],
  },
]);
