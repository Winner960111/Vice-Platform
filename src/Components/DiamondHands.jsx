import CustomButton from "../atoms/CustomButton";

const DiamondHands = () => {

  const scroll_down = () => {
    const target = document.getElementById("vice_feature");
    target.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="diamond-hands-container w-full flex xl:flex-row flex-col mt-[118.5px] relative justify-center items-center bg-back_color px-[40px] gap-[10%]">
      <img 
        src="dispersionglass.png"
        className=" animate-float hover:animate-float_slow xl:w-[40%] w-[600px] p-10 xl:p-0 cursor-pointer"
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
          <a href="https://www.mexc.com/price/vice" target="_blank">
            <CustomButton text="Trade Now"/>
          </a>
          <div className="" onClick={scroll_down}>
          <CustomButton text="Learn More"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondHands;
