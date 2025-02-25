import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TokenSlide = ({ href, logoSrc }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="relative border border-[#4141414D] px-24 py-7 flex justify-center items-center">
      <img src={logoSrc} alt="logo" className="w-[60px]" />
      {[
        "top-[-2px] right-[-7px]",
        "top-[-2px] left-[-7px]",
        "bottom-[-2px] right-[-7px]",
        "bottom-[-2px] left-[-7px]",
      ].map((pos, index) => (
        <img
          key={index}
          src={index < 2 ? "bounder1.png" : "bounder2.png"}
          alt=""
          className={`absolute ${pos}`}
        />
      ))}
    </div>
  </a>
);

const Blockchain = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full my-[52px] px-20 flex flex-wrap items-center justify-center">
        <Carousel
          responsive={responsive}
          dotListClass="custom-dot-list-style"
          containerClass="w-full min-w-full min-h-[200px]"
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          ssr={true}
          infinite={true}
        >
          <TokenSlide
            href="https://www.gate.io/price/vice-token-vice"
            logoSrc="logo1.png"
          />
          <TokenSlide
            href="https://www.mexc.com/price/vice"
            logoSrc="logo2.png"
          />
          <TokenSlide
            href="https://coinmarketcap.com/currencies/vice-token/"
            logoSrc="logo3.png"
          />
          <TokenSlide
            href="https://www.coingecko.com/en/coins/vice"
            logoSrc="logo4.png"
          />
          <TokenSlide href="#" logoSrc="logo5.png" />
        </Carousel>
      </div>
      <div className="flex flex-col justify-center items-center px-36">
        <p className="w-full flex font-Space_Grotesk text-[70px] text-text_color mt-[120px] mb-[34px] uppercase  leading-tight tracking-tight">
          future of digital giveaways, powered by BLOCKCHAIN
        </p>
        <p className="w-full flex font-poppins text-[28px] text-text_color mb-[160px]  leading-tight tracking-tight">
          $VICE is revolutionizing the crypto ecosystem by leveraging blockchain
          technology for full transparency and security. Bull run energy.
        </p>
      </div>
    </div>
  );
};
export default Blockchain;
