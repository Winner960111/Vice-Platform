import CustomButton from "../atoms/CustomButton"
import { motion } from "framer-motion";

export default function HeroSection() {
    return (
      <div className="relative w-full bg-back_color px-[254.24px] mt-16 z-0">
        {/* Left Moon Gradient */}
        <div className="absolute left-0 top-0 overflow-hidden w-[300px] h-[597px] -z-10">
            <motion.img
              src="moon-left.jpg" // Update path if necessary
              alt="Sun Shine"
              className="absolute top-0 transform w-full h-full"
              animate={{
                opacity: [0.5, 1, 0.5], // Fading effect
                scale: [1, 1.05, 1], // Slight pulsation
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
  
        {/* Right Moon Gradient */}
        <div className="absolute right-0 bottom-0 overflow-hidden w-[300px] h-[597px] -z-10">
            <motion.img
              src="moon-right.jpg" // Update path if necessary
              alt="Sun Shine"
              className="absolute top-0 transform -translate-x-1/2 w-full h-full"
              animate={{
                opacity: [0.5, 1, 0.5], // Fading effect
                scale: [1, 1.05, 1], // Slight pulsation
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
  
        {/* Content */}
        <div className="z-10 flex flex-col items-center justify-center px-4 py-[190px] text-text_color">
          <p className="w-[90%] text-center font-Space_Grotesk text-[48px] leading-tight">
            FUTURE OF DIGITAL WEALTH, POWERED BY $VICE
          </p>
          <p className="w-[90%] text-[14px] mt-4 text-center">Sign up to receive exclusive offers, road map updates, and upcoming giveaways.</p>
          <div className="flex mt-11 gap-1 flex-col lg:flex-row items-center">
            <input className="w-80 h-10 rounded-[10px] bg-[#3D3D3D] p-3" placeholder="Email Address" />
            <CustomButton text="Sign up" />
          </div>
        </div>
      </div>
    )
  }
  
  