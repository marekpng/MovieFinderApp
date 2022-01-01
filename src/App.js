import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import MovieInfo from './components/MovieInfo';


const App = () => {
  const [movie, setMovie] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [movieInfo, setMovieInfo] = useState('Click for more information')





  

  const getMovieRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=7931bfc7`

    const response = await fetch(url);
    const responseJson = await response.json();
    
    if(responseJson.Search) {
      
      setMovie(responseJson.Search);
      // console.log(responseJson.Search)
    } else {
      // setMovie(responseJson.Search);
    }
  };


  // useEffect(() => {
  //   getMovieRequest()
  // }, [])

  useEffect(() => {
    if(searchValue == ''){
      console.log('nic')
    }else {

      getMovieRequest(searchValue)
      console.log('spustil som sa')
    }
  },[searchValue])

  
  return (
    <div  className=" container movie-app">
      
      

        <div className='row d-flex align-items-center mt-4 mb-4'>
          <MovieListHeading  heading='Movie finder app'/>
          <SearchBox  searchValue={searchValue} setSearchValue={setSearchValue}/>

        </div>
        <div className='row'>
          <MovieList movies={movie}  movieInfo={movieInfo}></MovieList>
        </div>
          
      
      
    </div>
  )
}

export default App;
