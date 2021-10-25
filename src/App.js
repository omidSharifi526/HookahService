import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './asset/style/totalStyle.css';



import Home from './Pages/Home';
import OrderHookah from './Pages/OrderHookah';






function App() {
  return (
   <div>
     <Router>
      <div style={{direction:'rtl'}}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        
 
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <Link className="nav-item nav-link" to="/" >خانه</Link>
    <Link className="nav-item nav-link" to="/OrderHookah" >سفارش قلیون</Link>
    <Link className="nav-item nav-link" to="/" >سفارش غذا</Link>
    <Link className="nav-item nav-link" to="/" >درباره ی ما</Link>
   
    </div>

    
    
    
  </div>
</nav>

         


      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
         
          <Route exact path="/OrderHookah">
            <OrderHookah/>
          </Route>
          <Route exact path="">
            <Home/>
          </Route>
       
        </Switch>

        
      </div>
    </Router>
     
    
   </div>
  );
}

export default App;
