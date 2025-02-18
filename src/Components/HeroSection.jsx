import CustomButton from "../atoms/CustomButton"

export default function HeroSection() {
    return (
      <div className="relative w-full bg-back_color px-[254.24px]">
        {/* Left Moon Gradient */}
        <div className="absolute left-0 h-[937px] w-[406px] top-0">
          <img
            src='moon-left.jpg'
            alt=""
            className="object-cover h-full w-full"
            height={"937px"}
            width={"406px"}
          />
        </div>
  
        {/* Right Moon Gradient */}
        <div className="absolute right-0 bottom-0 w-[498px]">
          <img
            src='moon-right.jpg'
            alt=""
            className="object-cover h-full w-full"
            height={'661px'}
            width={"498px"}
          />
        </div>
  
        {/* Content */}
        <div className="z-10 flex flex-col items-center justify-center px-4 py-[439px]">
          <h1 className="text-center font-Space_Grotesk text-white text-3xl md:text-5xl lg:text-[100px] leading-tight mb-12">
            FUTURE OF DIGITAL WEALTH,
            <br />
            POWERED BY $VICE
          </h1>
          <div className="mt-16">
          <CustomButton text="Trade now" />
          </div>
        </div>
      </div>
    )
  }
  
  