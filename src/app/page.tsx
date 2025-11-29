import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "@/app/logout";

const Page = async () => {

  await requireAuth();
  const data = await caller.getUsers();

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center flex-col gap-y-6">
      Proteced Server Component
      <div>{JSON.stringify(data)}</div>
      <LogoutButton />
    </div>
  );
};

export default Page;