"use client";

import { QueryClient, QueryClientProvider } from "react-query";

import { TReactQueryProviderProps } from "./types";

const queryClient = new QueryClient();

const ReactQueryProvider = ({ children }: TReactQueryProviderProps) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
