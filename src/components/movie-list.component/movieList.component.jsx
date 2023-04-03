import React from 'react'
import './movieList.style.css'
import Grid from '@mui/material/Grid';
import MovieTab from "../movie-tab.component/movieTab.component.jsx";


function MovieList(props) {
    
    return (  
        <Grid container spacing={2} className="movieList">
            {props.movieListData.length === 0 ? (
                <></> 
                ):( 
                    props.movieListData.results.map((item, index) => {
                        return (
                            <Grid item xs={12} sm={4} md={3} className="movieListTab">
                                <MovieTab movieTabData={item} key={index}/>
                            </Grid>
                        )
                    })
                )
            }
        </Grid>
    );
}

export default MovieList;