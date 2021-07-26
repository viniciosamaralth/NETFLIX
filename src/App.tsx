import { async } from 'q';
import React, { useEffect, useState } from 'react';
import { string } from 'yargs';
import Tmdb from './Tmdb';
import './app.css';


function App() {
const [movieList, setMovieList] = useState([]);

  useEffect( () =>{
      const loadAll = async () => {
          //pegando a lista total
        let list = await Tmdb.getHomeList();
        setMovieList(list);
      }
      loadAll();
  }, []);

  return (
    <div className="App">
      <section className="lists">
        {movieList.map((item, key)=>(
          <div>
            {item.title}
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
