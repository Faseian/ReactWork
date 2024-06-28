import Header from "./components/Header"
import Row from "./components/Row/Row"
import Footer from "./components/Footer"
import  React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { fetchGenres } from "./store/genres"
import "./App.css"


function App() {
  const genres = useSelector((state)=> state.genres.list);
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
          genre = {genres._id}
          />
        );
      })
      :null}
      <Footer/>
    </div>
  )
}

export default App