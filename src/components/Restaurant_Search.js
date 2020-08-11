import React, { Component } from 'react'
import {Table,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { FaEdit,FaTrash } from 'react-icons/fa';
import '../App.css';

 class Restaurant_Search extends Component {
    constructor(){
        super();
        this.state={
            searchData:null,
            noData:false,
            lastSearch:null,
        }
    }

search(key){
    console.log(key);
    this.setState({lastSearch:key})
    fetch('http://localhost:3000/restaurants?q='+key)
    .then((res)=>{
        res.json().then((result)=>{
         if(result.length>0){
            this.setState({searchData:result,noData:false})
         }else{
            this.setState({noData:true,searchData:null})
         }
           
        })
      })    
}

delete(id){
    fetch('http://localhost:3000/restaurants/'+id,
    {
        method:'DELETE',
        
      }).then((res)=>{
          res.json().then((result)=>{
              alert('Customers has been deleted');
              this.search(this.state.lastSearch)
          })
      })    
}
    render() {
        return (
            <div className='search-bg text-center '>
                <h1 className='text-white mt-5'>Restaurant Search</h1>
                  
                
                <Form.Control type='text' placeholder='Search' onChange={(event)=>this.search(event.target.value)} className='w-75 mx-auto'/>
                 <div>
                   {
                        this.state.searchData?
                        <div>
                        <Table striped bordered hover variant='dark text-center' responsive='sm' >
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
                              this.state.searchData.map((item)=>
                                // <div key={item.id} className='search'>{item.name}</div>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.location}</td>
                                        <td>{item.speciality}</td>
                                        <td><Link to={'/update/'+item.id}><FaEdit/></Link></td>
                                        <span onClick={()=>this.delete(item.id)}><FaTrash color='red'/></span>
                                     </tr>   
                                 )
                          }
                        </tbody>
                        </Table>
                        </div>
                        :''
                   }
                   {
                       this.state.noData?<h4>Data n't found..</h4>:null
                   }
                 </div>
                 </div>
        )
    }
}
export default Restaurant_Search;