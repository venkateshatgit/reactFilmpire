import './App.css';
import React, {Component, useEffect, useState} from 'react'; 
import Search from './components/search.component/search.component.jsx';
import MovieList from './components/movie-list.component/movieList.component.jsx';
import Pagination from './components/pagination.component/pagination.component.jsx';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


function App() {

  const [data, setData] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [toatlPage, setTotalPage] = useState(0)

  const [load, setLoad] = useState(true)
  const [searchStr, setSearchStr] = useState("")
  const [preSearchStr, setPrevSearchStr] = useState("")
  
// https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${pageNumber}
// https://api.themoviedb.org/3/search/company?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=Tiger&page=${pageNumber}

  const fetchMoviesList = async (title) => {
    try{
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=${pageNumber}`)
      
      if(!response.ok){
        throw new Error(`Error! status: ${response.status}`)
      }
      const fetchedData = await response.json()
      setData(fetchedData)
      setTotalPage(fetchedData.total_pages)
      setLoad(false)
    }catch(err){
      console.log(err)
    }
  }

  const changePage = (pageValue) => {

    if((pageValue===0 && pageNumber===1) || (pageValue==1 && pageNumber===toatlPage))
      return 
    else if(pageValue===0)
      setPageNumber(() => pageNumber-1)
    else
      setPageNumber(() => pageNumber+1)
  }


  const searchMovie = async () => {
    try{
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${searchStr}&page=${pageNumber}`)

      if(!response.ok){
        throw new Error(`Error! status: ${response.status}`)
      }
      const searchedData = await response.json()
      setData(searchedData)
      setTotalPage(searchedData.total_pages)
      setLoad(false)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    setLoad(true)

    if (searchStr!==preSearchStr ){
      setPrevSearchStr(searchStr)
      setPageNumber(1)
    }

    if(searchStr==="")
      fetchMoviesList()
    else
      searchMovie()
  }, [pageNumber, searchStr])


  return (
    <div className="App">
      <Search setSearchStr={setSearchStr} setPrevSearchStr={setPrevSearchStr}/>
      
      <div className="container">
        {load ?(
          <div className="cirularLoader">
            <CircularProgress/>
          </div>
          ):(
          <>
            <MovieList movieListData={data}/>
            <Pagination pageNumber={pageNumber} handlePagination={changePage}/>
          </>
        )}
      </div>

    </div>
  );
}

export default App;
