import React, { Component } from 'react';
import '../css/history.css';




class RecKeywordForm extends Component {
    state = { }

    render() { 
        return ( 
            <div>
                <div className="recommand-data-form">
                    <button onClick={() => this.props.AddbyClick(this.props.name, this.props.id)}>{this.props.name}</button>
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
        return(
        data.map((keyword, index) =>{ return (<RecKeywordForm AddbyClick={this.props.AddbyClick} name={keyword.name} key={index}/>);})
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