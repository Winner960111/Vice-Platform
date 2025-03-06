import { useEffect, useState } from "react";
import CustomButton from "../atoms/CustomButton";
const data = [
  { img: "clock.png", text: "Rolex Submariner", price: 50 },
  { img: "car.png", text: "2025 Lamborghini Revuelto", price: 100 },
  { img: "picture.png", text: "Tomorrowland All Access Pass", price: 50 },
];

const Giveaways = () => {
  const [border, setBorder] = useState("upcoming");
  const [items, setItems] = useState(data);
  const [sheetData, setSheetData] = useState([]);
  const minusPrice = (index) => {
    setItems((items) =>
      items.map((item, i) =>
        i === index ? { ...item, price: Math.max(0, item.price - 50) } : item
      )
    );
  };

  const plusPrice = (index) => {
    setItems((items) =>
      items.map((item, i) =>
        i === index ? { ...item, price: item.price + 50 } : item
      )
    );
  };

  const API_KEY = import.meta.env.VITE_GOOGLESHEET_API_KEY;
  const SHEET_ID = "1p-1R2_naFhjlGys4IgMHhHJf5T_vjJ1o27EJZHTvSfM";
  const RANGE = "VICE GIVEAWAY WINNERS!A3:C"; // Adjust based on your data range

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("this is value========>", result.values);
        setSheetData(result.values);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full text-white pt-[75px] bg-back_color flex justify-center" id="giveaway">
      <div className="w-full max-w-[1600px]">
        <p className="text-[48px] font-Space_Grotesk flex justify-center">
          GIVEAWAYS
        </p>

        <div className="sm:px-[100px] py-[60px]">
          <div className="flex items-start h-[89px] ">
            <div
              onClick={() => setBorder("upcoming")}
              className={`w-[164px] text-[14px] cursor-pointer font-bold ${
                border === "upcoming" &&
                "border-b-[#e00b7c] text-[#e00b7c] border-b-[1px]"
              }  border-solid flex justify-center pb-[17px]`}
            >
              Upcoming
            </div>
            <div
              onClick={() => setBorder("completed")}
              className={`w-[164px] text-[14px] cursor-pointer border-solid font-bold ${
                border === "completed" &&
                "border-b-[#e00b7c] text-[#e00b7c] border-b-[1px]"
              }  flex justify-center pb-[17px]`}
            >
              Completed
            </div>
          </div>
          {border === "upcoming" ? (
            <div className="">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="w-full rounded-[20px] mb-[8px] bg-[#202020]"
                >
                  <div className="pl-[14px] pt-[12px] pb-[5px] pr-[40px] flex items-center sm:flex-row flex-col">
                    <img
                      src={item.img}
                      alt="clock"
                      className="pl-[14px] w-[157px] h-[161px]"
                    />
                    <div className="grow">
                      <div className="flex flex-col lg:flex-row justify-between items-center ml-[13px] gap-[10%]">
                        <div className="space-y-[8px] w-80">
                          <p className="text-[12px] text-[#b9b9b9]">
                            COMING SOON
                          </p>
                          <p className="text-[20px]">{item.text}</p>
                          <p className="text-[12px] text-[#b9b9b9]">
                            56 ENTRIES
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-[#55A5EE] to-[#E00B7C] min-w-[110px] h-[38px] rounded-[40px] flex justify-center items-center gap-1">
                          <p
                            className="text-white font-Space_Grotesk font-bold text-lg cursor-pointer"
                            onClick={() => minusPrice(index)}
                          >
                            -
                          </p>
                          <p className="text-[12px] font-bold px-2 py-1">
                            VICE
                          </p>
                          <p
                            className="text-white font-Space_Grotesk font-bold text-lg cursor-pointer"
                            onClick={() => plusPrice(index)}
                          >
                            +
                          </p>
                        </div>
                        <div className="flex flex-col justify-center items-start">
                          <p className="text-[12px] text-[#D9D9D9]">
                            ENTRY COST
                          </p>
                          <p className="font-bold text-[20px] min-w-20">
                            ${item.price}
                          </p>
                        </div>
                        <CustomButton text={"More info"} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="">
              <div className="title flex items-center text-[#B9B9B9] text-[14px] px-[34px] gap-[8%] font-poppins min-w-[1000px]">
                <p className="w-10">Year</p>
                <p className="w-96">Address</p>
                <p className="">Prize</p>
              </div>
              {sheetData.map((item, index) => (
                <div
                  key={index}
                  className="w-full rounded-[20px] mb-[8px] bg-[#202020] mt-6 min-w-[1000px]"
                >
                  <div className="title flex items-center text-text_color py-7 px-[34px] gap-[8%] text-[14px] font-bold font-poppins">
                    <p className="min-w-10">2025</p>
                    <p className="min-w-96">{item[0]}</p>
                    <p className="text-gradient leading-tight">{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Giveaways;
