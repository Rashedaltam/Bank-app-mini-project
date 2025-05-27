import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { AuthContext } from "@/Context/Authcontext";
import React, { useEffect, useState } from "react";
import { getToken } from "@/api/storage";
// This is the root layout for the banking app, which sets up the authentication context and query client.
// It provides the context to the entire app, allowing components to access authentication state and react-query functionalities.

export default function RootLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const queryClient = new QueryClient();

  

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        <Stack></Stack>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}
