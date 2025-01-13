// import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
import { handleSignOut } from "@/actions/auth/handleSignOut";
import Button from "@/components/ui/button";

export function NavDrawer({
    userName,
}: {
    userName: string | null | undefined;
}) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <RxHamburgerMenu className="text-white pl-[1rem] md:pl-0 text-[3rem] md:text-[3rem] cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Welcome {userName}!!!</SheetTitle>
                    {/* <SheetDescription>
                        Make changes to your profile here. Click save when you&aposre done.
                    </SheetDescription> */}
                </SheetHeader>

                <div>
                    {userName && (
                        <div className="flex flex-col space-x-4 mt-5">
                            <form className="cursor-pointer" action={handleSignOut}>
                                <Button
                                    className="flex items-center rounded-full bg-[#572a43] p-1 md:p-2 text-xs md:text-sm"
                                    type="submit"
                                >
                                    Sign out
                                </Button>
                            </form>
                            {/* <Button className="flex items-center rounded-full bg-[#572a43] p-1 md:p-2 text-xs md:text-sm">
                                Prem Kumar Singh
                            </Button> */}
                        </div>
                    )}
                </div>

                {/* <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <button type="submit">Save changes</button>
                    </SheetClose>
                </SheetFooter> */}
            </SheetContent>
        </Sheet>
    )
}
