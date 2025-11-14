import React from "react";

interface ErrorDetailsProps {
  error: Error & { digest?: string };
}

export const ErrorDetails: React.FC<ErrorDetailsProps> = ({ error }) => {
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  return (
    <details className="mt-4 text-left">
      <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
        Error details
      </summary>
      <pre className="mt-2 text-xs bg-muted p-2 rounded overflow-auto">
        {error.message}
        {error.stack && (
          <div className="mt-2 text-muted-foreground">
            {error.stack}
          </div>
        )}
        {error.digest && (
          <div className="mt-2 text-muted-foreground">
            Digest: {error.digest}
          </div>
        )}
      </pre>
    </details>
  );
};