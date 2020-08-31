import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import ListEmployee from './Components/ListEmployee';
import Header from './Components/Header';
import Footer from './Components/Footer';
import CreateEmployee from './Components/CreateEmployee';
import UpdateEmployee from './Components/UpdateEmployee';
import ViewEmployee from './Components/ViewEmployee';

function App() {
  return (
    <Router>
      <Header/>
        <div className="container">
           <Switch>
                <Route path="/" exact component={ListEmployee}></Route>
                <Route path="/employees" component={ListEmployee}></Route>
                <Route path="/add-employees/:id" component={CreateEmployee}></Route>
                <Route path="/view-employee/:id" component={ViewEmployee}></Route>
                { /*<Route path="/update-employees/:id" component={UpdateEmployee}></Route>*/}
           </Switch>
        </div>
     <Footer/>
    </Router>
  );
}

export default App;
