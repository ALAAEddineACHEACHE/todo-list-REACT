import React from 'react';
import Todoitem from '../Todoitem/Todoitem';
import "./Todolist.css";
export default function Todolist(props) {
    const list = props.taches.map(function(item,index){
        return <Todoitem key={index} item={item} 
     delete3={props.delete2}
     modification3 = {props.modification2}
       />
    })
    console.log(list);
    return (
        <div>
        <h2>Todo List</h2>
        { list }
        <button className="btn btn-danger form-control mt-5" onClick={props.clearList} >CLEAR LIST</button>
   </div>
    )
}

