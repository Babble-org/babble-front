import Root from "./src/navigation/Root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Root></Root>
    </QueryClientProvider>
  );
}
