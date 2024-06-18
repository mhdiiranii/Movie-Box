import { useState } from "react";
import AoutContext from "./AountContext";
import "./App.css";
import Header from "./component/header";
import Home from "./page/home";
import { Route, Routes } from "react-router-dom";
import Movie from "./page/movie";
import TvShow from "./page/tvShow";
import Detail from "./page/dynamic";

function App() {
  const [slideSelect,setSlideSelect] = useState(2);
  return (
    <AoutContext.Provider value={{slideSelect,setSlideSelect}}>
      <div>
        <Header />
        <Routes>
              <Route element={<Home />} path="Movie-Box/" />
              <Route element={<Movie />} path="Movie-Box/movie" />
              <Route element={<TvShow />} path="Movie-Box/tv-show" />
              <Route element={<Detail />} path={"Movie-Box/detail/:teamId"} />
        </Routes>
      </div>
    </AoutContext.Provider>
  );
}

export default App;
