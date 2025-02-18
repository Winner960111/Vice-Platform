import Header from "../Components/Header.jsx";
import Blockchain from "../Components/Blockchain.jsx";
import Video from "../Components/Video.jsx";
import DiamondHands from "../Components/DiamondHands.jsx";
import BenefitsDesc from "../Components/BenefitsDesc.jsx"
import Feature from "../Components/Feature.jsx";
import Giveaways from "../Components/Giveaways.jsx";
    
const LandingPage = () => {
  return (
    <div className="bg-back_color">
        <Header/>
        <Blockchain />
        <Video/>
        <DiamondHands />
        <BenefitsDesc />
        <Feature />
        <Giveaways />
    </div>
  );
};
export default LandingPage;
