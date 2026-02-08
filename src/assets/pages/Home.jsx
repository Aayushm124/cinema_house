import MovieCard from "../components/MovieCard";
import {useState} from "react"
function Home() {
  const movies = [
    { id: 1, title: "john wick", release_date: "2020" },
    { id: 2, title: "terminator", release_date: "1999" },
    { id: 3, title: "The Matrix", release_date: "1998" },
  ];
  const [searchQuery, setSearchQuery] = useState("");

  const handlesearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
    setSearchQuery("-------")
  };


  return (
    <div className="home">
      <form action="" onSubmit={handlesearch} className="search-form" >
        <input type="text" placeholder="search for movies..." value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />

        <button type="submit" className="search-button" >Search</button>
      </form>



      <div className="movies-grid">
        {movies.map((movie) => 
        //   movie.title.toLowerCase().startsWith(searchQuery) &&
          (<MovieCard movie={movie} key={movie.id} />)
        )
    }
      </div>
    </div>
  );
}

export default Home;
