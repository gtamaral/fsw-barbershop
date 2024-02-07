import Header from "../_components/header";

// datefns
import { format } from "date-fns"
import {ptBR} from "date-fns/locale"
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";

// db
import BarbershopItem from "./_components/barbershop-item";

import { getServerSession } from "next-auth";
import { db } from "../_lib/prisma";
import { authOptions } from "../_lib/auth";


export default async function Home() {
  const session = await getServerSession(authOptions)

  const [barbershops, confirmedBookings] = await Promise.all([
     db.barbershop.findMany({}),
     session?.user ? db.booking.findMany({
        where: {
            userId: (session.user as any).id,
            date: {
                gte: new Date(),
            }
        },
        include: {
            service: true,
            barbershop: true,
        }
    })
    : Promise.resolve([])
  ])
  


  return (
    // chamar prisma e pegar barbearias
     <div>
      <Header />

      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">{session?.user ? `Olá, ${session.user.name?.split(" ")[0]!}` : "Olá, vamos agendar um corte?"}</h2>
      <p className="capitalize text-sm text-gray-400 mt-1">{format(new Date(), "EEEE','d 'de' MMMM",{
        locale: ptBR,
      }
      )}</p>
      </div>

      <div className="px-5 mt-6">
        <Search />
      </div>

      <div className="mt-6">
        {confirmedBookings.length > 0 && (
          <>
            <h2 className="pl-5 text-xs mb-3 uppercase text-gray-400 font-bold">Agendamentos</h2>
            <div className="px-5 flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem key={booking.id} booking={booking} />
              ))}
            </div>
          </>
        )}
      </div>
      

      <div className="mt-6">
        <h2 className="text-xs px-5 mb-3 uppercase text-gray-400 font-bold">Recomendados</h2>

        <div className="flex gap-2 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: { id: Key | null | undefined; }) => (            
              <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>

      <div className="mt-6 mb-[4.5rem]">
        <h2 className="text-xs px-5 mb-3 uppercase text-gray-400 font-bold">Populares</h2>

        <div className="flex gap-2 px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (            
              <BarbershopItem key={barbershop.id} barbershop={barbershop}/>
          ))}
        </div>
      </div>
     </div>
  );
}
