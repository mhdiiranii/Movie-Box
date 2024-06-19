/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import AoutContext from "../../AountContext";

const SliderShow = ({ myslide = [], className = "", classNameImage = "", duration = 500 }) => {
  const slideCheck = useContext(AoutContext);
  const [count, setCount] = useState(0);
  const [imageCount, setImageCount] = useState(null);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024) {
      setImageCount(5), slideCheck.setSlideSelect(2);
    } else if (window.innerWidth >= 640) {
      setImageCount(3), slideCheck.setSlideSelect(1);
    } else if (window.innerWidth < 640) {
      setImageCount(1), slideCheck.setSlideSelect(0);
    }
  });

  useEffect(() => {
    if (window.innerWidth >= 1024) {
      setImageCount(5), slideCheck.setSlideSelect(2);
    } else if (window.innerWidth >= 640) {
      setImageCount(3), slideCheck.setSlideSelect(1);
    } else if (window.innerWidth < 640) {
      setImageCount(1), slideCheck.setSlideSelect(0);
    }
  }, []);

  const next = () => {
    if (count < myslide?.length - imageCount) {
      setCount((index) => {
        if (index === myslide?.length - imageCount || index >= myslide?.length - 1) return 0;
        return count + 1;
      });
      slideCheck.setSlideSelect((index) => {
        if (index === myslide?.length - 1 || index >= myslide?.length - 1) return 0;
        return slideCheck.slideSelect + 1;
      });
    } else {
      slideCheck.setSlideSelect((index) => {
        if (index === myslide?.length - 1 || index >= myslide?.length - 1) return 0;
        return slideCheck.slideSelect + 1;
      });
      if (slideCheck.slideSelect == myslide?.length - 1) setCount(0);
    }
  };
  const previous = () => {
    if (count == 0) {
      slideCheck.setSlideSelect((index) => {
        if (index === count) return myslide.length - 1;
        return slideCheck.slideSelect - 1;
      });
      if (slideCheck.slideSelect == 0) setCount(myslide.length - imageCount);
    } else {
      setCount((index) => {
        if (index === 0) return myslide?.length - imageCount;
        return count - 1;
      });
      slideCheck.setSlideSelect((index) => {
        if (index === 0) return myslide?.length - 1;
        return slideCheck.slideSelect - 1;
      });
    }
  };

  const clickImage = (i) => {
    slideCheck.setSlideSelect(i);
  };

  return (
    <div className="flex flex-col mb-2 max-sm:flex-col-reverse" style={{ position: "relative" }}>
      <div className="flex flex-row-reverse justify-center gap-2 items-center">
        <button onClick={next} className="md:hover:bg-[rgba(255,255,255,0.4)] md:hover:text-[rgba(0,0,0,0.8)] p-2 md:p-4 text-lg md:text-lg lg-text-xl duration-300 rounded-full ">
          <GrNext />
        </button>
        <button onClick={previous} className="md:hover:bg-[rgba(255,255,255,0.4)] md:hover:text-[rgba(0,0,0,0.8)] duration-300 p-2 md:p-4 text-lg md:text-lg lg-text-xl rounded-full">
          <GrPrevious />
        </button>
      </div>
      <div className={`w-[100%]`} style={{ height: "100%", display: "flex", justifyContent: "start", alignItems: "center" }}>
        {myslide?.map((item, index) => (
          <div
            key={item.id}
            onClick={() => clickImage(index)}
            className={`
              ${`cubic-bezier(.06,.61,.35,1.02)`} 
              ${className} w-full sm:w-[33%] lg:w-[20%] max-sm:px-[20%] sm:px-3 h-80 sm:h-60  items-center flex  object-cover shrink-0 grow-0  `}
            style={{
              translate: `-${100 * count}%`,
              transitionDuration: `${duration}ms`,
            }}
          >
            <img
              src={item.imageSrc}
              alt="#"
              className={`w-full rounded-lg ${classNameImage} ${slideCheck.slideSelect == index ? "h-72 sm:h-52 max-sm:shadow-none shadow-[0px_0px_30px_10px_rgba(255,255,255,0.5)] duration-500 blur-0" : "h-72 blur-[2px] sm:h-40"}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SliderShow;
