import { Badge } from "@/app/_components/ui/badge";
import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Barbershop } from "@prisma/client";
import { StarIcon } from "lucide-react";
import Image from "next/image";


interface BarbershopItemProps {
    barbershop: Barbershop
}


const BarbershopItem = ({barbershop}: BarbershopItemProps) => {

    return ( 
        <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
            <CardContent className="px-1 py-0">
                <div className="px-1 w-full h-[159px] relative">
                    <div className="absolute z-50 top-3 left-3">
                        <Badge variant="secondary" className="opacity-90 flex items-center justify-between gap-1 ">
                        <StarIcon size={12} className="fill-primary text-primary" />
                        <span className="text-xs">5,0</span>
                        </Badge>
                    </div>
                    <Image 
                    alt={barbershop.name}
                    src={barbershop.imageUrl}
                    fill
                    
                    style={{
                        objectFit: "cover"
                    }}
                   
                    className="rounded-2xl"
                />
                </div>
                <div className="px-2 pb-3">
                    <h2 className="font-bold mt-3 text-ellipsis text-nowrap">{barbershop.name}</h2>
                <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
                    {barbershop.address}
                </p>
                <Button className="w-full mt-3" variant="secondary">Reservar</Button>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BarbershopItem;