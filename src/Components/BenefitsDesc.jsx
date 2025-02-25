import CustomButton from "../atoms/CustomButton";
import { motion } from "framer-motion";

const Descriptioncmp = ({ header, text }) => {
  return (
    <div className="flex flex-col items-start md:w-[30%] w-[80%]">
      <div className="text-[30px] leading-tight">{header}</div>
      <div className="font-poppins leading-normal text-[14px] mt-[31px]">
        {text}
      </div>
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
      <div
        className="w-full relative mt-[110px] bg-no-repeat bg-cover bg-top"
        style={{ backgroundImage: "url(/light1.png)" }}
      >
        {/* Sun Rays (Animated Glow) */}
        {/* <div className="relative w-full">
            <motion.img
              src="sun.png"
              alt="Sun Shine"
              className="w-full absolute top-0 -z-10"
              animate={{
                opacity: [0.5, 1, 0.5], // Fading effect
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            /> */}

        {/* </div> */}
        <div className="w-full flex flex-col text-text_color pt-[300px]">
          <p className="text-[48px] font-Space_Grotesk text-center">
            BENEFITS OF $VICE
          </p>
          <div className="w-full flex flex-col md:flex-row items-center justify-start mt-[80px] md:gap-[10%] gap-[50px] px-[123px]">
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
          <div className="py-[40px] flex justify-center bg-back_color">
            <a
              href="https://vice-io.gitbook.io/vice.io-docs/introduction/market-overview"
              target="_blank"
            >
              <CustomButton text="Learn more" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenefitsDesc;
