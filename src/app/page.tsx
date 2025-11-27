'use client';

import { Button } from "@/components/ui/button"
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

const Page = () => {
  const trpc = useTRPC();

  const { data: users } = useQuery(trpc.getUsers.queryOptions())
  
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <Button>Click me</Button>
      {JSON.stringify(users)}
    </div>
  );
};

export default Page;