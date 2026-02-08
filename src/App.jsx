import {useState} from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import MovieCard from "./assets/components/MovieCard";
import Home from "./assets/pages/Home";
import {Routes,Route} from "react-router-dom"
import Favorites from "./assets/pages/favorites";




// function App(){
//   return(
//     <>
//     <Text display = "whats up "   />

//     <Text display=  "hello"     />
//     </>
//   )
// }

// function Text({display}){
//   return(
//     <div>
//       <p>{display}</p>
//     </div>
//   )}

// function App() {
//   const movieNumber = 1;

//   return (
//     <>
//       {movieNumber === 1 ? (
//         <MovieCard
//           movie={{
//             title: "Tim's film",
//             release_date: "2024",
//           }}
//         />
//       ) : (
//         <MovieCard
//           movie={{
//             title: "joe's film",
//             release_date: "2024",
//           }}
//         />
//       )}
//     </>
//   );
// }


function App(){
      return(
    <main  className="main-content"  >
      <Routes>      
      <Route path="/" element={<Home/>} />
      <Route path="/favorites" element = {<Favorites />}/>
      </Routes>

    </main>
      )
}


export default App;
