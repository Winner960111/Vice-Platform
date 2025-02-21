import Squares from '../atoms/Squares';
import CustomButton from '../atoms/CustomButton';
const Header = () => {

  const movePage = () => {
    window.location.href = "https://www.mexc.com/price/vice";
  };

  return (
    <div className="w-full flex flex-col text-text_color">
        <div className="head w-full flex justify-between items-center mt-[44px] mb-[52.26px]">
            <img src = "VICE_White 2.png" alt = "logo" className="w-[110px] left-[40px] top-[44px] ml-[48px]" />
            <div className="title hidden md:flex text-[14px] font-poppins gap-[40px]">
                <p className="home cursor-pointer">Home</p>
                <p className="give cursor-pointer">Giveaways</p>
                <p className="plat cursor-pointer">Platform</p>
                <p className="doc cursor-pointer">Docs</p>
            </div>
            <div className="flex justify-center items-center mr-[60px]" onClick={movePage}><CustomButton text="Trade now"/></div>
        </div>
        <div className="w-full h-[629.74px] relative flex justify-center items-center">
            <Squares/>
            <img src='Brand.png' className="brand absolute w-[524px]" />      
        </div>
    </div>
  );
};
export default Header;
