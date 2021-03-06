import React from 'react';

const IMAGE_API ="https://image.tmdb.org/t/p/w1280";

const setVoteClass =(vote)=>{
    if(vote >=8){
      return 'green'  
    }else if(vote>=6){
        return 'orange'
    }else{return 'red'}
}

const Filme =({ title, original_title, poster_path, overview, vote_average})=>{
   return(
        <div className='movie'>
        <img src={ poster_path? IMAGE_API + (poster_path):"https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80"} alt={title}/>
        <div className= 'movie-info'>
            <h3>{title}</h3>
            <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
        </div>
        <div className="movie-over">
                        <h2>Resumo</h2>
                        <p> {original_title}</p>
                        <p>{overview}</p>

                        </div>
        </div>
        
       
);
}
export default Filme;