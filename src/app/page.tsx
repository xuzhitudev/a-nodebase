"use client";

import { requireAuth } from "@/lib/auth-utils";
import { useTRPC } from "@/trpc/client";
import { caller } from "@/trpc/server";
import { LogoutButton } from "@/app/logout";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Page =  () => {
  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const {data} = useQuery(trpc.getWorkflows.queryOptions());

  const create = useMutation(trpc.createWorkflow.mutationOptions({
    onSuccess: () => {
      toast.success('Workflow created successfully');
    }
  }))



  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center flex-col gap-y-6">
      Proteced Server Component
      <div>{JSON.stringify(data)}</div>
      <Button disabled={create.isPending} onClick={() => create.mutate()}>Create Workflow</Button>
      <LogoutButton />
    </div>
  );
};

export default Page;