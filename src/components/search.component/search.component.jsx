import React from 'react'
import './search.style.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function Search(props) {

    return ( 
        // <h1 className="search">
        //     <TextField
        //         variant="standard"
        //     />
        //     <input onChange={(e) => {
        //         props.setSearchStr((prev) => {
        //             props.setPrevSearchStr(prev)
        //             return e.target.value
        //         })}} />
        // </h1>

        <div className='search'>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
        
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={(e) => {
                                props.setSearchStr((prev) => {
                                    props.setPrevSearchStr(prev)
                                    return e.target.value
                                })}} 
                />
    
            </Paper>
        </div>

    );
}

export default Search;