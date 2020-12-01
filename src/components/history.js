import React, { Component } from 'react';
import '../css/history.css';

class Dataform extends Component {
    constructor(props){
        super(props);
    }
    render() { 
        return ( 
            <div className="history-data-form">
                <span>{this.props.name}</span>
                <button className="delete-button" onClick={()=>this.props.RemoveItem(this.props.name)}>
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                    </svg>
                </button>
            </div>
        );
    }
}

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    MapList = (data) =>{
        return(
        data.map((keyword, index) =>{ return (<Dataform RemoveItem={this.props.RemoveItem} name={keyword.name} key={index}/>);})
        );
    }

    render() {
        
        const keyword = this.props.keyword;
        console.log(keyword);

        if(!keyword)
            return(
                <div>
                    <div className="history-title">
                        <span>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'5px', marginRight:'5px'}}>
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </span>
                        <span>검색 기록</span>
                    </div>
                    <div className="history-box">
                        <div className="remove-all-history-button">
                            <button className="remove-all-button" onClick={this.props.RemoveAllHistory}>검색기록 삭제</button>
                        </div>
                    </div>
                </div>
            );
        else
            return (
                <div>
                    <div className="history-title">
                        <span>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'5px', marginRight:'5px'}}>
                            <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            </svg>
                        </span>
                        <span>검색 기록</span>
                    </div>
                    <div className="history-box">
                        <div className="remove-all-history-button">
                            <button className="remove-all-button" onClick={this.props.RemoveAllHistory}>검색기록 삭제</button>
                        </div>
                        {this.MapList(keyword)}
                        {console.log("complete")}
                    </div>
                </div> 
            );
    }
}

export default History ;