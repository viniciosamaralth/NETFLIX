import { async } from 'q';
import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';

function App() {
const [movieList, setMovieList] = useState([]);

type typelist = slug | title | items

  useEffect( () =>{
      const loadAll = async () => {
          //pegando a lista total
        let list = await Tmdb.getHomeList();
        setMovieList(list: typelist);
      }
      loadAll();
  }, []);

  return (
    <div className="App">
      <h1>oii</h1>
    </div>
  );
}

export default App;
