import CustomButton from "../atoms/CustomButton";

const DiamondHands = () => {
  return (
    <div className="diamond-hands-container flex flex-row gap-48 px-[60px] relative justify-center items-center bg-back_color">
      <div className="diamond-hands-images w-1/2 py-[300px]">
        <img
          src="dispersionglass.png"
          className="z-0 top-0 animate-float desktop:w-[500px] desktop:h-[500px]"
          alt="dispersion glass"
        />
        <img
          src="dispersionglass.png"
          className="z-10 absolute top-[600px] desktop:top-[450px] left-[200px] desktop:left-[150px] desktop:w-[500px] desktop:h-[500px] animate-float"
          alt="dispersion glass"
        />
      </div>
      <div className="diamond-hands-description flex flex-col gap-[45px] w-1/2 text-white">
        <div className="diamond-hands-description-header font-space font-medium text-[100px] desktop:text-[50px] leading-[100px] desktop:leading-[50px] tracking-[-1.2px]">
          <h1 className="">DIAMOND HANDS,</h1>
          <h1 className="">DIGITAL WEALTH</h1>
        </div>
        <div className="">
          <p className="text-[60px] desktop:text-[30px] font-poppins">
            Transforming the crypto market with high-value prizes
            like performance cars, luxury items, and VIP experiences.
          </p>
        </div>
        <div className="diamond-hands-buttons flex gap-[34px] font-poppins">
          <CustomButton text="Join Now"/>
          <CustomButton text="Learn More"/>
        </div>
      </div>
    </div>
  );
};

export default DiamondHands;
