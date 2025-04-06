"use client";

import type * as React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../lib/actions/queries/queryClient";


export default function QueryProvider({ children }: { children: React.ReactNode }) {

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
