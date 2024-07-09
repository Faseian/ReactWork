import Header from "./components/Header"
import Row from "./components/Row/Row"
import Footer from "./components/Footer"
import  React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { fetchGenres } from "./store/genres"
import "./App.css"  
import { fetchAnimes } from "./store/animes";


function App() {

  const genres = useSelector((state)=> state.genres.list.data);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchGenres());
  },[])

  return (
    <div className="App">
      <Header/>
      {genres ?
      genres.map(genres => {
        return(
          <Row
          key = {genres._id}
          genre = {genres._id}
          >
          </Row>
        );
      })
      :null}
      <Footer/>
    </div>
  )
}

export default App