import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./Header";
import Row from "./Row/Row";
import Footer from "./Footer";
import  React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchGenres } from "../store/genres";
import {getAnimePath} from "../store/requests";

function Home() {
  const fetchedGenres = useSelector((state)=> state.genres.list.data);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchGenres());
  },[])
  return (
    <div className="App">
      <Header/>
      {fetchedGenres ?
      fetchedGenres.map(genres => {
        if(genres._id === 'Hentai' || genres._id === 'Ecchi' || genres._id === 'Boys Love' || genres._id === 'Girls Love' || genres._id === 'Erotica') {
          console.log("NSFW")
      } else {
        return(
          <Row
          key = {genres._id}
          genre = {genres._id}
          fetchURL = {getAnimePath(genres._id)}
          >
          </Row>
        );
      }
      })
      :null}
      <Footer/>
    </div>
  )
}
export default Home