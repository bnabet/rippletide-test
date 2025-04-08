import { Sparkles, Zap } from "lucide-react";

export function PageLoader({
  title = "Loading",
  description = "Please wait while we load the data",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="mx-auto w-full max-w-lg p-8">
        <div className="space-y-8 text-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute top-0 -right-6 animate-bounce delay-75">
              <Sparkles className="text-accent h-6 w-6" />
            </div>
            <div className="absolute bottom-0 -left-4 animate-bounce delay-150">
              <Zap className="text-accent h-6 w-6" />
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="text-gray-500">{description}...</p>
          </div>

          <div className="mx-auto h-2 w-64 overflow-hidden rounded-full bg-gray-200">
            <div className="bg-primary animate-progress h-full w-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
