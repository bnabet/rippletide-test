import { Navigate, Outlet } from "react-router-dom";

import { AppLayout } from "./AppLayout";

export const ProtectedLayout = () => {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/login" />
  );
};
