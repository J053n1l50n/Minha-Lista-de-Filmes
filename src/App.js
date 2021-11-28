import React, {useState, useEffect}  from 'react';
import './index.css'

import Filme from './componentes/Filmes';
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=8292384bb74719d4b69879edc75a0bc2&language=pt-BR&page=1";
const SEARCH_API ="https://api.themoviedb.org/3/search/movie?api_key=8292384bb74719d4b69879edc75a0bc2&language=pt-BR&query="
export default function App() {
  const [filmes, setFilmes]=useState([]);
  const [searchTerm, setSearchTerm]=useState('');
  
  useEffect(()=>{
    getFilmes(FEATURED_API)   
  
  },[]);
  const getFilmes=(API)=>{
    fetch(API)
    .then(res => res.json())
    .then(data =>{
    setFilmes(data.results);
   })

  }
  const handleOnSubmit = (e) =>{
    e.preventDefault();
    if(searchTerm){
      getFilmes(SEARCH_API+searchTerm)
     
      setSearchTerm('');}
  };
  const handleOnChange=(e)=>{
    setSearchTerm(e.target.value);
  };
 
 return (<div>
   <header>
     <form onSubmit={handleOnSubmit}>
     <input className="pesquisa" type="search" placeholder="Pesquise aqui..." value={searchTerm} onChange={handleOnChange}/>
     </form>        
     </header>
   <div className="movie-container">
     
       {filmes.length >0 && filmes.map(filme =>(<Filme key={filme.id} {...filme}/>))}
    
   </div>
 </div>);
}
