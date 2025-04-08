import { AlertCircle, RefreshCw, ArrowLeft, MessageSquare } from "lucide-react";
import { Button } from "../ui/button";

type PageErrorProps = {
  error?: Error;
  resetError?: () => void;
};

export function PageError({ error, resetError }: PageErrorProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="mx-auto w-full max-w-2xl p-8">
        <div className="overflow-hidden rounded-md border border-gray-100 bg-white shadow-sm">
          <div className="p-8">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 rounded-md bg-red-50 p-3">
                <AlertCircle className="size-8 text-red-500" />
              </div>
              <div className="flex-1 space-y-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  Something went wrong
                </h1>
                <p className="text-gray-600">
                  We encountered an unexpected error. Our team has been notified
                  and is working on a fix.
                </p>
              </div>
            </div>

            {error && (
              <div className="mt-6 rounded-md border border-gray-100 bg-gray-50 p-4">
                <p className="font-mono text-sm text-gray-600">
                  {error.message}
                </p>
              </div>
            )}

            <div className="mt-8 flex w-full justify-end gap-4">
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/")}
              >
                <ArrowLeft className="size-4" />
                <span>Go back</span>
              </Button>

              {resetError && (
                <Button onClick={resetError}>
                  <RefreshCw className="size-4" />
                  <span>Try again</span>
                </Button>
              )}
            </div>
          </div>

          <div className="border-t border-gray-100 bg-gray-50 px-8 py-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Need immediate assistance?
              </p>
              <button className="text-primary hover:text-primary-dark flex items-center gap-2 text-sm font-medium">
                <MessageSquare className="size-4" />
                <span>Contact Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
