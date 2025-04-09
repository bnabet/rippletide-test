import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { SignupForm } from "./components/SignupForm";

import rippletideLogo from "../../assets/logo.svg";

export function Signup() {
  const navigate = useNavigate();

  const handleSignup = (fullName: string) => {
    toast.success(`Welcome, ${fullName}!`, {
      description: "Your account has been created successfully.",
    });

    setTimeout(() => {
      navigate("/overview/today");
    }, 500);
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <img src={rippletideLogo} alt="Rippletide Logo" />
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <SignupForm onSignup={handleSignup} />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-[url('/src/assets/waves.svg')] bg-cover bg-center bg-no-repeat px-16 py-24 text-white lg:block">
        <div className="flex max-w-2xl flex-col gap-4">
          <h1 className="text-6xl leading-tight font-extrabold">
            The smart assistant for ambitious teams
          </h1>
          <p className="text-xl leading-relaxed text-white/70">
            Rippletide helps you prioritize actions, save time, and close deals
            faster with smart AI assistance.
          </p>
        </div>
      </div>
    </div>
  );
}
