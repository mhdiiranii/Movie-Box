import { useEffect, useState } from "react";
import { GoHeartFill, GoHeart } from "react-icons/go";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Tooltip from "../tool/tooltip";

// eslint-disable-next-line react/prop-types
const ShowData = ({ myData }) => {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);
  const [starIndex, setStarIndex] = useState(0);
  const [commentBox, setCommentBox] = useState(false);
  const navigate = useNavigate();
  const [likeIndex, setLikeIndex] = useState();
  const [star, setStar] = useState(false);
  const [like, setLike] = useState(false);
  const [likeCount , setLikeCount] = useState()

  const commentClick = (i) => {
    setCommentBox(true);
    setIndex(i);
  };

  useEffect(() => {
    setData(myData);
  }, [myData]);

  const getDetail = (e, id) => {
    e.preventDefault();
    navigate(`./../detail/${id}`);
  };

  const likeDate = (item) => {
    setLike(() => (like ? false : true));
    setLikeIndex(item.id)
    setLikeCount(item.like_count)
  };

  const starClick = (i) => {
    setStar(() => (star ? false : true));
    setStarIndex(i);

  };
  return (
    <div className="w-full">
      <div className=" p-4 w-full rounded-md">
        <div className="grid max-md:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">
          {data?.map((item, i) => (
            <div key={item.id} className=" gap-4  lg:gap-6 xl:gap-8 2xl:gap-16 rounded-lg text-white flex flex-col bg-[rgba(255,255,255,0.2)]  duration-500">
              <div onClick={(e) => getDetail(e, item.id)} className="flex flex-col gap-6 group cursor-pointer mt-6 relative justify-center items-center">
                <div className="relative w-full flex h-[250px] justify-center items-center">
                  <img src={item.imageSrc} className="w-2/3 h-full   rounded-lg" alt="" />
                  <p className="absolute bottom-0 w-2/3 text-center overflow-hidden h-0  group-hover:h-2/3 duration-500 bg-[rgba(0,0,0,0.6)] text-white text-xs  px-4 flex items-center">
                    {item.description}
                  </p>
                </div>
                <h2 className="text-lg px-4 lg:text-xl xl:text-2xl 2xl:text-3xl flex w-full h-16 text-center justify-center max-xl:items-start items-center font-bold">{item.title}</h2>
              </div>
              <div className="px-4 flex flex-wrap">
                {item.genre?.map((itemGenre) => (
                  <span key={itemGenre.id} className="bg-[rgba(0,0,0,0.2)] mr-2 px-6 py-2 rounded-full text-xs ">
                    {itemGenre.title}
                  </span>
                ))}
              </div>
              <div className="flex justify-between cursor-pointer relative pb-6">
                <div className="flex relative justify-center lg:text-3xl gap-2 items-center w-full">
                  <Tooltip decoretation={"bottom"} name={"Like"} classes={"text-xs -translate-x-[20%] translate-y-4"}>
                    <div className="w-full flex ">
                      <span className="text-green-400 text-lg pb-1 ">{item.like_count}</span>
                      <button className="px-3" type="button" onClick={(e) => likeDate(item, e)}>
                        {like && likeIndex === item.id ? <GoHeartFill color="red" className="animation-Tooltip" /> : <GoHeart className="animation-Tooltip" />}
                      </button>
                    </div>
                  </Tooltip>
                </div>
                <div className="flex justify-center gap-2 cursor-pointer items-center w-full">
                  <Tooltip decoretation={"bottom"} name={"Star"} classes={"text-sm -translate-x-2 translate-y-4"}>
                    <div className="w-full flex  gap-3">
                      <div className="text-green-400 text-lg pb-1">{item.imdb}</div>
                      <div onClick={() => starClick(i)} className="lg:text-3xl flex items-center text-[#f5c518]">
                        {star && i === starIndex ? <FaStar /> : <FaRegStar />}
                      </div>
                    </div>
                  </Tooltip>
                </div>

                <button onClick={() => commentClick(i)} className="flex justify-center lg:text-3xl gap-2 items-center w-full">
                  <Tooltip className={""} decoretation={"bottom"} name={"Comment"} classes={"text-sm -translate-x-2/3  translate-y-4"}>
                    <FaRegComment />
                  </Tooltip>
                </button>
                <div className={`${commentBox && i === index ? "h-16" : "h-0"} duration-300 ease-linear absolute  overflow-hidden bottom-0 left-0 right-0 text-black bg-white`}>
                  <div className="w-full h-full flex">
                    <input type="text" className="w-full outline-none placeholder:text-green-300 p-2" placeholder="hello ..." />
                    <button onClick={() => setCommentBox(false)} className="px-4">
                      <div className="text-4xl  text-green-300">
                        <IoIosCloseCircleOutline />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowData;