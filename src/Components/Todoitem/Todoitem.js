import React from 'react';
import "./Todoitem.css";
import "../../App";

function Todoitem(props) {
    console.log(props); 
    const {id,tache} = props.item;  
    return (
        <div className="list-group-item text-capitalize d-flex justify-content-between  my-2">
        <h6>{tache}</h6>
        <div className="todo-icons">
            <span className="mx-2 text-success" onClick={ () =>props.modification3(props.item.id)}>
                <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger" onClick={ ()=> props.delete3(props.item.id)   }>
               {/* on utilise arrowfunction ds react quand on a besoin d'appeler une fonct auquelle on passe un parametre */}
                <i className="fas fa-trash"></i>
            </span>
        </div>
</div>
    )
}

export default Todoitem;
