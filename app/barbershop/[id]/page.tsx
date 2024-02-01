
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./barbershop-info";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    };
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {


    if (!params.id) {
        // TODO
        return null;
    }
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
    })


    return ( 
        <BarbershopInfo barbershop={barbershop}  />
    );
}
 
export default BarbershopDetailsPage;