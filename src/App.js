import React, { Component } from 'react';
import './App.css';
import Inputitem from './Components/Inputitem/Inputitem';
import Todolist from './Components/Todolist/Todolist';
export default class App extends Component {
  state = {
    taches:[
      {id:1,tache:"check notifications"},
      {id:2,tache:"Work out"},
      {id:3,tache:"Eat"}
    ],
    tache:"",
    edititem:false
  }
  changement = (event) =>{
   
    this.setState({
      tache:event.target.value
    })
   
  }
  Soumission = (event) =>{
    event.preventDefault();
    let nouvellestaches= [];
    if(this.state.taches.length===0){
      const newtache = {
        id:1,
        tache:this.state.tache
    }
     nouvellestaches =[...this.state.taches,newtache];
    }else{
      const lastindex = this.state.taches.length-1;
      const lastelement= this.state.taches[lastindex];
      console.log(lastelement);
      const newtache = {
        id:lastelement.id+1,
        tache:this.state.tache
      
      }
    nouvellestaches =[...this.state.taches,newtache];
    }
    this.setState({
      taches:nouvellestaches,
      edititem:false
    });
  
    
  }
  delete=(id)=>{
    const tachesfiltrees=this.state.taches.filter(function(item){
      return item.id!=id;
    })

   
    this.setState({
      taches:tachesfiltrees
    })  
  }
  modification = (id) =>{
    //recupere les taches sauf celle qu'on veut modifier  
    const tachesfiltrees=this.state.taches.filter(function(item){
      return item.id!==id;
    });
    //récupérer la tache qu'on veut modifier
    const tachemodifiee = this.state.taches.filter(function(item){
      return item.id === id;
    });
    this.setState({
      taches:tachesfiltrees,
      tache:tachemodifiee[0].tache,
      edititem:true
    })

  }
  clearList  = ()=> {
    this.setState({
      taches:[]
    })
  }
  render() {
    
    return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 text-center">
        <Inputitem changement2={this.changement}
        Soumission2 = {this.Soumission}
        tache={this.state.tache }
        edititem ={this.state.edititem}
        />
       
        <Todolist taches={this.state.taches} 
       delete2={this.delete}
       modification2={this.modification}
       clearList={this.clearList}
        />
        </div>
        </div>
    </div>    
        )
    
  }
}
