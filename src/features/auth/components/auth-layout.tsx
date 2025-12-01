import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-muted min-h-svh flex items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <Image src="/logos/logo.svg" alt="Nodebase" width={30} height={30} />
          Nodebase
        </Link>
          {children}
      </div>
    </div>
  );
};

