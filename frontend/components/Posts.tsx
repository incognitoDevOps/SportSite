"use client"

import React from "react";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";
import {Input} from "@nextui-org/react";
import { LucideView, SendIcon, View, ViewIcon } from "lucide-react";

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
      comments:any;
      commetsTotal:number;
    };
  }
  

 const Posts: React.FC<TicketBookingProps> = ({ item }) =>{

  return (
    <Card shadow="none" className="max-w-[300px] border-none bg-transparent">
      <CardHeader className="justify-between">
        <div className="flex gap-3">
          <Avatar isBordered radius="full" size="md" src={item.image} />
          <div className="flex flex-col items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{item.title}</h4>
            <h5 className="text-small tracking-tight text-default-500">{item.commetsTotal} Comments</h5>
          </div>
        </div>
        
        <div className="flex justify-center gap-2 items-center  bg-[#f36e4e] cursor-pointer p-2 text-white rounded-md">
         <p className="text-md font-mono font-bold ">View</p> 
          <LucideView size={14}/>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 gap-2">
        <p className="text-small pl-px text-default-500">
          {item.description}
          <span aria-label="confetti" role="img">
            🎉
          </span>
        </p>
        <Image src={item.image} width={300} height={300} alt=""/>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1 items-center justify-between">
        <Input type="email" label="Comment" />
        <SendIcon className="text-[#f36e4e] cursor-pointer"/>
        </div>
        
      </CardFooter>
    </Card>
  );
};

export default Posts;
