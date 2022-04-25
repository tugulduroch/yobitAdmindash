import "../styles/globals.css";
// import "devextreme/dist/css/dx.light.css";

import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { AuthProvider } from "@lib/auth/ui/AuthProvider";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className="dx-viewport">
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
