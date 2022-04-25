import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import type { AppProps } from "next/app";

import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { AuthProvider } from "@lib/auth/ui/AuthProvider";
import { DetailProvider } from "@lib/core/data/DetailProvider";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DetailProvider>
          <ChakraProvider>
            <Component {...pageProps} />{" "}
          </ChakraProvider>
        </DetailProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
