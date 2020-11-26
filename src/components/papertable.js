import React, { Component } from 'react';
import '../css/result.css';
import Papers from './paper';
import { Paper } from '../server/papers_db.js';





class PaperTable extends Component {
    constructor(props) {
        super(Paper);
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