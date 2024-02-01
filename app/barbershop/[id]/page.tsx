
import { Button } from "@/app/_components/ui/button";
import { db } from "@/app/_lib/prisma"
import { ChevronLeftIcon, MapPinIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import BarbershopInfo from "./components/barbershop-info";
import ServiceItem from "./components/service-item";

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
        include: {
            services: true, 
        }
    })


    return ( 
        <div>
            <BarbershopInfo barbershop={barbershop}  />
            <div className="px-5 flex flex-col gap-4 py-6">
                {barbershop.services.map(service => (
                <ServiceItem key={service.id} service={service}/>
            ))}
            </div>
        </div>        
    );
}
 
export default BarbershopDetailsPage;