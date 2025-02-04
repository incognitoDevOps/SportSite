"use client";

import { title } from "@/components/primitives";
import { reviewsConfig } from "@/config/reviews";
import Image from "next/image";
import { useState } from "react";

import {
  Calendar,
  CalendarCheckIcon,
  LocateIcon,
  MapPin,
  StarsIcon,
  Trophy,
} from "lucide-react";
import Calenda from "@/components/Calenda";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  User,
  Card,
  CardHeader,
} from "@nextui-org/react";
import Posts from "@/components/Posts";
import StarRating from "@/components/StarRating";
import RatingToggleButton from "@/components/RatingToggleButton";

export default function Reviews() {

  const ratingValues = [1, 2, 3, 4, 5];

  return (
    <div
      className="px-2 rounded-lg w-full"
      style={{ borderRight: "solid 1px #8c8a8f" }}
    >
      <div className="flex justify-between items-center">
        <h1
          className="text-14 py-2"
          style={{ fontSize: "28px", fontWeight: "bolder" }}
        >
          {reviewsConfig.name}
        </h1>
      </div>

      <p className="text-sm text-justify py-2">{reviewsConfig.description}</p>
      <div>
        {reviewsConfig.eventDetails.map((item) => (
          
          <div
            key={item.id}
            className="my-5 rounded-tr-md md:rounded-tr-md md:rounded-tl-md rounded-tl-md"
            style={{ borderLeft: "1px solid #f36e4e" }}
          >
            <Image
              src={item.image as string}
              alt=""
              width={310}
              height={200}
              className="rounded-tr-md md:rounded-tr-md md:rounded-tl-md rounded-tl-md"
            />
            <div
              className=" p-2 text-white"
              style={{ backgroundColor: "#181818" }}
            >
              <div className="flex my-2 justify-between items-center w-full">
                <div className="w-3/5 text-bold text-start">{item.title}</div>
                <StarRating value={item.stars} />
              </div>
              <p className=" text-justify text-sm py-2">{item.description}</p>
              <div className="flex my-2 justify-between items-center w-full">
                <Popover showArrow placement="bottom">
                  <PopoverTrigger>
                    <User
                      as="button"
                      name={item.title}
                      description="Comments"
                      className="transition-transform"
                      avatarProps={{
                        src: item.image,
                      }}
                    />
                    
                  </PopoverTrigger>
                  <PopoverContent className="p-1">
                    <Posts item={item} />
                  </PopoverContent>
                </Popover>
                <RatingToggleButton color="white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
