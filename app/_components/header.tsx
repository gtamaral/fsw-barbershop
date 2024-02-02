"use client";

import Image from "next/image"
import {Card, CardContent} from "./ui/card"
import {Button} from "./ui/button"
import { MenuIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";

const Header = () => {

    const {data, status} = useSession()

    const handleLogoutClick = () => {
        signOut()
    }
    const handleLoginClik = () => {
        signIn("google")
    }

    return ( 
        
        <Card>
            <CardContent className="p-5 flex justify-between flex-row items-center">
                <Image src="/logo.png" alt="logo fsw" height={18} width={120} />
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="h-8 w-8">
                            <MenuIcon size={16}/>
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>

                    
                </Sheet>                
            </CardContent>
        </Card>
     );
}
 
export default Header;