"use client"

import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { db } from "@/app/_lib/prisma"
import { Barbershop } from "@prisma/client";
import { useRouter } from "next/navigation";
import { SheetContent, SheetTrigger, Sheet } from "@/app/_components/ui/sheet";
import SideMenu from "@/app/_components/side-menu";

interface BarbershopInfoProps {
    barbershop: Barbershop
}

const BarbershopInfo = ({barbershop}: BarbershopInfoProps) => {

    const router = useRouter();
    const handleBackClik = () => {
        router.replace("/")
    }

    return ( 

        <div>

        <div className="h-[250px] w-full relative">

            <Button onClick={handleBackClik} size="icon" variant="outline" className="z-50 top-4 left-4 absolute" >
                <ChevronLeftIcon />
            </Button>

            <Button size="icon" variant="outline" className="z-50 top-4 right-4 absolute" >
                <MenuIcon  />
            </Button>

            <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline" className="z-50 top-4 right-4 absolute" >
                            <MenuIcon  />
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        <SideMenu />
                    </SheetContent>

                    
            </Sheet> 

            <Image
             src={barbershop.imageUrl} 
             fill
             alt={barbershop.name}
             style={{
                objectFit: "cover",
             }}
             className="opacity-75"/>


        </div>
        <div className="pt-3 px-5 pb-6 border-b border-solid border-secondary ">
            <h1 className="text-xl font-bold">{barbershop.name}</h1>
            <div className="flex items-center gap-2 mt-2">
                <MapPinIcon className="text-primary" size={18} />
                <p className="text-sm">{barbershop.address}</p>
            </div>

            <div className="flex items-center gap-2 mt-2">
                <StarIcon className="text-primary" size={18} />
                <p className="text-sm">5,0 (100 avaliações)</p>
            </div>
        </div>

        </div>
     );
}
 
export default BarbershopInfo;