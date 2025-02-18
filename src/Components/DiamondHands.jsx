import DispersionGlassImg from "../assets/dispersionglass.png";
import ButtonBackgroundImg from "../assets/buttong-background.png";

const DiamondHands = () => {
  return (
    <div className="diamond-hands-container flex flex-row gap-48 px-[60px] relative justify-center items-center bg-black">
      <div className="diamond-hands-images w-1/2 py-[300px]">
        <img
          src={DispersionGlassImg}
          className="z-0  top-0"
          alt="dispersion glass"
        />
        <img
          src={DispersionGlassImg}
          className="z-10 absolute top-[600px] left-[200px]"
          alt="dispersion glass"
        />
      </div>
      <div className="diamond-hands-description flex flex-col gap-[45px] w-1/2 text-white">
        <div className="diamond-hands-description-header font-space font-medium text-[100px] leading-[100px] tracking-[-1.2px]">
          <h1 className="">DIAMOND HANDS,</h1>
          <h1 className="">DIGITAL WEALTH</h1>
        </div>
        <div className="">
          <p className="text-[60px] font-poppins">
            Transforming the crypto <br /> market with high-value prizes
            <br /> like performance cars, luxury
            <br /> items, and VIP experiences.
          </p>
        </div>
        <div className="diamond-hands-buttons flex gap-[34px] font-poppins">
          <button
            className="w-[283px] h-[87px] font-poppins font-normal text-[24px] leading-[36px] text-white flex items-center justify-center bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${ButtonBackgroundImg})` }}
          >
            Join Now
          </button>
          <button className="relative w-[283px] h-[87px] rounded-[17px] text-white font-medium text-[24px] flex items-center justify-center bg-black border-2 border-cyan-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiamondHands;
