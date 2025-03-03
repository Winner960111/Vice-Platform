import CustomButton from "../atoms/CustomButton";
import { motion } from "framer-motion";

const Descriptioncmp = ({ header, text }) => {
  return (
    <div className="flex flex-col items-center md:w-[30%] w-[80%]">
      <div className="text-[30px] leading-tight font-bold">{header}</div>
      <div className="font-poppins leading-normal text-[14px] mt-[31px] text-center">
        {text}
      </div>
    </div>
  );
};

const BenefitsDesc = () => {
  const contents = [
    {
      header: "Blockchain Fairness",
      text: "Every transaction is on-chain, ensuring full transparency. Built for Web3 users, by Web3 enthusiasts.",
    },
    {
      header: "No More Scams",
      text: "No More Scams - Eliminate fake giveaways and rug pulls with decentralized verification.",
    },
    {
      header: "Global & Borderless",
      text: "Global & Borderless - Participate from anywhere, instantly, with entries via crypto payments.",
    },
  ];

  return (
    <>
      <div
        className="w-full relative mt-[110px] bg-no-repeat bg-cover bg-top z-20"
        style={{ backgroundImage: "url(/back-light1.png)" }}
      >
        {/* Sun Rays (Animated Glow) */}
        <div className="relative w-full">
          <motion.img
            src="light1.png"
            alt="Sun Shine"
            className="w-full absolute top-[-30px] -z-10"
            animate={{
              opacity: [0.5, 1, 0.5], // Fading effect
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="w-full flex flex-col text-text_color pt-[300px]">
          <p className="text-[48px] font-Space_Grotesk text-center">
            WHY $VICE
          </p>
          <div className="w-full flex flex-col md:flex-row items-start justify-center mt-[80px] md:gap-[10%] gap-[50px] px-[123px]">
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
