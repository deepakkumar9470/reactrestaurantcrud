import React, { Component } from 'react';
import { FaEdit,FaTrash } from 'react-icons/fa';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css';

 class Restaurant_List extends Component {
     constructor(){
         super();
         this.state={
             list:null,
         }
     }
componentDidMount(){
      this.getData()
          
}
getData(){
    fetch('http://localhost:3000/restaurants')
    .then(res=>res.json())
    .then(result=>{
     //    console.log(result);
        this.setState({list:result})
    })
}
delete(id){
    fetch('http://localhost:3000/restaurants/'+id,
    {
        method:'DELETE',
        
      }).then((res)=>{
          res.json().then((result)=>{
              alert('Customers has been deleted');
              this.getData()
          })
      })    
}
  render() {
        return (
            <div className='create-bg text-center'>
            
                <h2 className='text-white mt-3'>Customer List</h2>
                
                {
                    this.state.list?
                    <div>
                    <Table  striped bordered hover variant='dark text-center' responsive="sm">
                            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Location</th>
                                <th>Speciality</th>
                                <th>Operations</th>
                            </tr>
                            </thead>
                            <tbody>
                           
                    
                    
                            { 
                            
                                this.state.list.map((item,i)=>
                                    
                                        <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.location}</td>
                                        <td>{item.speciality}</td>
                                        <td><Link to={'/update/'+item.id}><FaEdit/></Link></td>
                        <a onClick={()=>this.delete(item.id)}><FaTrash color='red'/></a>
                                    </tr>
                                    )
                            }     
                                
                            
                            </tbody>
                            </Table>
                    </div>
                    : <p>Please Wait.....</p>
                }
            </div>
        );
    }
}
export default Restaurant_List;