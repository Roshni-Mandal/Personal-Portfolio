import image1 from "../assets/img/female-developer-working-on-project-3839575-3202877.webp";
import image2 from "../assets/img/coding-on-pc-icon.webp";
import image3 from "../assets/img/academic-adviser-4045360-3341587.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Find out about ME</h2>
                        <p> I am Roshni Mandal, a enthusiastic and passionate girl, currently persuading my career in B.tech, IT in MNNIT, Allahabad. I am interested in learning coding.<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={image1} alt="Image" />
                                <h5><br></br>Web Developer</h5>
                            </div>
                            <div className="item">
                                <img src={image2} alt="Image"/>
                                <h5><br></br><br></br>Coder</h5>
                            </div>
                            
                            <div className="item">
                            <img src={image3} alt="Image"/>
                                <h5>My Academic Profile</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
