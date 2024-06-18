import { useContext } from "react";
import { movie } from "../component/allData";
import AoutContext from "../AountContext";
import Items from "../component/itemSlider";

const Home = () => {
  const slide = useContext(AoutContext);
  return (
    <div className="duration-1000">
      {movie
        ?.filter((i, index) => index == slide.slideSelect)
        .map((item) => (
          <div
            key={item.id}
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
              backgroundImage: `url(${item.imageSrc})`,
              backgroundRepeat: "no-repeat",
              objectFit: "cover",
              backgroundPosition: "right",
              backgroundSize: "75% 100%",
              zIndex: "-2",
            }}
          ></div>
        ))}
      <div className="bg-gradient-to-r from-[rgba(0,0,0,1)] from-20% via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] absolute right-0 top-0 bottom-0 left-0 z-[-1]"></div>
      <div className="mt-14">
        {movie
          ?.filter((i, index) => index == slide.slideSelect)
          .map((item) => (
            <div key={item.id} className="w-[90%] md:w-[60%] lg:w-[40%] animation-Tooltip flex flex-col ml-[5%] mt-[2%]">
              <div className="flex justify-between items-center gap-10 px-2">
                <h1 className="text-2xl font-bold ">{item.title}</h1>
                <p>{item.year}</p>
              </div>
              <span className="w-full h-[1px] my-2 bg-gray-400"></span>
              <div className="flex text-xs px-2 justify-between">
                <div className="flex items-center gap-2">
                  <p className="text-black bg-yellow-400 font-bold px-[2px] rounded-sm"> IMDb</p>
                  <p className="text-gray-400">{item.imdb}</p>
                </div>
                <div className="flex justify-around w-2/3 text-gray-400">
                  {item.genre.map((genr) => (
                    <p key={genr.div}>{genr.title}</p>
                  ))}
                </div>
              </div>
              <span className="w-full h-[1px] my-2 bg-gray-400"></span>
              <div className="text-xs px-2">
                {item.description}
              </div>
            </div>
          ))}
      </div>
      <Items />
    </div>
  );
};

export default Home;
