import Header from "./components/Header"
import Row from "./components/Row/Row"
import Footer from "./components/Footer"
import  React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { fetchGenres } from "./store/genres"
import _ from 'lodash'
import "./App.css"  
import {getAnimePath} from "./store/requests";

function App() {
  const fetchedGenres = useSelector((state)=> state.genres.list.data);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchGenres());
  },[])
  const genre = fetchedGenres[0];
  console.log(getAnimePath(genre))
  return (
    <div className="App">
      <Header/>
      {fetchedGenres ?
      fetchedGenres.map(genres => {
        return(
          <Row
          key = {genres._id}
          genre = {genres._id}
          fetchURL = {getAnimePath(genres._id)}
          >
          </Row>
        );
      })
      :null}
      <Footer/>
    </div>
  )
}
  
  /*
  for(let i = 0; i < fetchedGenres.length; i++) {
    if (fetchedGenres[i] === 'Hentai' || fetchedGenres[i] === 'Ecchi' || fetchedGenres[i] === 'Boys Love' || fetchedGenres[i] === 'Girls Love' || fetchedGenres[i] === 'Erotica') {
      
    }
  }
    */
 

export default App