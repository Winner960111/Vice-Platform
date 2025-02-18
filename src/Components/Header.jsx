import Squares from '../atoms/Squares';

const Header = () => {
  return (
    <div className="w-full flex flex-col text-text_color">
        <div className="head w-full flex justify-between items-center mt-[96px] mb-[115px]">
            <img src = "VICE_White 2.png" alt = "logo" className="w-[234px] left-[111px] top-[97px] ml-[111px]" />
            <div className="title hidden 2xl:flex text-[32px] font-poppins gap-[79px]">
                <p className="home">Home</p>
                <p className="give">Giveaways</p>
                <p className="plat">Platform</p>
                <p className="doc">Docs</p>
            </div>
            <div className="w-[283px] h-[87px] bg-[url('button_style.png')] bg-no-repeat text-[32px] flex justify-center items-center font-poppins mr-[132px]">Trade now</div>
        </div>
        <div className="w-full h-[1377px] relative flex justify-center items-center">
            <Squares/>
            <img src='Brand.png' className="brand absolute w-[1144] h-[1144]" />      
        </div>
    </div>
  );
};
export default Header;
