const Photo = ({ imageUrl, name, role }) => {
    return(
        <div className="flex flex-col items-start w-[230px]">
            <img src={imageUrl} alt="" className="w-full" />
            <p className="text-[14px] font-Space_Grotesk text-text_color mt-4 font-bold">{name}</p>
            <p className="text-[12px] font-Space_Grotesk text-text_color mt-2">
            {role}
            </p>
        </div>
    );
};

const Visionaries = () => {
    return(
        <>
            <div className="w-full flex flex-col items-start justify-center px-20 md:px-60 mt-36">
                <p className="text-[48px] font-Space_Grotesk uppercase text-text_color">MEET OUR VISIONARIES</p>
                <div className="flex justify-center items-start mt-20 gap-16 font-poppins flex-wrap">
                    <Photo
                    imageUrl="1.png"
                    name="ADAM PEARSALL"
                    role="CHIEF EXECUTIVE OFFICER (CEO)"/>
                    <Photo
                    imageUrl="3.png"
                    name="MICHAEL VASILE"
                    role="CHIEF BUSINESS DEVELOPMENT OFFICER (CBDO)"/>
                    <Photo
                    imageUrl="4.png"
                    name="RENI ACHKAR"
                    role="HEAD OF GROWTH "/>
                    <Photo
                    imageUrl="2.png"
                    name="LOUIS BROOMFIELD"
                    role="CHIEF MARKETING OFFICER (CMO)"/>
            
                </div>
            </div>
        </>
    );
}
export default Visionaries;
