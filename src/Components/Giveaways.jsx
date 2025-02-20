import { useState } from "react";
import CustomButton from "../atoms/CustomButton";
const data = [
  { img: "clock.png", text: "Rolex Submariner", price: "$50" },
  { img: "clock.png", text: "Rolex Submariner", price: "$100" },
  { img: "clock.png", text: "Rolex Submariner", price: "$150" },
];

const data1 = [
  {
    year: "2025",
    address: "0x9c493cd702651054c4b8672bde3b68d9083f1a11",
    username: "Username",
    prize: "$1000 $VICE",
  },
  {
    year: "2025",
    address: "0x9c493cd702651054c4b8672bde3b68d9083f1a11",
    username: "Username",
    prize: "Rolex Submariner",
  },
  {
    year: "2025",
    address: "0x9c493cd702651054c4b8672bde3b68d9083f1a11",
    username: "Username",
    prize: "2025 Aston Martin Vanquish",
  },
  {
    year: "2025",
    address: "0x9c493cd702651054c4b8672bde3b68d9083f1a11",
    username: "Username",
    prize: "$30,000 $VICE",
  },
]
const Giveaways = () => {
  const [border, setBorder] = useState("upcoming");
  return (
    <div className="text-white pt-[75px]">
      <p className="text-[48px] font-Space_Grotesk flex justify-center">GIVEAWAYS</p>
      <div className="px-[100px] py-[60px]">
        
          <div className="flex items-start h-[89px] ">
            <div
              onClick={() => setBorder("upcoming")}
              className={`w-[164px] text-[14px] cursor-pointer ${
                border === "upcoming" && "border-b-[#e00b7c] text-[#e00b7c] border-b-[1px]"
              }  border-solid flex justify-center pb-[34px]`}
            >
              Upcoming
            </div>
            <div
              onClick={() => setBorder("completed")}
              className={`w-[164px] text-[14px] cursor-pointer border-solid ${
                border === "completed" && "border-b-[#e00b7c] text-[#e00b7c] border-b-[1px]"
              }  flex justify-center pb-[34px]`}
            >
              Completed
            </div>
          </div>
        {border === "upcoming" ? (
         <div className="py-[24px]">
          {data.map((item, index) => (
            <div key={index} className="w-full rounded-[20px] mb-[8px] bg-[#202020] min-w-[500px]">
              <div className="pl-[14px] pt-[12px] pb-[5px] pr-[40px] flex items-center">
                <img
                  src={item.img}
                  alt="clock"
                  className="pl-[14px] w-[157px] h-[161px]"
                />
                <div className="grow">
                  <div className="flex flex-col lg:flex-row justify-between items-center ml-[13px] gap-[10%]">
                    <div className="space-y-[8px]">
                      <p className="text-[14px] text-[#b9b9b9]">
                        COMING SOON
                      </p>
                      <p className="text-[24px]">{item.text}</p>
                    </div>
                    <div className="bg-gradient-to-r from-[#55A5EE] to-[#E00B7C] min-w-[97px] h-[38px] rounded-[40px] flex justify-center items-center">
                      <p className="text-[14px] font-bold px-2 py-1">1 Ticket</p>
                    </div>
                    <p className="font-bold text-[32px] min-w-10">{item.price}</p>
                    <div className="space-y-[8px]">
                      <CustomButton text={"Enter now"} />
                      <CustomButton text={"More info"} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>):(
          <div className="py-[32px]">
            <div className="title flex items-center text-[#B9B9B9] text-[14px] px-[34px] gap-[8%] font-poppins min-w-[1000px]">
              <p className="w-10">Year</p>
              <p className="w-96">Address</p>
              <p className="w-28">Username</p>
              <p className="">Prize</p>
            </div>
          {data1.map((item, index) => (
            <div key={index} className="w-full rounded-[20px] mb-[8px] bg-[#202020] mt-6 min-w-[1000px]">
              <div className="title flex items-center text-text_color py-7 px-[34px] gap-[8%] text-[14px] font-bold font-poppins">
                <p className="min-w-10">{item.year}</p>
                <p className="min-w-96">{item.address}</p>
                <p className="min-w-28">{item.username}</p>
                <p className="text-2xl text-gradient leading-tight">{item.prize}</p>
            </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};
export default Giveaways;
