import React from 'react';
import './App.css';

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Menu from './components/Menu';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import Restaurant_List from './components/Restaurant_List';
import Restaurant_Details from './components/Restaurant_Details';
import Restaurant_Search from './components/Restaurant_Search';
import Restaurant_Create from './components/Restaurant_Create';
import Restaurant_Update  from './components/Restaurant_Update'; 
const App=()=> {
  return (
     <Router>
       <div>
        <Menu/> 
       <Switch>
       <Route exact path='/'>
        <Home/>
       </Route>
       <Route exact path='/list'>
        <Restaurant_List/>
       </Route>
       <Route exact path='/details'>
        <Restaurant_Details/>
       </Route>
       <Route exact path='/search'>
        <Restaurant_Search/>
       </Route>
       <Route exact path='/create'>
        <Restaurant_Create/>
       </Route>
       
       <Route exact path='/update/:id' 
          render={props=>(
         <Restaurant_Update {... props}/>
          )}>
       </Route>
       <Route exact path='/login' 
          render={props=>(
         <LoginPage {... props}/>
         )}>
       </Route>
       
       </Switch>
       </div>
      </Router>
      
  );
}

export default App;
