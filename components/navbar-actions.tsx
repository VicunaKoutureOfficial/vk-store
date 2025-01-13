"use client";

import { Heart, LogIn, ShoppingBag, ShoppingCart, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import Link from "next/link";
import { signOut } from "@/auth";
import { handleSignOut } from "@/actions/auth/handleSignOut";

const NavbarActions = ({
  userName,
}: {
  userName: string | null | undefined;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const router = useRouter();
  const cart = useCart();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex items-center md:gap-x-4 ">
      <div className="hidden md:block">
      {userName && (
        <div className=" flex space-x-4">
          <form className="cursor-pointer" action={handleSignOut}>
            <Button
              className="flex items-center rounded-full bg-[#572a43] p-1 md:p-2 text-xs md:text-sm"
              type="submit"
            >
              Sign out
            </Button>
          </form>
          <Button className="flex items-center rounded-full bg-[#572a43] p-1 md:p-2 text-xs md:text-sm">
            {userName}
          </Button>
        </div>
      )}
      </div>
      <Link href={"/auth/login"} className=" text-sm font-medium text-white ">
        <Button className="flex items-center rounded-full bg-[#00000000] px-1 md:px-4 py-2 border-2 border-transparent hover:border-2 hover:border-black hover:scale-110 ease-in-out transition-all duration-400 hover:bg-pink-300 text-white font-extrabold hover:text-black">
          <UserRound className=" scale-75 md:scale-125" />
        </Button>
      </Link>
      {/* <Link href={"/auth/signup"} className=" text-sm font-medium text-white">
        <Button className="flex items-center rounded-full bg-[#00000000] px-1 md:px-4 border-2 border-transparenthover:border-2 hover:border-black hover:scale-110 ease-in-out transition-all duration-400 hover:bg-pink-300 text-white hover:text-black">
          <Heart className="scale-75 md:scale-125" />
        </Button>
      </Link> */}

      <Button
        onClick={() => router.push("/cart")}
        className="flex items-center rounded-full bg-[#00000000] px-1 md:px-4 py-2 border-2 border-transparent hover:border-2 hover:border-black hover:scale-110 ease-in-out transition-all duration-400 hover:bg-pink-300 text-white hover:text-black"
      >
        {/* <ShoppingBag size={20} className="" /> */}
        <ShoppingCart className="scale-75 md:scale-125" />
        <span className="ml-2 text-lg font-bold ">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
