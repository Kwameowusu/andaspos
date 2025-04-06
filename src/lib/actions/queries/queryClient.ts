import { QueryCache, QueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      // if (query.state.data !== undefined) {
      toast.error(`Something went wrong: ${error.message}`);
      // }
    },
  }),
});
