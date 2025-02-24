import CustomButton from "../atoms/CustomButton"
import { motion } from "framer-motion";
import Squares from '../atoms/Squares';

export default function HeroSection() {
    return (
    <div className="relative w-full bg-back_color px-[254.24px] mt-28 z-30">
      <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 -z-20">
        <Squares />
      </div>
        {/* Left Moon Gradient */}
            <motion.img
              src="moon-left.jpg" // Update path if necessary
              alt="Sun Shine"
              className="absolute top-[-250px] left-0 -z-10"
              animate={{
                opacity: [0.5, 1, 0.5], // Fading effect
                // scale: [1, 1.05, 1], // Slight pulsation
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <img src="moon-mask1.png" alt="" className="absolute top-0 left-0 -z-10"/>
  
        {/* Right Moon Gradient */}
            <motion.img
              src="moon-right.jpg" // Update path if necessary
              alt="Sun Shine"
              className="absolute bottom-[-400px] right-0 -z-10"
              animate={{
                opacity: [0.5, 1, 0.5], // Fading effect
                // scale: [1, 1.05, 1], // Slight pulsation
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <img src="moon-mask2.png" alt="" className="absolute bottom-[-150px] right-0 -z-10" />
  
        {/* Content */}
        <div className="flex flex-col items-center justify-center px-4 py-[190px] text-text_color z-0">
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
  
  