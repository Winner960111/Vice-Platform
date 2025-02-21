import { Experience, Reach, Engagement, Access } from "../atoms/icon";
import CustomButton from "../atoms/CustomButton";
const Feature = () => {

  const movePage = () => {
    window.location.href = "https://www.mexc.com/price/vice";
  };

  return (
    <div className="mt-[134px] pl-[100px] flex text-text_color items-center justify-between lg:flex-row flex-col" id="vice_feature">
      <div className="space-y-[63px]">
        <p className="text-[48px] font-Space_Grotesk uppercase">How it works</p>
        <div className="flex flex-col">
          <div className="flex flex-col items-start gap-[33px]">
              <div className="flex items-start gap-[20px]">
                {Experience}
                <div>
                  <p
                    className="font-bold text-[30px]"
                  >
                    SEAMLESS USER EXPERIENCE
                  </p>
                  <p className="text-[14px] mt-[12px] leading-tight">
                    Simple entry into daily, weekly and monthly competition
                    pools via $VICE tokens.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[20px]">
                {Reach}
                <div>
                  <p
                    className="font-bold text-[30px]"
                  >
                    GLOBAL REACH
                  </p>
                  <p className="text-[14px] mt-[12px] leading-tight">
                    All major wallets accepted, with global access to all
                    competitions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[20px]">
                {Engagement}
                <div>
                  <p
                    className="font-bold text-[30px]"
                  >
                    LONG-TERM ENGAGEMENT
                  </p>
                  <p className="text-[14px] mt-[12px] leading-tight">
                    RewardPlay feature offering APYs and long-term competition
                    pools.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[20px]">
                {Access}
                <div>
                  <p
                    className="font-bold text-[30px]"
                  >
                    EXCLUSIVE ACCESS
                  </p>
                  <p className="text-[14px] mt-[12px] leading-tight">
                    NFT-based PlayPass for entry to all competitions and
                    exclusive events.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[31px] ml-[51px]" onClick={movePage}>
              <CustomButton text="Trade now" />
            </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="vice_usdt.png"
          alt="vice_usdt"
          className="relative w-[720px] z-10 left-[-120px] animate-float"
        />
        <img
          src="feature_group.png"
          alt="feature_group"
          className="absolute right-0 top-20 w-[1120px] md:h-[530px] h-[400px]"
        />
      </div>
    </div>
  );
};

export default Feature;
