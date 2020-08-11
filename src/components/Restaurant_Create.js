import React, { Component } from 'react'

import '../App.css';
 class Restaurant_Create extends Component {

   constructor(){
       super();
       this.state={
           name:null,
           location:null,
           speciality:null,
       }
   }

    create(){
        fetch('http://localhost:3000/restaurants',{
          method:'POST',
          headers:{
              'Content-Type':'application/json'
               
          },
          body: JSON.stringify(this.state)
        }).then((res)=>{
            res.json().then((result)=>{
                alert('Customers Added successfully...!!!');
            })
        }) 

    }
    render() {
        return (
            <div className='create-bg text-center font-weight-light'>
            <h1 className='text-white mt-3'>Restaurant Create Component</h1>
            
            <div>
            <input onChange={(event)=>
            {this.setState({name:event.target.value})}}
             placeholder='Enter Restaurant Name'/><br/><br/>
             <input onChange={(event)=>
             {this.setState({location:event.target.value})}}
               placeholder='Enter restaurant Location'/><br/><br/>
             <input onChange={(event)=>
              {this.setState({speciality:event.target.value})}}
                placeholder='Enter Restaurant Speciality'/><br/><br/>
              <button className='btn btn-primary' onClick={()=>{this.create()}}>Add Restaurant</button>
              </div>
           </div>
        );
    }
}
export default Restaurant_Create;