import { useState } from "react";

import { AppLayout } from "./layouts/AppLayout";
import LoginPage from "./pages/Login/LoginPage";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? (
    <AppLayout>
      <div>{/* TODO */}</div>
    </AppLayout>
  ) : (
    <LoginPage onLogin={() => setIsLoggedIn(true)} />
  );
}

export default App;
