import ShowData from "../component/show-data/showData";
import {movie} from '../component/allData'

const TvShow = () => {
    const filterData = movie.filter(item => item.type === 'series')

    return ( 
        <div className="px-4 animation-fade mt-12">
            <ShowData myData={filterData}/>
        </div>
     );
}
 
export default TvShow;