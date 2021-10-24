import { QueryClient } from "react-query";

const ReactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default ReactQueryClient;
