import { useState } from 'react';
import Squares from '../atoms/Squares';
import CustomButton from '../atoms/CustomButton';

const Header = () => {

  const [status, setStatus] = useState(0);

  return (
    <div className="relative w-full flex flex-col text-text_color">
        <div className="head w-full flex justify-between items-center py-8 sticky top-0 z-50 bg-back_color">
            <a href="#">
              <img src = "VICE_White 2.png" alt = "logo" className="min-w-[110px] w-[110px] left-[40px] top-[44px] ml-[48px]" />
            </a>
            <div className="title hidden md:flex text-[14px] font-poppins font-bold">
                <a href='#'><p className={`${status == 0 ? "border-solid border-b-4 border-white":""} cursor-pointer p-5`} onClick={()=>setStatus(0)}>Home</p></a>
                <a href='#giveaway'><p className={`${status == 1 ? "border-solid border-b-4 border-white":""} cursor-pointer p-5`} onClick={()=>setStatus(1)}>Giveaways</p></a>
                <a href='#how'><p className={`${status == 2 ? "border-solid border-b-4 border-white":""} cursor-pointer p-5`} onClick={()=>setStatus(2)}>Platform</p></a>
                <a href='#'><p className={`${status == 3 ? "border-solid border-b-4 border-white":""} cursor-pointer p-5`} onClick={()=>setStatus(3)}>Docs</p></a>
            </div>
            <div className="flex justify-center items-center mr-[60px]">
              <a href="https://www.mexc.com/price/vice" target='_blank'>
                <CustomButton text="Trade now"/>
              </a>
            </div>
        </div>
        <div className="w-full h-[629.74px] relative flex justify-center items-center">
            <Squares/>
            <img src='Brand.png' className="brand absolute w-[524px]" />
            <div className="absolute bg-black w-full h-[629.74px] opacity-40"></div>
            <div className="w-full absolute flex flex-col justify-center items-center">
                <p className='text-center uppercase font-Space_Grotesk text-[70px]'>BUILD, INNOVATE, DECENTRALIZE</p>
                <p className="w-full uppercase font-Space_Grotesk text-[30px] text-center mb-5">$vice/usdt NOW TRADING ON GATE.IO AND MEXC</p>
                <CustomButton text="Access token" />
            </div>
        </div>
    </div>
  );
};
export default Header;
