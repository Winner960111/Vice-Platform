import CustomButton from "../atoms/CustomButton";

const DiamondHands = () => {

  const movePage = () => {
    window.location.href = "https://www.mexc.com/price/vice"
  }
  return (
    <div className="diamond-hands-container w-full flex xl:flex-row flex-col mt-[118.5px] relative justify-center items-center bg-back_color px-[40px] gap-[10%]">
      <img 
        src="dispersionglass.png"
        className="animate-float xl:w-[40%] w-[600px] p-10 xl:p-0"
        alt="dispersion glass"
      />
      <div className="diamond-hands-description flex flex-col xl:w-[40%] w-[70%] text-text_color items-start leading-tight  xl:-mt-36">
        <p className="text-[48px] uppercase font-Space_Grotesk">Diamond Hands,
        Digital wealth</p>
        <p className="text-[28px] font-poppins mt-[26px] mb-[40px]">
          Transforming the crypto market with high-value prizes
          like performance cars, luxury items, and VIP experiences.
        </p>
        <div className="diamond-hands-buttons flex gap-[34px] font-poppins">
          <div className="" onClick={movePage}>
            <CustomButton text="Trade Now"/>
          </div>
          <div className="">
          <CustomButton text="Learn More"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondHands;
