import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import "./carousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      fade
      className="position-absolute top-0"
      activeIndex={index}
      onSelect={handleSelect}
      style={{ width: "100%", height: "100%" }}
    >
      {/* First slide */}
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lithohtml.themezaa.com/images/home-startup-slider-bg-01.jpg"
          alt="First slide"
          style={{ height: "600px" }}
        />

        <Carousel.Caption className=" poscaption  ">
          <h1 className="carocaption ">
            Start your online <br />
            bussiness today
          </h1>
          <div className="carosubcaption">
            The best way to promote your business
          </div>
          <br />
          <button
            type="button"
            class="btn btn-success btn-lg no-borderRadiusImportant"
            style={{
              border: "1px solid green",
              borderRadius: "50% !important",
            }}
          >
            Get Started Now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://lithohtml.themezaa.com/images/home-startup-slider-bg-02.jpg"
          alt="Second slide"
          style={{ height: "600px" }}
        />

        <Carousel.Caption className=" poscaption  ">
          <h1 className="carocaption">
            Combine thinking <br />
            and technical
          </h1>
          <div className="carosubcaption">
            The best way to promote your business
          </div>
          <br />
          <button
            type="button"
            class="btn btn-success btn-lg no-borderRadiusImportant"
            style={{
              border: "1px solid green",
              borderRadius: "50% !important",
            }}
          >
            Get Started Now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="position-relative">
        <div className="carouseluy">
          <img
            className="d-block w-100"
            src="https://lithohtml.themezaa.com/images/home-startup-slider-bg-03.jpg"
            alt="Third slide"
            style={{ height: "600px" }}
          />
        </div>

        <Carousel.Caption className=" poscaption">
          <h1 className="carocaption">
            Delivering creative <br /> digital products
          </h1>
          <div className="carosubcaption">
            The best way to promote your business
          </div>
          <br />
          <button
            type="button"
            class="btn btn-success btn-lg no-borderRadiusImportant"
            style={{
              border: "1px solid green",
              borderRadius: "50% !important",
            }}
          >
            Get Started Now
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;