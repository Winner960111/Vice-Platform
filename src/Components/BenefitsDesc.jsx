
import GridLine from "../assets/grid-line1.png"
// import EllipseLine from "../assets/ellipse-line.png"
import CustomButton from "../atoms/CustomButton";


const Descriptioncmp = ({ header, text }) => {
  return (
    <div className="flex flex-col gap-[100px] desktop:gap-[50px] p-16 desktop:p-8 justify-between">
      <div className="text-[60px] desktop:text-[30px] leading-tight">{header}</div>
      <div className="font-poppins font-normal text-3xl desktop:text-xl leading-[48px] tracking-normal">{text}</div>
      {/* <div> */}
        <CustomButton text="Learn More"/>
      {/* </div> */}
    </div>
  );
};

const BenefitsDesc = () => {
  const contents = [
    {
      header: "Captivating Narrative",
      text: "Merging the passion for supercars, luxury items, and crypto, we are poised to captivate a highly engaged audience.",
    },
    {
      header: "Unrivaled Rewards",
      text: "Daily, weekly and monthly giveaways of performance cars, luxury items, and VIP experiences, delivering immense value to users.",
    },
    {
      header: "Targeted Marketing",
      text: "Leveraging our extensive network of creators and partners in the automotive and luxury spaces to drive engagement and entries.",
    },
  ];
  
  return (
    <>
      <div className=" flex flex-col gap-[180px] px-[400px] py-[250px] desktop:px-[200px] desktop:py-[125px] bg-[#111113] text-white bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${GridLine})` }}>
        {/* <img src={EllipseLine} alt="color line" className="z-10" /> */}
        <div className="flex justify-center font-space">
          <p className="font-space font-medium text-[100px] desktop:text-[50px] leading-[57.2px] tracking-[-1.2px] text-center">
            BENEFITS OF $VICE
          </p>
        </div>
        <div className="flex flex-row gap-[200px] desktop:gap-[100px]">
          {contents?.map((content, index) => {
            return (
              <Descriptioncmp
                key={index}
                header={content.header}
                text={content.text}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BenefitsDesc;
