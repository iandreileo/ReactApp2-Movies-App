import React, {useState, useEffect} from 'react';
import './App.css';
import Movie from './Components/Movie';
import CONST from './Consts';

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");


  useEffect(() => {
    getMovies(CONST.FEATURED_API)
  }, []);

  const getMovies = (API) => {
    fetch(API)
    .then((res) => res.json())
    .then((data) => {
      setMovies(data.results);
    });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    getMovies(CONST.SEARCH_API + searchTerms);
    setSearchTerms('');
  }

  const handleOnChange = (e) => {
    setSearchTerms(e.target.value);
  }
  
  return (
    <>
    <header>
      <form onSubmit={handleOnSubmit}>
        <input 
          type="search"
          className="search"
          placeholder="Write something.."
          onChange={handleOnChange}
          ></input>
      </form>
    </header>

    <div className="box">
      <div className="principalDiv">
      <div className="moviesDiv row">
        {movies.length > 0 && movies.map(movie => <Movie key={movie.id} {...movie}/>)}
      </div>
      </div>
    </div>
    </>
  );


}

export default App;
