import React from 'react';

export default function Pes(props){
    return(
        <header>
     <form onSubmit={props.handleOnSubmit}>
     <input className="pesquisa" type="search" placeholder="Pesquise aqui..." value={props.searchTerm} onChange={props.handleOnChange}/>
     </form>        
     </header>
    )
}