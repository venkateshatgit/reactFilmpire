import React from 'react'
import './movieTab.style.css'
import StarRatingComponent from 'react-star-rating-component';
// import ReactStars from "react-rating-stars-component";

function MovieTab(props) {
    return (  
        <div className="movieTab">
            <img src={`http://image.tmdb.org/t/p/w500/${props.movieTabData.poster_path}`} alt="img" />
            <h3>
                {props.movieTabData.title.slice(0, 15)}
                <>
                    {
                        props.movieTabData.title.length > 15 ? "..." : ""
                    }
                </>
            </h3>

            <StarRatingComponent
                value={props.movieTabData.vote_average/2}
                starCount={5}
                editing={false}
            />

        </div>
    );
}

export default MovieTab;