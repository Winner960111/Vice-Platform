const Photo = ({ imageUrl, name, role }) => {
  return (
    <div className="flex flex-col items-start w-[200px]">
      <img src={imageUrl} alt="" className="w-full" />
      <p className="text-[14px] font-Space_Grotesk text-text_color mt-4 font-bold">
        {name}
      </p>
      <p className="text-[12px] font-Space_Grotesk text-text_color mt-2">
        {role}
      </p>
    </div>
  );
};

const Visionaries = () => {
  return (
    <>
      <div className="w-full flex justify-center px-20 md:px-60 mt-36">
        <div className="flex flex-col items-center justify-center max-w-[1600px]">
          <p className="text-[48px] font-Space_Grotesk uppercase text-text_color text-center">
            MEET OUR VISIONARIES
          </p>
          <div className="flex justify-center items-start mt-20 gap-10 font-poppins flex-wrap lg:flex-nowrap">
            <Photo
              imageUrl="1.png"
              name="ADAM PEARSALL"
              role="CHIEF EXECUTIVE OFFICER (CEO)"
            />
            <Photo
              imageUrl="3.png"
              name="MICHAEL VASILE"
              role="CHIEF BUSINESS DEVELOPMENT OFFICER (CBDO)"
            />
            <Photo imageUrl="4.png" name="RENI ACHKAR" role="HEAD OF GROWTH " />
            <Photo
              imageUrl="2.png"
              name="LOUIS BROOMFIELD"
              role="CHIEF MARKETING OFFICER (CMO)"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Visionaries;
