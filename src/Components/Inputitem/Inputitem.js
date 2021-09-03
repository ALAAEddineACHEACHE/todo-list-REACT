import React from 'react'
import "./Inputitem.css";
function Inputitem(props) {
    console.log(props)
        return (
        <div>
        <h1>Add Todo</h1>
        <div className="card card-body">
            <form onSubmit={props.Soumission2}>
            <div className="input-group">
            <div class="input-group mb-3">
  <span className="input-group-text" id="basic-addon1"><i className="fas fa-book"></i></span>
  <input type="text" className="form-control" placeholder="Add An Item" value={props.tache}
   aria-label="Add an item" aria-describedby="basic-addon1" onChange={props.changement2}/>
</div>  
            </div>
           {
               props.edititem!==true ? 
               <button className="btn btn-primary mt-3 form-control">ADD ITEM</button>
               :
               <button className="btn btn-success mt-3 form-control">EDIT ITEM</button>

           }
            
          
            </form>
        </div>
     
        </div>
        
    )
}

export default Inputitem
