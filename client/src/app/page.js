"use client";

import LandingIndex from "./Module/Landing-Page/LandingIndex";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LandingIndex />
    </QueryClientProvider>
  );
}
