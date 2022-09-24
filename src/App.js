import React, { useState } from 'react';
import { Link,Switch,Route, Redirect } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Product from './components/Product';
import Student from './components/Student';

function App ()  {
     
      const [login,setLogin] = useState(false)

    return (
      <div className="App">
          <h4>Resturant Delivery App</h4>
          <Link to="/home">Home</Link> | {" "}
          <Link to="/login">login</Link> | {" "}
          <Link to="/student/3">student</Link> | {" "}
          <Link to="/product/3">product</Link>

          <Switch>
              <Route  path="/home">
                   <Home />
              </Route>
              <Route  path="/student/:id" component={Student}/>
              <Route path="/product/:id">
                 {login?<Product/>:<Redirect to="/"/>}
              </Route>
              <Route  path="/login">
                   <Login />
              </Route> 
              <Route>
                <NotFound/>
              </Route>
          </Switch>
          

      </div>
    );

}

export default App;
