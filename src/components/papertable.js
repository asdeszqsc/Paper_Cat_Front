import React, { Component } from 'react';
import '../css/result.css';
import Papers from './paper';

class PaperTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="paper-result">
                <Papers></Papers>
            </div>
        );
    }
}

export default PaperTable;