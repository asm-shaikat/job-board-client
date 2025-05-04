'use client';

import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import type { RootState } from "@/store";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const token = useSelector((state: RootState) => state.auth.token);

  const isPublicRoute = pathname === "/login" || pathname === "/register";

  useEffect(() => {
    if (!token && !isPublicRoute) {
      router.push("/login");
    } else if (token && isPublicRoute) {
      router.push("/");
    }
  }, [token, isPublicRoute, router]);

  return <>{children}</>;
}
