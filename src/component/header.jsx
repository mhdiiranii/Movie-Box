import { useEffect, useState } from "react";
import { MdLocalMovies } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useLocation, useNavigate } from "react-router-dom";

const routes = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "Movie",
    href: "/movie",
  },
  {
    id: 3,
    name: "Tv Show",
    href: "/tv-show",
  },
];

const Header = () => {
  const [routeIndex, setRouteIndex] = useState(1);
  const navigate = useNavigate();
  const loc = useLocation();
  const [open, setOpen] = useState(false);

  const changeRoute = (e, i) => {
    e.preventDefault();
    navigate(`./Movie-Box${i.href}`);
    setRouteIndex(i.id);
  };

  useEffect(() => {
    switch (loc.pathname) {
      case "Movie-Box/detail/:teamId":
        setRouteIndex(0);
        break;
      case "/Movie-Box/":
        setRouteIndex(1);
        break;
      case "/Movie-Box/movie":
        setRouteIndex(2);
        break;
      case "/Movie-Box/tv-show":
        setRouteIndex(3);
        break;
      default:
        setRouteIndex(null);
    }
  }, [loc.pathname]);
  console.log(loc.pathname);
  return (
    <div className={`${routeIndex > 1 && "bg-black"}  text-white fixed top-0 right-0 left-0 pt-3 z-50`}>
      <div className="flex max-md:justify-end justify-between px-10 items-center">
        <div className="flex gap-2 max-md:hidden items-center">
          <MdLocalMovies size={30} className="bg-yellow-400 rounded-lg py-0.5 text-black" />
          <p>Movie Box</p>
        </div>
        <div className={`flex items-center h-10`}>
          <div className={`${open ? "max-md:w-0 p-0" : "max-md:w-auto p-2"}  overflow-auto flex max-sm:text-xs`}>
            {routes.map((item) => (
              <button
                className={`${routeIndex === item.id && "border-b"} ${routeIndex !== item.id && "hover:shadow-[0px_0px_5px_5px_rgba(255,255,255,0.4)] rounded-lg"} mx-2 px-2 duration-300`}
                onClick={(e) => changeRoute(e, item)}
                key={item.id}
              >
                {item.name}
              </button>
            ))}
          </div>
          <input type="text" className={`${open ? "w-52 p-2 bg-white bg-opacity-50 " : "w-0"} h-8 duration-300 overflow-hidden bg-inherit outline-none text-sm rounded-lg m-2`} />
          <button className="m-2 text-2xl" onClick={() => setOpen(() => (open ? false : true))}>
            <CiSearch/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
