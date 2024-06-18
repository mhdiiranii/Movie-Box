import SliderShow from "./slider/showSlide";
import { movie } from "./allData";

const Items = () => {
    return ( 
        <div className="text-white absolute bottom-5 pb-2 overflow-hidden w-full ">
            <SliderShow myslide={movie}/>
        </div>
     );
}
 
export default Items;