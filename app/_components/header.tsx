"use client";


import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import SideMenu from "./side-menu";



const Header = () => {

    return ( 
        <header>
            <Card>
            <CardContent className="p-5 flex justify-between flex-row items-center">
                <Link href="/">
                <Image src="/logo.png" alt="logo fsw" height={18} width={120} />
                </Link>
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
        </header>
     );
}
 
export default Header;