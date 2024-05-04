import Root from "./src/navigation/Root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

async function enableMocking() {
  if (!__DEV__) {
    return;
  }

  await import("./msw.polyfills");
  const { server } = await import("./src/mocks/server");
  server.listen({ onUnhandledRequest: "bypass" });
}

export default function App() {
  useEffect(() => {
    enableMocking().then(() => console.log("mocking server on"));
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Root></Root>
    </QueryClientProvider>
  );
}
