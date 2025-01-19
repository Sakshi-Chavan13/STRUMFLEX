"use client";

import { useEffect } from "react";
import LandingIndex from "./Module/Landing-Page/LandingIndex";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {

  useEffect(() => {
    // This will ensure the script runs only on the client-side
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-KY3ME7B63F";
    document.head.appendChild(script);
  
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-KY3ME7B63F');
    };
  
    // Cleanup the script after the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <LandingIndex />
    </QueryClientProvider>
  );
}
