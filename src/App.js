import "./App.css";
import React, { useState } from "react";
import cabbage from "./assets/image1.jpeg";
import mango from "./assets/image2.jpeg";
import fig from "./assets/image3.jpeg";
import gaze from "./assets/image4.jpeg";
import peach from "./assets/image5.jpeg";
import avocado from "./assets/image6.jpeg";
import { ReactComponent as BackArrow } from './assets/arrow-left.svg';
import { ReactComponent as NextArrow} from './assets/arrow-right.svg';

const images = [cabbage, mango, fig, gaze, peach, avocado];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleNext = () => {
    // const length = images.length - 1;
    setCurrentImage((currentImage) => (currentImage + 1) % images.length)

  };

  const handleBack = () => {
    setCurrentImage(
      (currentImage) => (currentImage - 1 + images.length) % images.length
    );
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1>Zesty</h1>
        <h2>
          A photography project <br /> by Ella Fieldling
        </h2>
      </header>

      <figure>
        <nav>
          <BackArrow onClick={handleBack } />
          <NextArrow onClick={handleNext} />
        </nav>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}

        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            // onClick={handleClick}
            onLoad={handleImageLoad}
            style={{opacity: currentImage === index ? 1 : 0}}
            // className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
      <p>Copyrights 2023 Katrina Ariola. All rights reserved.</p>
    </section>
  );
};

export default App;
