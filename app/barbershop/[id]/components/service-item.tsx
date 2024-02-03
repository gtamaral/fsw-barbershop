
"use client"

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { Service } from "@prisma/client";
import { intlFormat } from "date-fns/intlFormat";
import { Router } from "lucide-react";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface ServiceItemProps {
    service: Service;
    isAuth: boolean; 
}

const ServiceItem = ({service, isAuth}: ServiceItemProps) => {
    const handleBookingClick = () => {
        if (!isAuth) {
            signIn("google")
        }
    }
    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(service.price);

    return (  
        <Card>
            <CardContent className="p-3">
                <div className="flex gap-4 items-center">
                    <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                        <Image className="rounded-lg" src={service.imageUrl} fill style={{objectFit: "contain"}} alt={service.name}/>
                    </div>

                    <div className="flex flex-col w-full">
                        <h2 className="font-bold">{service.name}</h2>
                        <p className="text-sm text-gray-400">{service.description}</p>

                        <div className="flex items-center justify-between mt-3">
                            <p className="text-primary font-bold text-sm">{formattedPrice}</p>
                            <Button variant="secondary" onClick={handleBookingClick}>Reservar</Button>
                            
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}
 
export default ServiceItem