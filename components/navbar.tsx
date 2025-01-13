// "use client"
import Link from "next/link";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
// import { auth } from "@/auth";
import Image from "next/image";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { MultiDirectionSlide } from "./ui/slide-text";
import { NavDrawer } from "./navdrawer";

import * as React from "react"
import { NavigationIcon } from "lucide-react";
import { RxHamburgerMenu } from "react-icons/rx";
import { auth, currentUser } from '@clerk/nextjs/server'

const Navbar = async () => {
  const categories = await getCategories();
  // const session = await auth();
  const { userId } = await auth();
  const user = await currentUser();

  return (
    <div className="shadow-sm bg-[#76287E] w-full">
      {/* <Container> */}
      <div className="relative sm:px-6 lg:px-12 flex py-4 items-center justify-center flex-row w-full mx-auto">

        <div className="w-full">

          {/* <Link
            href="/"
            className="flex lg:ml-0 gap-x-2 w-full items-center justify-center"
          >
            <p className="font-bold text-xl">Vicuna Kouture</p>
          </Link> */}
          <div>
            {/* <NavigationIcon /> */}
            

          </div>
          <NavDrawer userName={user?.firstName}/>

        </div>

        <div className="w-full flex items-center justify-center">

          {/* <video preload="none" width="180" height="240" className="" autoPlay loop muted>
            <source src="vklogo.webm" type="video/webm" />

            Your browser does not support the video tag.
          </video> */}
          <Link href={"/"}>
          <div className="hidden md:block"><img src="vk.png" width={150} /></div>
          <div className="block md:hidden"><img src="vk.png" width={50} /></div>
          </Link>

        </div>

        {/* <MainNav data={categories} /> */}
        <div className="w-full flex items-center justify-end md:pr-0 pr-2">
          <NavbarActions userName={user?.firstName} />
        </div>
        
        

      </div>
    </div >
  );
};

export default Navbar;
