import React, { createContext, useState } from 'react';
import { childProp, contextProp } from '../types/context';

export const DataProvider = createContext({} as contextProp)
 
const AppContext = ({children}:childProp) => {

  const [trending, setTrending] = useState([1, 2, 3])
  const [upcoming, setUpcoming] = useState([1, 2, 3])
  const [topRated, setTopRated] = useState([1, 2, 3])
  const [cast, setCast] = useState([1, 2, 3, 4, 5])
  const [similarMovie, setSimilarMovie] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17])

  return (
    <DataProvider.Provider value={{ upcoming, trending, topRated, cast, similarMovie }}>
      {children}
    </DataProvider.Provider>
  );
}

 
export default AppContext;