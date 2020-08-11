import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../App.css';
import { FaHome, FaList, FaPlus,FaSearch, FaUtensils} from 'react-icons/fa';
const Menu=()=>{
     return (
         <div>
         <Navbar bg="dark" expand="lg" sticky="top">
         <Navbar.Brand href="#home" className="text-white"><FaUtensils color='green' size='1.5rem'/>Restaurant-Delicious</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav"  className="text-white"/>
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="mr-auto">
             <Nav.Link href="#login"><Link to='/login'>Login</Link></Nav.Link>
             <Nav.Link href="#home"><Link to='/'><FaHome />Home</Link></Nav.Link>
             <Nav.Link href="#link"><Link to='/list'><FaList />List</Link></Nav.Link>
             <Nav.Link href="#link"><Link to='/create'><FaPlus />Create</Link></Nav.Link>
             <Nav.Link href="#link"><Link to='/search'><FaSearch />Search</Link></Nav.Link>
             
           </Nav>
        </Navbar.Collapse>
         </Navbar>
    
         </div>
     );
};
export default Menu;