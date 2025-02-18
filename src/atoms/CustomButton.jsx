
const CustomButton = ({ text }) => (
  <div className="group relative">
    <button
      className="w-[285px] h-[87px] desktop:w-[140px] desktop:h-[43px] font-poppins font-normal text-[24px] desktop:text-[12px] leading-[36px] text-white flex items-center justify-center bg-no-repeat bg-cover bg-center 
      "
      style={{ backgroundImage: "url('button-background.png')" }}
    >
      <p className="z-10 "> {text} </p>
    </button>
    <div
      // src={}
      alt="Button Background"
      className="absolute w-[285px] h-[87px] desktop:w-[140px] desktop:h-[43px] bg-[#111113] rounded-[17px] inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-300 border-2 border-cyan-500 group-hover:animate-pulse"
    />
  </div>
);
export default CustomButton;