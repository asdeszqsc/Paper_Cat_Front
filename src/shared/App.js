import React, { Component } from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import {Home, About, Temppaper} from '../routes';

class App extends Component {
    render(){ 
        return( 
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About} />
                <Route path="/temp" component={Temppaper}></Route>
            </div>
        );
    }
}
export default App;
