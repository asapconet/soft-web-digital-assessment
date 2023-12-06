import RootLayout from "@/layouts";
import Image from "next/image";
import overviewDB1 from "../app/assets/images/overviewDB1.png";
import blocked from "../app/assets/images/blocked.png";
import timer from "../app/assets/images/time.png";
import calender from "../app/assets/images/Calendar.png";
import { IoMdStar } from "react-icons/io";
import { Avater } from "./assets/Avater";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Home() {
  return (
    <RootLayout>

      <main>
        <div className="text-6xl min-h-[70vh] mt-[96px]">
          <div className="grid grid-cols-2 gap-1 w-full min-h-[634px]">
            <div className="col-span-1 h-full flex justify-center items-center">
              <div className=" text-dark_gray w-[559px]">
                <p className="text-[2.1rem] text-recoleta font-bold py-12 leading-normal">
                  List and grow your business  with just few clicks
                </p>
                <p className="text-[1.3rem] text-dark_gray leading-normal">
                  Eliminate manual work and save time by listing your business
                  or service on the best business directory in Nigeria.
                </p>
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center items-center relative">
              <div className="w-[674px] h-[437px] bg-primary rounded-[1.7rem] mt-48" />
              <Image
                src={overviewDB1}
                alt="cover"
                width={460}
                height={100}
                className="absolute -bottom-4"
              />
            </div>
          </div>

          {/* SECOND HERO */}
          <div className="grid grid-cols-2 gap-1 w-full min-h-[634px] my-10">
            <div className="col-span-1 flex flex-col justify-center items-center relative">
              <div
                className="w-[526px] h-[526px] blur-xl bg-gradient-to-r 
              from-[#e7b4dcd4] to-[#dc8af0] rounded-[45%]"
              >
                <div className=" flex justify-center items-center h-[526px]">
                  <div
                    className="flex justify-center w-[226px] h-[226px] items-center 
                  bg-white rounded-[45%] blur-sm"
                  />
                </div>
              </div>
              <AvaterCard className="right-[11rem] rotate-12 z-20" />
              <AvaterCard
                className="top-[4rem] left-[13rem] -rotate-12 z-10"
                text="Tomi does a great job as an hair stylist. 
                I haven’t  stopped coming back since I 
                first patronized her."
              />
              <AvaterCard className="bottom-[4rem] left-[13rem] -rotate-3 z-30" />
            </div>
            <div className="col-span-1 h-full flex justify-center items-center">
              <div className=" text-dark_gray w-[559px]">
                <p className="text-[2.1rem] text-recoleta font-bold py-12 leading-normal">
                  Collect reviews and ratings from customers
                </p>
                <p className="text-[1.3rem] text-dark_gray leading-normal ">
                  Accelerate your business reputation by 90% and gain social
                  proof through reviews and ratings requested from customers.
                </p>
              </div>
            </div>
          </div>

          {/* THIRD HERO */}
          <div className="bg-[#FCFAFF] mx-[8rem] pt-[14rem] my-12 pb-[6rem] px-[1.8rem] rounded-3xl">
            <div className="grid grid-cols-2 gap-1 w-full min-h-[634px] mb-12">
              <div className="col-span-1 flex flex-col justify-center items-center relative">
                <div className="w-[638px] h-[621px] bg-primary rounded-[1.7rem]" />
                {/*Space for the iPhone markup*/}
              </div>
              <div className="col-span-1 min-h-[634px] flex justify-start items-center relative">
                <PlainCard
                  className="absolute -top-[9rem] -left-10"
                  title="Get Discovered"
                  text="Dutiful is more than just a business directory; 
              it also enhances your web profile. The platform makes use of SEO 
              techniques to boost each listing’s performance in the SERPs, 
              providing any business the chance to rank, regardless of how 
              strong their current online presence is."
                />{" "}
                <PlainCard
                  className="absolute -left-44"
                  title="Instant Chat"
                  text="You’ll be able to chat and send voice recordings 
                with potential and existing customers, including managing your
                 captured leads anytime, anywhere via the platform"
                />{" "}
                <PlainCard
                  className="absolute -bottom-[8rem] -left-10"
                  title="Quotations"
                  text="In addition to providing customers with access to information
                , offering customer quotations is very advantageous to the way
                 you conduct your business. On Dutiful, you’ll be able to send and
                  receive quotation from customers - an important step in lead management."
                />
              </div>
            </div>{" "}
          </div>

          {/* LAST HERO */}
          <div className="grid grid-cols-2 gap-4 w-full min-h-[634px] my-10">
            <div className="col-span-1 flex justify-end items-center relative">
              <div className="flex gap-2 items-center">
                <div className="flex flex-col gap-4">
                  <Image src={blocked} alt="time cover" width={300} />
                  <Image src={calender} alt="time cover" width={300} />
                </div>
                <div className="">
                  <Image src={timer} alt="time cover" width={200} />
                </div>
              </div>
            </div>
            <div className="col-span-1 h-full flex justify-start items-center">
              <div className=" text-dark_gray w-[70%]">
                <p className="text-[2.1rem] text-recoleta font-bold py-12 leading-normal">
                  Accept and sell appointments
                </p>
                <p className="text-[1.3rem] text-dark_gray leading-normal ">
                  Let customers book their own appointment or consultation.
                  Start accepting payments for appointments through your booking
                  page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </RootLayout>
  );
}

export default Home;

function AvaterCard({ className, text }: any) {
  return (
    <div
      className={`h-[213px] w-[301px] p-8 rounded-lg bg-white
               border-border_gray border absolute ${className} `}
    >
      <div className="flex items-center gap-2">
        <Avater />
        <p className="font-bold text-[1.15rem] text-black">Adeola Fatoyinbo</p>
      </div>
      <div className="flex items-center text-[#FCC945]">
        <IoMdStar size={25} />
        <IoMdStar size={25} />
        <IoMdStar size={25} />
        <IoMdStar size={25} />
        <IoMdStar size={25} />
      </div>
      <p className="text-[.8rem] text-[#666666] leading-normal mt-4">
        {text
          ? text
          : "Perfecto! That’s my exclamation everytime I patronize Johnson. His works are nothing short of amazing."}
      </p>
    </div>
  );
}

function PlainCard({ className, title, text, ...rest }: any) {
  return (
    <div
      className={`min-h-[239px] w-[480px] p-6 rounded-3xl bg-white
               border-border_gray border absolute ${className} `}
    >
      <div className="flex items-center gap-2">
        <Avater />
      </div>

      <p className="font-bold text-[1.02rem] text-black w-full my-4">{title}</p>

      <p className="text-[1rem] text-[#666666] leading-normal">
        {text
          ? text
          : "Perfecto! That’s my exclamation everytime I patronize Johnson. His works are nothing short of amazing."}
      </p>
    </div>
  );
}
