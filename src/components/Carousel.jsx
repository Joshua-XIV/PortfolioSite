import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState } from "react";

const imageMap = import.meta.glob("../assets/*", {
  eager: true,
  import: "default",
});

const Carousel = ({imagePaths}) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === imagePaths.length-1 ? 0 : slide+1);
  }

  const prevSlide = () => {
    setSlide(slide === 0 ? imagePaths.length-1 : slide-1);
  }


  return (
    <div className="flex justify-center mb-10">
      <div className="object-contain carousel">
        {imagePaths.length > 1 && <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>}
        {imagePaths.map((image, index) => {
          const imageName = imageMap[`../assets/${image}`]
          return <img src={imageName} key={index} className={`${slide === index ? "slide" : "slide slide-hidden"} select-none`}></img>
        })}
        {imagePaths.length > 1 && <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>}
        {imagePaths.length > 1 && <span className="indicators">
          {imagePaths.map((_, index)=> {
            return <button key={index} onClick={() => setSlide(index)} className={slide === index ? "indicator" : "indicator indicator-inactive"}></button>
          })}
        </span>}
      </div>
    </div>
  )
}

export default Carousel