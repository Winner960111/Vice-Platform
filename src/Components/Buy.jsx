import { useEffect } from "react";
import CustomButton from "../atoms/CustomButton";
const Buy = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.coingecko.com/gecko-coin-price-chart-widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full relative mt-[-50px] flex flex-col items-center justify-center">
        <img src="Bull1.png" alt="bull" className="absolute top-0 left-0" />
        <img src="Bull.png" alt="bull" className="absolute top-0 right-0" />
      <div className="w-full flex flex-col items-center justify-center text-text_color tracking-tight leading-tight mt-72 mb-16 z-10">
            <p className="w-[50%] text-[70px] font-Space_Grotesk text-center uppercase">BUY LOW, SELL HIGH, Proof in Numbers</p>
            <p className="w-[50%] text-[28px] mt-8 text-center pb-10">Driving decentralized innovation by incentivizing web3 pioneers to build. Visionary leaders
            on the blockchain.</p>
            <a href="https://www.mexc.com/exchange/VICE_USDT?_from=search" target="_blank" className="">
              <CustomButton text="Trade now" />
            </a>
        </div>
        <div className="flex justify-center items-center p-10 lg:flex-row flex-col gap-32">
            <div className="flex flex-col items-center justify-center">
                <img src="Chart.png" alt="" className="mb-12"/>
                <a
                  href="https://vice-io.gitbook.io/vice.io-docs/usdvice-token/token-tech-info"
                  target="_blank"
                  className=""
                >
                  <CustomButton text="Token info" />
                </a>
            </div>
            <gecko-coin-price-chart-widget
            locale="en"
            dark-mode="true"
            outlined="true"
            coin-id="vice-2"
            initial-currency="usd"
            className = "w-[553px]"
          ></gecko-coin-price-chart-widget>
        </div>

    </div>
  );
};

export default Buy;
