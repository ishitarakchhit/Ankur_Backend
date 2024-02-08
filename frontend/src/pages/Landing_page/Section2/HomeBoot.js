import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../Homebg1.png";


function HomeBoot() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 " alt="#" src={img} />
        
          
        
      </Carousel.Item>      
    </Carousel>
  );
}

export default HomeBoot;
