import React from 'react';
import { Router, Route } from 'react-router-dom';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import history from '../history';


const App = () =>{
    return (
        <div>
            <Router history={history}>
                <Route path="/" exact component={Screen1} />
                <Route path="/details" exact component={Screen2} />
                <Route path="/success" exact component={Screen3} />
            </Router>
        </div>
    );
};

export default App;