
import { ScrollShadow } from "@nextui-org/react";
import Events from "./events/page";
import {Avatar} from "@nextui-org/react";
import Recommendation from "./recommendation/page";
import Reviews from "./reviews/page";
import AvatarNav from "@/components/AvatarNav";
import { UserButton } from "@clerk/nextjs";
import { userInfo } from "os";
// import { useUser } from "@clerk/nextjs";

export default function Home() {
  // const { isLoaded, isSignedIn, user } = useUser();
 
  // if (!isLoaded || !isSignedIn) {
  //   return null;
  // }
  return (
    <section className="relative flex flex-col items-start justify-between gap-4 md:py-2 w-full">
      <div className="flex justify-center items-center gap-2 absolute z-10 top-10 left-10">
      {/* <h1 className=" font-mono font-bold text-24">Hello </h1> */}
      <UserButton /> 
      <div className="p-2">
      {/* <h1 className=" font-mono font-bold">Axyz Zyxa</h1>
      <p className=" font-mono font-bold">xyz@gmail.com</p> */}
      {/* {user.firstName} */}
      </div>
      {/* <p className="font-bold font-mono">Welcome to Sportsite,<br />Navigate Through Your Favorite Activities</p> */}
      </div>
      
      <div className="relative w-full h-80 ">
        <img
          src="/banner3.jpg"
          alt=""
          className="rounded-lg absolute inset-0 w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="flex flex-col items-start justify-between gap-4 py-2 md:flex-row w-full">
        <ScrollShadow hideScrollBar size={100} className="w-full h-[800px] md:w-2/5">
          <Recommendation/>
        </ScrollShadow>
        <Events />
        <ScrollShadow hideScrollBar size={100} className="w-full h-[800px] md:w-4/12">
        <Reviews/>
        </ScrollShadow>
      </div>
    </section>
  );
}
