import React, {useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
 
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async function  () {
    setIsLoading(true);
    setError(null);

    try{

      const response = await fetch('https://react-app-610ea-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json');
      
      if(!response.ok){
        throw new Error('Something wrong!');
      }

      const data = await response.json();

      let transformedMovies = [];
      
      for(const key in data){
        transformedMovies.push({
          id: data[key],
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }
        // const transformedMovies = data.results.map(movieData => {
        //   return {
        //     id: movieData.episode_id,
        //     title: movieData.title,
        //     openingText: movieData.opening_crawl,
        //     releaseDate: movieData.release_date 
        //   }
     
        // });
  
        setMovies(transformedMovies);

      }catch(error){
          setError(error.message);
      }
      
      setIsLoading(false);
  
  }, []);

  useEffect(()=>{
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>Found no movies.</p>

  if(movies.length > 0){
    content = <MoviesList movies={movies} />
  }

  if(error){
    content = <p>{error}</p>
  }

  if(isLoading){
    content = <p>Loading ...</p>
  }

  const onAddMovieHandler = async (movie) => {
    fetch('https://react-app-610ea-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={onAddMovieHandler}/>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
