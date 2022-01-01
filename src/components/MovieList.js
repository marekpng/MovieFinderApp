import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { propTypes } from "react-bootstrap/esm/Image";
import { useState } from "react";
import AddFavourites from "./AddFavourites";

const MovieList = (props) => {
   const [style, setStyle] = useState("info-none");
    

    const handleClick = (event) => {
            // style ? setStyle("info-none") : setStyle("info-display")
            // style ? style("info-none") : style("info-display")
            // style ? console.log("true") : console.log("false")
            if(style == "info-none"){
                setStyle("info-display")
                console.log('hovno')
                console.log(event.currentTarget.id)
                
            } else {
                setStyle("info-none")
                console.log(event.currentTarget.id)
            }
        }
        
            
        
    return (
        <>
            {props.movies.map((movie, index) =>
            <div className="image-container  justify-content-start m-3">
                <img src={movie.Poster} key={index} alt="movie"></img>
                
                <br></br>
                   <div className={style}>
                       {movie.Title}
                       <br></br>
                       {movie.Year}
                    </div> 
                <div className="overlay d-flex align-items-center justify-content-center">
                 {/* <AddFavourites>Add</AddFavourites>    */}
                </div>
                <br></br>
                <button type="button" className="btn btn-info"  onClick={handleClick}>{props.movieInfo}</button>
            </div> )}
        </>
    )
}

export default MovieList;