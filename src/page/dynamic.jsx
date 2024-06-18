import { useHref } from "react-router-dom";
import { movie } from "../component/allData";

const Detail = () => {
  const path = useHref();

  return (
    <div className="animation-fade">
      {movie
        .filter((item) => item.id == path.slice(18))
        .map((item) => (
          <div key={item.id}>
            <div
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
            <div className="bg-gradient-to-r from-[rgba(0,0,0,1)] from-20% via-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.3)] absolute right-0 top-0 bottom-0 left-0 z-[-1] "></div>
            <div key={item.id} className="max-md:h-screen max-md:justify-center w-full md:w-[60%] lg:w-[40%]  z-50 animation-Tooltip flex flex-col max-md:px-6 md:ml-[5%] md:mt-[12%] lg:mt-[6%]">
              <div className="flex justify-between items-start gap-10 px-2">
                <h1 className="text-lg md:text-xl lg:text-2xl font-bold ">{item.title}</h1>
                <p className="">{item.year}</p>
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
              <div className="text-xs px-2">{item.description}</div>
              {item.type == "movie" ? (
                <div className="flex flex-col gap-5 mt-10">
                  <div className="flex w-full justify-between">
                    <p>Director</p>
                    <p className="w-3/4">{item.Director}</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>Writers</p>
                    <p className="w-3/4">{item.Writers}</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>star</p>
                    <p className="w-3/4">{item.Stars}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-5 mt-10">
                  <div className="flex w-full justify-between">
                    <p>Creators</p>
                    <p className="w-3/4">{item.Creators}</p>
                  </div>
                  <div className="flex w-full justify-between">
                    <p>star</p>
                    <p className="w-3/4">{item.Stars}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Detail;
