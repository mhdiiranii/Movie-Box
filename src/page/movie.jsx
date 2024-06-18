import ShowData from "../component/show-data/showData";
import {movie} from '../component/allData'

const Movie = () => {

    const filterData = movie.filter(item => item.type === 'movie')

    return ( 
        <div className="px-4 animation-fade mt-12">
            <ShowData myData={filterData}/>
        </div>
     );
}
 
export default Movie;