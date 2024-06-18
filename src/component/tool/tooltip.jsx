import { useEffect, useState } from "react";
import { Children } from "react";

// eslint-disable-next-line react/prop-types
const Tooltip = ({ children, decoretation, classes, name,className }) => {
  const [turnOn, setTurnOn] = useState(false);

  const [style, setStyle] = useState();

  useEffect(() => {
    switch (decoretation) {
      case "bottom":
        setStyle("top-full  after:absolute after:border-l-transparent after:border-r-transparent after:border-b-fuchsia-300 after:bottom-full after:w-0 after:h-0 after:border-r-[7px] after:border-l-[7px] after:border-b-[7px] after:-translate-x-[20%]");
        break;
      case "top":
        setStyle("bottom-full after:absolute after:border-l-transparent after:border-r-transparent after:border-t-fuchsia-300 after:top-full after:w-0 after:h-0 after:border-r-[7px] after:border-l-[7px] after:border-t-[7px]");
        break;
      case "left":
        setStyle("right-full top-1/4 after:absolute after:bg-fuchsia-300 after:top-[25%] after:w-4 after:h-4 after:left-full after:-translate-x-3 after:rotate-45 ");
        break;
      case "right":
        setStyle("left-full top-[25%] after:absolute  after:right-full after:border-t-transparent after:border-b-transparent after:border-r-fuchsia-300 after:top-[25%] after:w-0 after:h-0 after:border-t-[7px] after:border-r-[7px] after:border-b-[7px]");
        break;

      default:
        setStyle("right-full top-1/4 after:absolute after:border-t-transparent after:border-b-transparent after:border-l-fuchsia-300 after:top-[25%] after:w-0 after:h-0 after:border-t-[7px] after:border-l-[7px] after:border-b-[7px] after:left-full  ");
        break;
    }
  }, [decoretation]);

  return (
    <div className={`relative ${className} `}>
      {Children.map(children, (child) => (
        <>
          <div onMouseMove={() => setTurnOn(true)} onClick={()=>setTurnOn(false)} onMouseLeave={() => setTurnOn(false)} className="">
            {child}
          </div>
          <span className={`${turnOn ? "block" : "hidden"} ${classes} ${style} animation-Tooltip w-auto absolute px-4 py-2 rounded-lg text-xs max-lg:hidden  bg-fuchsia-300 text-black font-semibold z-50`}>
            {name === undefined ? "name!" : name}
          </span>
        </>
      ))}
    </div>
  );
};

export default Tooltip;