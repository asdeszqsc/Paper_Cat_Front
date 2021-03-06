import React, { Component } from 'react';
import History from '../components/history';
import SearchBox from '../components/Input';
import Recommand from '../components/recokeyword';
import PaperTable from '../components/papertable';
import '../css/result.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword: JSON.parse(localStorage.getItem("keyword", JSON.stringify("name"))) || []
        }
    }

    gotoResult = () =>{
        localStorage.setItem('keyword', JSON.stringify(this.state.keyword));
        console.log(localStorage.getItem("keyword"));
        console.log(this.state);
        window.location.replace('/about/');
    }

    RemoveAllHistory = () =>{
        localStorage.clear();
        window.location.replace('/about');
        console.log("storage cleared");
    }

    RemoveAllHistorytoHome = () =>{
        localStorage.clear();
        window.location.replace('/');
        console.log("storage cleared");
    }

    RemoveItem = (name) =>{
        const {keyword} = this.state;
        this.setState({keyword: keyword.filter(info => info.name !== name)}, ()=> {this.gotoResult()});
    }

    AddbyClick = (data, id) =>{
        const {keyword} = this.state;
        const {length : count} = this.state.keyword;
        if(count >=3 ) return(alert('키워드는 3개까지만 검색할 수 있어용~'));
        this.setState({keyword: keyword.concat({id: id, name: data})}, ()=> {this.gotoResult()});
    }

    
    render() { 
        return ( 
            <div className="contents-wrap">
                <div className="result-header">
                    <span className="Logo">
                        <a className="hidden-logo" href='/' onClick={this.RemoveAllHistorytoHome}>페이퍼캣</a>
                    </span>
                    <span className="result-input-box">
                        <SearchBox></SearchBox>
                    </span>
                </div>
                <div className="body-contents">
                    <span className="keyword-box">
                        <History keyword={this.state.keyword} RemoveAllHistory={this.RemoveAllHistory}
                            RemoveItem={this.RemoveItem}
                        />
                        <Recommand keyword={this.state.keyword} AddbyClick={this.AddbyClick}/>
                    </span>
                    <span className="main-contents-box">
                        <PaperTable keyword={this.state.keyword}></PaperTable>
                    </span>
                </div>
            </div>
            

            
        );
    }
}
export default About;