"use client";

import React from "react";
import { usePDF } from "react-to-pdf";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Avatar,
} from "@nextui-org/react";
import { DownloadIcon, Trophy } from "lucide-react";

export default function Ticket() {
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <Card className="max-w-[400px] bg-white">
      <Card className="max-w-[400px] bg-white text-black" ref={targetRef}>
        <CardHeader className="flex justify-between items-center">
          <div className="flex justify-center gap-2 items-center">
            <Trophy color="#ff6b00" size={24} />
            <div className="flex flex-col">
              <p
                className="font-bold text-inherit"
                style={{ color: "#ff6b00" }}
              >
                SportSite
              </p>
              <p
                className="font-bold text-inherit"
                style={{ color: "#ff6b00" }}
              >
                Approved
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
            {/* <h1 className=" font-mono font-bold text-24">Hello </h1> */}
            <Avatar
              isBordered
              color="warning"
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
            />
            <div className="p-1">
              <h1 className=" font-mono font-bold text-sm text-start">Alice Ket</h1>
              <p className=" font-mono font-bol text-sm text-start">aliceket@gmail.com</p>
            </div>
            {/* <p className="font-bold font-mono">Welcome to Sportsite,<br />Navigate Through Your Favorite Activities</p> */}
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>Make beautiful websites regardless of your design experience.</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="/">
            Go back and explore more games.
          </Link>
        </CardFooter>
      </Card>
      <div
        className="flex items-center justify-center gap-2 cursor-pointer "
        style={{ backgroundColor: "#ff6b00" }}
      >
        <button onClick={() => toPDF()} className=" font-bold">
          Download PDF
        </button>
        <DownloadIcon color="white" size={18} className=" " />
      </div>
    </Card>
  );
}
