
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./components/barbershop-info";
import ServiceItem from "./components/service-item";
import { getServerSession } from "next-auth";
import { Key } from "react";
import { authOptions } from "@/app/_lib/auth";

interface BarbershopDetailsPageProps {
    params: {
        id?: string;
    };
}

const BarbershopDetailsPage = async ({params}: BarbershopDetailsPageProps) => {

    const session = await getServerSession(authOptions)


    if (!params.id) {
        // TODO
        return null;
    }
    const barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id,
        },
        include: {
            services: true, 
        }
    })


    return ( 
        <div>
            <BarbershopInfo barbershop={barbershop}  />
            <div className="px-5 flex flex-col gap-4 py-6">
                {barbershop.services.map((service: { id: Key | null | undefined; }) => (
                <ServiceItem key={service.id} service={service} isAuth={!!session?.user} barbershop={barbershop}/>
            ))}
            </div>
        </div>        
    );
}
 
export default BarbershopDetailsPage;