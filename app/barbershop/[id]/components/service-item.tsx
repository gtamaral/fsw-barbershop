
"use client"

import { Button } from "@/app/_components/ui/button";
import { Calendar } from "@/app/_components/ui/calendar";
import { Card, CardContent } from "@/app/_components/ui/card";
import { SheetTrigger, Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/app/_components/ui/sheet";
import { Barbershop, Service } from "@prisma/client";
import { intlFormat } from "date-fns/intlFormat";
import { ptBR } from "date-fns/locale";
import { Loader2, Router } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import { generateDayTimeList } from "../_helpers/hours";
import { format, setHours, setMinutes } from "date-fns";
import { saveBooking } from "../_actions/save-booking";

interface ServiceItemProps {
    barbershop: Barbershop;
    service: Service;
    isAuth: boolean; 
}

const ServiceItem = ({ service, barbershop, isAuth}: ServiceItemProps) => {

    const {data} = useSession()

    const [date, setDate] = useState<Date | undefined>(undefined)
    const [hour, setHour] = useState<string | undefined>()

    const [submitIsLoading, setSubmitIsLoading] = useState(false)
    
    const handleDateClick = (date: Date | undefined) => {
        setDate(date)
        setHour(undefined)
    }

    const handleHourClick = (time:string) => {
        setHour(time)
    } 
    
    const handleBookingClick = () => {
        if (!isAuth) {
            signIn("google")
        }
    }

    const handleBookingSubmit = async() => {
        setSubmitIsLoading(true)
        try {
            if (!hour || !date || !data?.user) {
                return 
            }

            const dateHour = Number(hour.split(':')[0])
            const dateMinutes = Number(hour.split(':')[1])

            const newDate = setMinutes(setHours(date, dateHour), dateMinutes)

            await saveBooking({
                serviceId: service.id,
                barbershopId: barbershop.id,
                date: newDate ,
                userId: (data.user as any).id
            })
        } catch (error) {
            console.error(error)
       } finally {
        setSubmitIsLoading(false)
       }
    }

    const formattedPrice = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(service.price);

    const timeList = useMemo(() => {
        return date ? generateDayTimeList(date) : []
    }, [date])

    console.log(timeList)

    return (  
        <Card>
            <CardContent className="p-3  w-full">
                <div className="flex gap-4 items-center w-full">
                    <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
                        <Image className="rounded-lg" src={service.imageUrl} fill style={{objectFit: "contain"}} alt={service.name}/>
                    </div>

                    <div className="flex flex-col w-full">
                        <h2 className="font-bold">{service.name}</h2>
                        <p className="text-sm text-gray-400">{service.description}</p>

                        <div className="flex items-center justify-between mt-3">
                            <p className="text-primary font-bold text-sm">{formattedPrice}</p>
                        <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="secondary" onClick={handleBookingClick}>Reservar</Button>
                                </SheetTrigger>

                                <SheetContent className="p-0">
                                    <SheetHeader className="text-left px-4 py-5 border-b border-solid border-secondary">
                                    <SheetTitle>Fazer reserva</SheetTitle>
                                </SheetHeader>

                                <div className="py-4 w-full">
                                    <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={handleDateClick}
                                    locale={ptBR}
                                    fromDate={new Date()}
                                    styles={{
                                        head_cell: {
                                            width: "100%",
                                        },
                                        cell: {
                                            width: "100%",
                                        },
                                        button: {
                                            width: "100%",
                                        },
                                        nav_button_previous: {
                                            width: "32px",
                                            height: "32px,"
                                        },
                                        nav_button_next: {
                                            width: "32px",
                                            height: "32px",
                                        },
                                        caption: {
                                            textTransform: "capitalize",
                                        },
                                    }}
                                />
                                </div>

                                {/* Show (hours-available) just if some day has been choosen */}
                                {date && (
                                    <div className="py-6 px-5 border-t border-solid border-secondary flex  overflow-x-auto [&::-webkit-scrollbar]:hidden gap-3">
                                        {timeList.map((time) => (
                                            <Button 
                                             variant={hour === time ? "default" : "outline"}
                                             className="rounded-full" 
                                             key={time} 
                                             onClick={() => handleHourClick(time)}
                                             >
                                            {time}
                                            </Button>
                                        ))}
                                    </div>
                                )}

                                <div className="py-6 px-5 border-t border-solid border-secondary">
                                    <Card>
                                        <CardContent className="p-3 gap-3 flex flex-col">
                                            <div className="flex justify-between">
                                                 <h2 className="font-bold">{service.name}</h2>
                                                 <h3 className="font-bold text-sm">{formattedPrice}</h3>
                                            </div>

                                            {date && (
                                                <div className="flex justify-between">
                                                    <h3 className="text-gray-400">Data</h3>
                                                    <h4 className="text-sm">{format(date, "dd 'de' MMMM", {
                                                        locale: ptBR,
                                                    })}</h4>
                                                </div>
                                            )}

                                            {hour && (
                                                <div className="flex justify-between">
                                                    <h3 className="text-gray-400 text-sm">Horário</h3>
                                                    <h4 className="text-sm">{hour}</h4>
                                                </div>
                                            )}

                                            {/* TODOOOOO */}
                                            <div className="flex justify-between">
                                                    <h3 className="text-gray-400">Barbearia</h3>
                                                    <h4 className="text-sm">{barbershop.name}</h4>
                                            </div>


                                        </CardContent>
                                    </Card>
                                </div>
                                <SheetFooter className="px-5">
                                    <Button onClick={handleBookingSubmit} disabled={!hour || !date || submitIsLoading}>
                                        {submitIsLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                                        Confirmar reserva
                                    </Button>
                                </SheetFooter>
                                </SheetContent>   
                        </Sheet>
                        </div>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}
 
export default ServiceItem