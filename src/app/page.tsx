import { Button } from "@/components/ui/button"
import prisma from "@/lib/db";

const Page = async () => {
  const users = await prisma.user.findMany()
  console.log(users)
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <Button>Click me</Button>
    </div>
  );
};

export default Page;