"use client";

import Image from "next/image"
import {Card, CardContent} from "./ui/card"
import {Button} from "./ui/button"
import { MenuIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const Header = () => {

    const {data} = useSession()
    const handleLoginClik = async () => {
        await signIn()
    }
    return ( 
        <Card>
            <CardContent className="p-5 flex justify-between flex-row items-center">
                <Image src="/logo.png" alt="logo fsw" height={18} width={120} />
                <Button variant="outline" size="icon" className="h-8 w-8">
                    <MenuIcon size={16}/>
                </Button>

                {/* <Button onClick={handleLoginClik}>login</Button> */}
                
            </CardContent>
        </Card>
     );
}
 
export default Header;