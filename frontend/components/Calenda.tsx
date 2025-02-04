import React from "react";
import { Popover, PopoverTrigger, PopoverContent, Button } from "@nextui-org/react";
import Calendar from 'react-calendar'; // Import the React calendar component

import {
  CalendarCheckIcon,
  CalendarClockIcon,
  LocateIcon,
  MapPin,
  Trophy,
} from "lucide-react";

export default function Calenda() {

  return (
    <Popover
      showArrow
      offset={10}
      placement="bottom"
      backdrop="blur" // Using the "blur" backdrop
    >
      <PopoverTrigger>
      <CalendarCheckIcon color="#ff6b00" size={18} />
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        <div className="px-1 py-2 w-full">
          {/* Render the React calendar component inside the popover */}
          <Calendar />
        </div>
      </PopoverContent>
    </Popover>
  );
}
