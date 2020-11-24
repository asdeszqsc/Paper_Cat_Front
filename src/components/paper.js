import React, { Component } from 'react';  
import { Paper } from '../server/papers_db.js';
import '../css/paper.css';


class Papers extends Component {
    constructor(props) {
        super(Paper);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="paper-form">
                <div className="title">
                    <a href={Paper[0].link}>
                        {Paper[0].title}
                    </a>
                </div>
                <div className="short-info">
                    <span className="author">{Paper[0].author} | </span>
                    <span className="academy">{Paper[0].academy} | </span>
                    <span className="year">{Paper[0].year}</span>
                    <button className='expand-button'>
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                    </button>
                </div>
            </div>
        );
    }
}
export default Papers;