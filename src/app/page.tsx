
import { getQueryClient, trpc } from "@/trpc/server";
import { Button } from "@/components/ui/button"
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions())
  
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <Button>Click me</Button>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <Client />
        </Suspense>
      </HydrationBoundary>
    </div>
  );
};

export default Page;