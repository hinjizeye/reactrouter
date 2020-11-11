import React from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Homepage from './HomePage';
import Minerals from './Minerals';
import Provinces from './Provinces';


function App() {
  return (
    <HashRouter>
      <div>
          <h1>ZAMBIA</h1>
          <ul className="header">
            <li><NavLink exact to="/" >Home</NavLink></li>
            <li><NavLink to ="/minerals">Minerals</NavLink></li>
            <li><NavLink to ="/provinces">Provinces</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" component={Homepage}/>
             <Route path="/minerals" component={Minerals}/>
             <Route path="/Provinces" component={Provinces}/>
          </div>
        </div>
    </HashRouter>
 
  );
}

export default App;
