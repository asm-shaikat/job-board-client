'use client';
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/store";
import { logout } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter()
  const handleLogout = () =>{
    dispatch(logout())
    router.push('/login')
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
