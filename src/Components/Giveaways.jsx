import { useState } from "react";
import { GridView, ViewList } from "../atoms/icon";

const data = [
  { img: "clock.png", text: "Rolex Submariner", price: "$50" },
  { img: "clock.png", text: "Rolex Submariner", price: "$100" },
  { img: "clock.png", text: "Rolex Submariner", price: "$150" },
];

const Giveaways = () => {
  const [border, setBorder] = useState("upcoming");
  return (
    <div className="text-white pt-[86px]">
      <p className="text-[100px] font-medium flex justify-center">GIVEAWAYS</p>
      <div className="pl-[242px] pr-[222.7px]">
        <div className="pt-[81px] border-b-4 border-solid border-b-[#b9b9b9] flex justify-between">
          <div className="flex items-start h-[89px] ">
            <div
              onClick={() => setBorder("upcoming")}
              className={`w-[317px] text-[34px] ${
                border === "upcoming" && "border-b-[#e00b7c] border-b-8"
              }  border-solid flex justify-center pb-[34px]`}
            >
              Upcoming
            </div>
            <div
              onClick={() => setBorder("completed")}
              className={`w-[317px] text-[34px] border-solid ${
                border === "completed" && "border-b-[#e00b7c] border-b-8"
              }  flex justify-center pb-[34px]`}
            >
              Completed
            </div>
          </div>
          <div className="flex items-center gap-[17px]">
            {GridView}
            {ViewList}
          </div>
        </div>
        <div className="py-[50.6px]">
          {data.map((item, index) => (
            <div key={index} className="flex items-center ">
              <img src={item.img} alt="clock" width={342} height={353} />
              <div className="grow">
                <div className="flex justify-between items-center h-[353px] pl-[50px]">
                  <div className="space-y-[17px]">
                    <p className="text-[34px] leading-[51px] text-[#b9b9b9]">
                      COMING SOON
                    </p>
                    <p className="text-[51px] leading-[77px]">{item.text}</p>
                  </div>
                  <div className="bg-[#b9b9b9] w-[204px] h-[85px] flex justify-center items-center gap-[17px]">
                    <p className="text-[34px] font-bold">$VICE</p>
                    <div className="w-[17px] h-[17px] rounded-full bg-[#e00b7c]"></div>
                  </div>
                  <p className="font-bold text-[68px]">{item.price}</p>
                  <div className="space-y-[17px]">
                    <div className="w-[430px] h-[85px] text-[34px] font-bold bg-[#e00b7c] flex justify-center items-center">
                      ENTER NOW
                    </div>
                    <div className="w-[430px] h-[85px] text-[34px] text-[#2f2e2e] font-bold bg-white flex justify-center items-center">
                      MORE INFO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Giveaways;
