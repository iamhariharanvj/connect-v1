import "./styles/carousel.css";
import DoubtBannerImg from "../../Resources/Images/Authentication/doubtBanner.jpg"
function Carousel() {
  return (
    <div>
        <div className="doubtBanner">
            <h1 className="title">Doubt</h1>
            <p className="description">Lorem Ipsum Lorem Ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore mag</p> 
            <img className="bannerImg"  src={DoubtBannerImg}/>
        </div>

    </div>
  )
}

export default Carousel