import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@nextui-org/react";
import Calendar from "react-calendar"; // Import the React calendar component
import { EventsConfig } from "@/config/event";

import {
  CalendarCheckIcon,
  CalendarClockIcon,
  LocateIcon,
  MapPin,
  Trophy,
} from "lucide-react";
import BlogPage from "@/app/blog/page";
import Tickets from "@/app/tickets/page";
import Image from "next/image";
import Link from "next/link";

interface TicketBookingProps {
  item: {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    ticketPrice: string;
    latitude: string;
    longitude: string;
    image: string;
  };
}

const TicketBooking: React.FC<TicketBookingProps> = ({ item }) => {
  return (
    <div className="w-2/5">
      <Popover
        showArrow
        offset={10}
        placement="bottom"
        backdrop="blur" // Using the "blur" backdrop
      >
        <PopoverTrigger>
          <button
            className="w-full"
            style={{
              backgroundColor: "#f36e4e",
              fontWeight: "bold",
              fontSize: "10px",
              borderRadius: "5px",
              padding: "5px",
            }}
          >
            Get Ticket @ {item.ticketPrice}
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[240px]">
          <div className="px-1 py-2 w-800 min-h-40 flex justify-center items-center flex-col">
            <Image src={item.image} width={300} height={300} alt="" />
            <h1 style={{ color: "#f36e4e" }} className="py-5">
              You are about to book a ticket for {item.title} at{" "}
              {item.ticketPrice} located at {item.location}
            </h1>
            <div>
              <h1 className="text-center font-bold">Book a Call</h1>
              <form
                method="POST"
                action="https://www.formbackend.com/f/664decaabbf1c319"
                className="gap-2 py-2"
              >
                <div className="py-2">
                  <label>Name</label>
                  <input type="text" name="name" />
                </div>

                <div className="py-2">
                  <label>Select Seat Number</label>
                  <input type="number" name="seat" />
                </div>
                <p className="my-2" style={{backgroundColor:"#27272a"}}>Event is : {item.title}</p>
                <p className="my-2" style={{backgroundColor:"#27272a"}}>Located at : {item.location}</p>

                <div className="flex justify-between items-center py-2">
                <button
                  type="submit"
                  className="rounded-md p-2"
                  style={{ backgroundColor: "#0ba32c" }}

                >
                  Submit
                </button>
                <button
                  type="submit"
                  className="rounded-md p-2"
                  style={{ backgroundColor: "#eb2a35" }}
                >
                  Cancel
                </button>
                </div>
                
                <p>After booking go to <span style={{color:"#0070f3"}}>
                <Link href="/tickets">Ticket Page</Link>
                  </span></p> to Download Your Ticket
              </form>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TicketBooking;
