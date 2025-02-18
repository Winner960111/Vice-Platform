import Header from "../Components/Header.jsx";
import Blockchain from "../Components/Blockchain.jsx";
import Video from "../Components/Video.jsx";
const LandingPage = () => {
  return (
    <div className="bg-back_color">
        <Header/>
        <Blockchain />
        <Video/>
    </div>
  );
};
export default LandingPage;
