import './App.css';
import Header from './Component/Header';
import MoviesList from "./Component/MovieList.json";
import Movies from "./Component/Movies";

function App() {
  return (
    <div className="App">
      < Header/>
     <div className="main">

      {
        MoviesList.map((element) => {
          return (
             <Movies title = {element.Title} 
              year = {element.Year}
              poster = {element.Poster} />
          );
        })
      }

     </div>
    </div>
  );
}

export default App;
