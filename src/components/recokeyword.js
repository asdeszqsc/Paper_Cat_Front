import React, { Component } from 'react';
import '../css/history.css';



class Recommand extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            keyword:[
                {
                    id:0,
                    keyword:'머신러닝',
                },
                {
                    id:1,
                    keyword:'인공지능',
                },
                {
                    id:2,
                    keyword:'임베딩'
                }
            ]
        }
    }
    render() { 
        return ( 
            <div className="recommand-box">
                
            </div>
        );
    }
}

export default Recommand ;