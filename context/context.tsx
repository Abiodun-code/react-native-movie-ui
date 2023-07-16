import React, { createContext, useEffect, useState } from 'react';
import { childProp, contextProp } from '../types/context';
import axios from 'axios';
import { fetchTopRatedMovies, fetchTrendingMovies, fetchUpcomingMovies } from '../api/moviedb';

export const DataProvider = createContext({} as contextProp)
 
const AppContext = ({children}:childProp) => {

  const [trending, setTrending] = useState([])
  const [upcoming, setUpcoming] = useState([])
  const [topRated, setTopRated] = useState([])
  const [cast, setCast] = useState([1, 2, 3, 4, 5])
  const [similarMovie, setSimilarMovie] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])
  const [results, setResults] = useState([1,2,3,4,5,6,7,8,9])
  const [loading, setLoading] = useState(false)

  // getTrendingMovie
  const getTrendingMovie = async () =>{
    try {
      setLoading(true)
      const response = await fetchTrendingMovies()
      setLoading(false)
      setTrending(response.results)
    } catch (error) {
      console.log(error)
    }
  }

  // getUpcomingMovie
  const getUpcomingMovie = async () => {
    try {
      setLoading(true)
      const response = await fetchUpcomingMovies()
      setLoading(false)
      setUpcoming(response.results)
    } catch (error) {
      console.log(error)
    }
  }

  // getRatedMovie
  const getRatedMovie = async () => {
    try {
      setLoading(true)
      const response = await fetchTopRatedMovies()
      setLoading(false)
      setTopRated(response.results)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getTrendingMovie();
    getUpcomingMovie();
    getRatedMovie()
  },[])
  
  return (
    <DataProvider.Provider value={{ upcoming, trending, topRated, cast, similarMovie, results, loading, setLoading }}>
      {children}
    </DataProvider.Provider>
  );
}

 
export default AppContext;