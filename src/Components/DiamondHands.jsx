import CustomButton from "../atoms/CustomButton";

const DiamondHands = () => {
  const scroll_down = () => {
    const target = document.getElementById("vice_feature");
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="diamond-hands-container w-full mt-36 ">
      <div className="w-full flex flex-col lg:flex-row relative justify-center items-center pl-5 pr-36 gap-24">
        <img
          src="dispersionglass.png"
          className=" animate-float hover:animate-float_slow w-[600px] p-10 cursor-pointer"
          alt="dispersion glass"
        />
        <div className="w-[600px] flex flex-col text-text_color leading-tight xl:-mt-36">
          <p className="text-[48px] uppercase font-Space_Grotesk">
            Diamond Hands, Digital wealth
          </p>
          <p className="text-[28px] font-poppins mt-[26px] mb-[40px] tracking-tight">
            Transforming the crypto market with high-value prizes like
            performance cars, luxury items, and VIP experiences.
          </p>
          <div className="diamond-hands-buttons flex gap-[34px] font-poppins">
            <a href="https://www.mexc.com/price/vice" target="_blank">
              <CustomButton text="Trade Now" />
            </a>
            <div className="" onClick={scroll_down}>
              <CustomButton text="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiamondHands;
