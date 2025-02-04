import { title } from "@/components/primitives";
import { EventsConfig } from "@/config/event";
import Image from "next/image";
import { ScrollShadow } from "@nextui-org/react";

import {
  Calendar,
  CalendarCheckIcon,
  LocateIcon,
  MapPin,
  Trophy,
} from "lucide-react";
import Calenda from "@/components/Calenda";
import TicketBooking from "@/components/TickeBooking";

export default function Events() {
  return (
    <div className="px-2 rounded-lg" style={{ border: "solid 1px #8c8a8f" }}>
      <div
        className="flex justify-between items-center"
      >
        <h1
          className="text-14 py-2"
          style={{ fontSize: "28px", fontWeight: "bolder" }}
        >
          {EventsConfig.name}
        </h1>
        
        <Calenda/>
      </div>

      <p className="text-sm text-justify py-2">{EventsConfig.description}</p>
      <div>
      <ScrollShadow hideScrollBar size={100} className="w-full h-[800px]">

        {EventsConfig.eventDetails.map((item) => (
          <div
            key={item.id}
            className="my-5 rounded-tr-md md:rounded-tr-md md:rounded-tl-md rounded-tl-md"
            style={{ border: "1px solid #f36e4e" }}
          >
            <img
              src={item.image as string}
              alt=""
              className="rounded-tr-md md:rounded-tr-md md:rounded-tl-md rounded-tl-md w-full"
            />
            <div
              className=" p-2 text-white"
              style={{ backgroundColor: "#181818" }}
            >
              <div className="flex my-2 justify-between items-center w-full">
                <div className="w-3/5 text-bold text-start">{item.title}</div>
                <TicketBooking item={item}/>
              </div>
              <p className=" text-justify text-sm py-2">{item.description}</p>
              <div className="flex my-2 justify-between items-center w-full">
                <div className="hover:cursor-pointer flex justify-center items-center gap-2">
                  <MapPin color="#ff6b00" size={18} />
                  <p className="text-sm hover:cursor-pointer">
                    {item.location}
                  </p>
                </div>
                <p className="text-sm hover:cursor-pointer">{item.date}</p>
              </div>
            </div>
          </div>
        ))}
      </ScrollShadow>
      </div>
    </div>
  );
}
