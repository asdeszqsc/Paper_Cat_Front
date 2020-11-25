import React, { Component } from 'react';
import '../css/history.css';




class RecKeywordForm extends Component {
    state = { }
    render() { 
        return ( 
            <div>
                <div className="recommand-data-form">
                    <span>{this.props.name}</span>
                </div>
            </div> 
        );
    }
}


class Recommand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:[
                {
                    id:1,
                    name:'LSTM',
                },
                {
                    id:2,
                    name:'CNN',
                },
                {
                    id:3,
                    name:'RNN'
                }
            ]
        }
    }
    
    MapList = (data) =>{
        console.log(data);
        return(
        data.map((keyword, index) =>{ return (<RecKeywordForm name={keyword.name} key={index}/>);})
        );
    }

    render() { 
        const {keyword}= this.state;
        return ( 
            <div className="recommand-box">
                <h5 className="recommand-title">추천 키워드</h5>
                {this.MapList(keyword)}
            </div>
        );
    }
}

export default Recommand ;