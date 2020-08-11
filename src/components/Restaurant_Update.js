import React, { Component } from 'react'
import '../App.css';
 class Restaurant_Update extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            location:null,
            speciality:null,
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/restaurants/'+this.props.match.params.id)
        .then(res=>res.json())
        .then(result=>{
           console.log(result);
           this.setState({
            id:result.id,
            name:result.name,
            location:result.location,
            speciality:result.speciality
           
           })
       })
    }

    // Updating
    update(){
        fetch('http://localhost:3000/restaurants/'+this.state.id,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
                 
            },
            body: JSON.stringify(this.state)
          }).then((res)=>{
              res.json().then((result)=>{
                  alert('Customers Updated successfully...!!!');
              })
          })    
    }
    render() {
        // console.log(this.state);
        return (
            <div className='search-bg text-center text-white '>
            
                <h1>Restaurant Update </h1>
             <div>
            <input onChange={(event)=>
            {this.setState({name:event.target.value})}}
             placeholder='Enter Your Name' value={this.state.name}/><br/><br/>
             <input onChange={(event)=>
             {this.setState({location:event.target.value})}}
               placeholder='Enter Your Email'value={this.state.location}/><br/><br/>
             <input onChange={(event)=>
              {this.setState({speciality:event.target.value})}}
                placeholder='Enter Your Study'value={this.state.speciality}/><br/><br/>
              <button onClick={()=>{this.update()}}>Update</button>
              </div>
           </div>
            
        );
    }
}
export default Restaurant_Update;