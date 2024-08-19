import  React, { useEffect, lazy, Suspense } from 'react';
import Row from './Row/Row.jsx';
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
      {fetchedGenres ?
      fetchedGenres.map(genres => {
        return(
          <Row
          key = {genres._id}
          genre = {genres._id}
          fetchURL = {getAnimePath(genres._id)}
          />
        );
      })
      :null}
    </div>
  )
}
export default Home