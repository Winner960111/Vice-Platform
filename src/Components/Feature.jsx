import { useState } from "react";
import { Experience, Reach, Engagement, Access } from "../atoms/icon";
import CustomButton from "../atoms/CustomButton";
const Feature = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="pl-[242px] pt-[269px] flex text-white">
      <div className="space-y-[82px]">
        <p className="text-[100px] font-medium leading-[57.2px]">FEATURES</p>
        <div className="flex">
          <div className="flex flex-col justify-between text-4xl h-[871px]">
            <div
              className={`h-[218px] pt-[63px] pr-[47px] border-r-8 border-solid  ${
                step === 1 ? "border-[#e00b7c]" : "border-white"
              }`}
            >
              01
            </div>
            <div
              className={`h-[218px] pt-[63px] pr-[47px] border-r-8 border-solid  ${
                step === 2 ? "border-[#e00b7c]" : "border-white"
              }`}
            >
              02
            </div>
            <div
              className={`h-[218px] pt-[63px] pr-[47px] border-r-8 border-solid  ${
                step === 3 ? "border-[#e00b7c]" : "border-white"
              }`}
            >
              03
            </div>
            <div
              className={`h-[218px] pt-[63px] pr-[47px] border-r-8 border-solid  ${
                step === 4 ? "border-[#e00b7c]" : "border-white"
              }`}
            >
              04
            </div>
          </div>
          <div>
            <div className="mt-[45px] pl-[71px]">
              <div className="flex gap-x-6 items-start">
                {Experience}
                <div>
                  <p
                    className="font-bold text-[60px] mt-[-15px]"
                    onClick={() => setStep(1)}
                  >
                    SEAMLESS USER EXPERIENCE
                  </p>
                  <p className="text-[32px] mt-[60px] leading-9">
                    Simple entry into daily, weekly and monthly competition
                    pools via $VICE tokens.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6 mt-[61px] items-start">
                {Reach}
                <div>
                  <p
                    className="font-bold text-[60px]"
                    onClick={() => setStep(2)}
                  >
                    GLOBAL REACH
                  </p>
                  <p className="text-[32px] leading-9 mt-[65px]">
                    All major wallets accepted, with global access to all
                    competitions
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6 mt-[72px] items-start">
                {Engagement}
                <div>
                  <p
                    className="font-bold text-[60px]"
                    onClick={() => setStep(3)}
                  >
                    LONG-TERM ENGAGEMENT
                  </p>
                  <p className="text-[32px] leading-9 mt-[53px]">
                    RewardPlay feature offering APYs and long-term competition
                    pools.
                  </p>
                </div>
              </div>
              <div className="flex gap-x-6 mt-[94px] items-start">
                {Access}
                <div>
                  <p
                    className="font-bold text-[60px]"
                    onClick={() => setStep(4)}
                  >
                    EXCLUSIVE ACCESS
                  </p>
                  <p className="text-[32px] leading-9 mt-[62px]">
                    NFT-based PlayPass for entry to all competitions and
                    exclusive events.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-[90px] mb-[91px]">
              <CustomButton text="Trade now" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="vice_usdt.png"
          alt="vice_usdt"
          className="relative w-[1578px] h-[1578px] z-10 left-[-120px] animate-float"
        />
        <img
          src="feature_group.png"
          alt="feature_group"
          className="absolute right-0 top-48 h-[1165px]"
        />
      </div>
    </div>
  );
};

export default Feature;
