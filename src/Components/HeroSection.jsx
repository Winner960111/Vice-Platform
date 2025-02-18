import moonLeft from '../assets/img/moon-left.jpg';
import mooonRight from '../assets/img/moon-right.jpg';
import buttonImage from "../assets/img/btn-bg.jpg"
export default function HeroSection() {
    return (
      <div className="relative w-full bg-black px-[254.24px]">
        {/* Left Moon Gradient */}
        <div className="absolute left-0 h-[937px] w-[406px] top-0">
          <img
            src={moonLeft}
            alt=""
            className="object-cover h-full w-full"
            height={"937px"}
            width={"406px"}
            // style={{
            //   clipPath: "polygon(0 0, 50% 0, 100% 100%, 0 100%)",
            //   transform: "scaleX(-1)",
            // }}
          />
        </div>
  
        {/* Right Moon Gradient */}
        <div className="absolute right-0 bottom-0 w-[498px]">
          <img
            src={mooonRight}
            alt=""
            className="object-cover h-full w-full"
            height={'661px'}
            width={"498px"}
            // style={{
            //   clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0 100%)",
            // }}
          />
        </div>
  
        {/* Content */}
        <div className="z-10 flex flex-col items-center justify-center px-4 py-[439px]">
          <h1 className="text-center text-white text-3xl md:text-5xl lg:text-[100px] font-bold leading-tight mb-12 z-10">
            FUTURE OF DIGITAL WEALTH,
            <br />
            POWERED BY $VICE
          </h1>
          <button className="group rounded-[34.89px] w-[500px] h-[153.71px] text-white font-semibold text-[32px] mt-16" style={{ backgroundImage: `url(${buttonImage})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
                Trade Now
          </button>
        </div>
      </div>
    )
  }
  
  