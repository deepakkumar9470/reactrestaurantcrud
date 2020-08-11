import React, { Component } from 'react'
import {Button,Container} from 'react-bootstrap'
import '../App.css';
class LoginPage extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }
    loginPage(){
        console.warn(this.state)
        fetch('http://localhost:3000/login?q='+this.state.name)
        .then((res)=>{
            res.json().then((result)=>{
             console.warn('data',result);
             if(result.lenght>0){
                 console.warn(this.props)
             }else{
                //  alert('Please Enter Valid authentication')
             } 
            })
          }) 
    }
    render() {
        return (
            <Container className='text-center  mt-5'>
                  <h2 className='display-4'>Login Here</h2>
                  
                  <input type="text" name="user" placeholder="Enter Name" 
                  onChange={(event)=>this.setState({name:event.target.value})}>
                  </input><br/><br/>
                   
                  <input type="password" name="password" placeholder="Enter Password" 
                  onChange={(event)=>this.setState({password:event.target.value})}>
                  </input><br/><br/>
                  
                  
                  <Button onClick={()=>{this.loginPage()}} type="submit" variant='info' >Login</Button>
                
            </Container>
        );
    }
}
export default LoginPage;