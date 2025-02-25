import CustomButton from "../atoms/CustomButton";
const Feature = () => {

  return (
    <div
      className="pt-[134px] pl-[100px] flex text-text_color items-center justify-between lg:flex-row flex-col bg-back_color" id="how" >
      <div className="space-y-[63px]">
        <p className="text-[48px] font-Space_Grotesk uppercase">How it works</p>
        <div className="flex flex-col">
          <div className="flex flex-col items-start gap-[33px]">
              <div className="flex items-start gap-[20px]">
                <img src="icon1.png" alt="" />
                <div>
                  <p
                    className="font-bold text-[30px]"
                  >
                    Enterprise Grade, On-Chain
                  </p>
                  <p className="text-[14px] mt-[12px] leading-tight w-[600px]">
                  Host secure, scalable daily, weekly, and monthly competition pools using advanced blockchain infrastructure.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[20px]">
                <img src="icon2.png" alt="" />
                <div>
                  <p
                    className="font-bold text-[30px]"
                  >
                    Accelerate Global Reach
                  </p>
                  <p className="text-[14px] mt-[12px] leading-tight w-[600px]">
                  Attract worldwide participation by accepting multiple
                    cryptocurrencies, expanding your brand&apos;s market presence.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[20px]">
                <img src="icon3.png" alt="" />
                <div>
                  <p
                    className="font-bold text-[30px]"
                  >
                    Drive Fan Engagement
                  </p>
                  <p className="text-[14px] mt-[12px] leading-tight w-[600px]">
                  Leverage RewardPlay APIs to sustain user interest and foster
                  long-term loyalty through continuous incentives.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[20px]">
                <img src="icon4.png" alt="" />
                <div>
                  <p
                    className="font-bold text-[30px]"
                  >
                    Unlock NFT Exclusivity
                  </p>
                  <p className="text-[14px] mt-[12px] leading-tight w-[600px]">
                  Offer premium, members-only competitions and perks via NFT-based passes, elevating brand prestige and community devotion.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[31px] ml-[51px] flex gap-[20px]">
              <a href="https://www.mexc.com/price/vice" target="_blank">
                  <CustomButton text="Trade Now"/>
                </a>
                <a href="https://vice-io.gitbook.io/vice.io-docs/introduction/vice-overview/vice-platform" target="_blank">
                  <CustomButton text="Learn More" />
                </a>
            </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="vice_usdt.png"
          alt="vice_usdt"
          className="relative w-[720px] z-10 left-[-120px] animate-float hover:animate-float_slow cursor-pointer"
        />
        <img
          src="feature_group.png"
          alt="feature_group"
          className="absolute right-0 top-20 w-[1120px] md:h-[530px] sm:h-[300px]"
        />
      </div>
    </div>
  );
};

export default Feature;
