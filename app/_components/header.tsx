"use client";

import Image from "next/image"
import {Card, CardContent} from "./ui/card"
import {Button} from "./ui/button"
import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarImage } from "./ui/avatar";
import Link from "next/link";

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
                        <SheetHeader className="text-left border-b border-solid border-secondary p-5">
                            <SheetTitle>
                                <h1 className="text-2xl font-bold">Menu</h1>
                            </SheetTitle>
                        </SheetHeader>

                        {data?.user ? (
                            <div className="flex justify-between px-5 py-6 items-center">
                                <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarImage src={data.user?.image ?? ''} />
                                </Avatar>

                                <h2 className="font-bold">{data.user.name}</h2>
                                </div>

                                <Button variant="secondary" size="icon">
                                    <LogOutIcon onClick={handleLogoutClick}/>
                                </Button>

                            </div>
                            
                        ) : (
                            <div className="flex flex-col px-5 py-6 gap-3">
                                <div className="flex items-center gap-2">
                                    <UserIcon size={32}/>
                                    <h2 className="font-bold">Olá, faça seu login!</h2>
                                </div>

                                <Button variant="secondary" className="w-full justify-start" onClick={handleLoginClik}>
                                    <LogInIcon className="mr-2" size={18} />
                                    Fazer Login
                                </Button>
                            </div>
                        )}

                        <div className="flex flex-col gap-3 px-5">
                            <Button variant="outline" className="justify-start" asChild>
                                <Link href="/">
                                <HomeIcon size={18} className="mr-2"/>
                                Inicio
                                </Link>
                            </Button>

                            {data?.user && (
                                <Button variant="outline" className="justify-start">
                                <CalendarIcon size={18} className="mr-2"/>
                                Agendamentos
                                </Button>
                            )}
                        </div>
                    </SheetContent>
                </Sheet>

                {/* <Button onClick={handleLoginClik}>login</Button> */}
                
            </CardContent>
        </Card>
     );
}
 
export default Header;