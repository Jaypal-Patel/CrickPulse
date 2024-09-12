import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <AwesomeSlider
      className="overflow-hidden flex-grow-0 w-[100%] h-[100vh] mt-1"
      selected={currentIndex}
    >
      <div className="flex h-full w-full">
        <div className="w-full">
          <img
            src="/public/Hero/India3.webp"
            alt="img1"
            className="object-cover w-full bg-center"
          />
        </div>
        <div className="absolute top-[50%] right-[50%]">
          <button className="bg-red-500 text-white">CLick me</button>
        </div>
      </div>
      <div className="flex w-full h-fit">
        <div className="w-full">
          <img
            src="/public/Hero/India3.webp"
            alt="img1"
            className="object-cover w-full bg-center"
          />
        </div>
        <div className="absolute top-[50%] right-[50%]">
          <button className="bg-red-500 text-white">CLick me</button>
        </div>
      </div>
      {/* <div className="flex w-full h-full">
        <img
          src="/public/Hero/India2.webp"
          alt="img1"
          className="object-cover w-full"
        />
      </div>
      <div className="flex w-full h-full">
        <img
          src="/public/Hero/India3.webp"
          alt="img1"
          className="object-cover w-full"
        />
      </div> */}
      {/* <div className="flex w-full h-full">
        <img
          src="/public/Hero/NewZealand.jpg"
          alt="img1"
          className="object-cover w-full "
        />
      </div>
      <div className="flex w-full h-full">
        <img
          src="/public/Hero/SriLanka.webp"
          alt="img1"
          className="object-cover w-full "
        />
      </div>
      <div className="flex w-full h-full">
        <img
          src="/public/Hero/Pakistan.avif"
          alt="img1"
          className="object-cover w-full "
        />
      </div>
      <div className="flex w-full h-full">
        <img
          src="/public/Hero/WestIndies.webp"
          alt="img1"
          className="object-cover w-full "
        />
      </div>
      <div className="flex w-full h-full">
        <img
          src="/public/Hero/southAfrica.webp"
          alt="img1"
          className="object-cover w-full "
        />
      </div> */}
    </AwesomeSlider>
  );
}

export default Hero;
