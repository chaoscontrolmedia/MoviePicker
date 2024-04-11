import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css'; 

const API_URL = 'http://www.omdbapi.com?apikey=16799075';














const App = () => {
  const [movies, setMovies] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const[data, setData] = useState([{}])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    
  }

  useEffect(() =>{
    fetch("/members").then(
      res => res.json()
  
    ).then(
        data => {
          setData(data)
          console.log(data)
        }
      
    )
  }, [])// makes it so that the function only happens once.

  useEffect (() => {
    searchMovies('Iron Man')

  }, []);

  
    return(

      




    <div className = "app">


    <div>

    

    {(typeof data.members === 'undefined') ? (
      <p>Loading..</p>
    ) : (
      data.members.map((member, i) => (
        <p key = {i}>{member}</p>
      ))

    )}

</div>








        <h1>Watch your favorite movies</h1>

        <div className = "search">
          <input
          placeholder="Search"
          value = {searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onClick = {() => searchMovies(searchTerm)}
          
          />
        </div>



        {movies?.length > 0?(
              <div className = "container">
                {movies.map((movie) =>(
                  <MovieCard movie={movie} />
                ))}
              </div>
            ):(
              <div className = "empty">
                <h2>No movies found</h2>
              </div>
            )}
      </div>
    );
  };

export default App;

