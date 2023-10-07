import jvs from "../assets/img/javascript.jpeg";
import react from "../assets/img/react.png";
import twig from "../assets/img/twig.png";
import php from "../assets/img/php.jpg";
import symfony from "../assets/img/symfony.png";
import node from "../assets/img/node.png";
import python from "../assets/img/python.png";
import laravel from "../assets/img/laravel.jpg";
import photoshop from "../assets/img/photoshop.png";
import ilustrator from "../assets/img/ilustrator.png";
import adobexd from "../assets/img/adobexd.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
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
                        <h2>FrontEnd</h2>
                          <p>Among my skills I like to highlight that I have knowledge in programming, graphic design and marketing.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={jvs} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={twig} alt="Image" />
                                <h5>Twig</h5>
                            </div>
                        </Carousel>
                        <br></br>
                        <h2>BackEnd</h2>
                          <p>Among my skills I like to highlight that I have knowledge in programming, graphic design and marketing.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={php} alt="Image" />
                                <h5>Php</h5>
                            </div>
                            <div className="item">
                                <img src={symfony} alt="Image" />
                                <h5>Symfony</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                                <h5>NodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={laravel} alt="Image" />
                                <h5>Laravel</h5>
                            </div>
                        </Carousel>
                        <br></br>
                        <h2>Graphic Design</h2>
                          <p>Among my skills I like to highlight that I have knowledge in programming, graphic design and marketing.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={photoshop} alt="Image" />
                                <h5>Photoshop</h5>
                            </div>
                            <div className="item">
                                <img src={ilustrator} alt="Image" />
                                <h5>Ilustrator</h5>
                            </div>
                            <div className="item">
                                <img src={adobexd} alt="Image" />
                                <h5>Adobe Xd</h5>
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
