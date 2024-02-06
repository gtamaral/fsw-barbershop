import { Booking, Prisma } from "@prisma/client";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { format, isFuture, isPast } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingItemProps {
    booking: Prisma.BookingGetPayload<{
        include: {
            service: true;
            barbershop: true;
        }
    }>;
}

const BookingItem = ({booking}: BookingItemProps) => {
    const isBookingConfirmed = isFuture(booking.date)
    return ( 
        <Card>
            <CardContent className="py-0 flex px-0">
                <div className="flex flex-col gap-2 py-5 flex-[3] pl-5">
                    <Badge variant={
                        isBookingConfirmed ? "secondary" : "default"
                    } className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">{isBookingConfirmed ? "Confirmado": "Finalizado"}</Badge>
                    <h2 className="text-xl font-bold">{booking.service.name}</h2>

                    <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                            <AvatarImage src={booking.barbershop.imageUrl} />
                        </Avatar>

                        {/* prisma faz join por debaixo dos panos */}
                        <h3 className="text-sm">{booking.barbershop.name}</h3>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center px-3 flex-1 border-l border-solid border-secondary">
                    <p className="text-sm capitalize">{format(booking.date, "MMMM", {
                        locale: ptBR,
                    })}</p>
                    <p className="text-2xl">{format(booking.date, "dd")}</p>
                    <p className="text-sm">{format(booking.date, "hh:mm")}</p>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default BookingItem;