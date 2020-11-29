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
        }
    }

    RemoveAllHistory = () =>{
        localStorage.clear();
        console.log("storage cleared");
        window.location.replace('/about');
    }

    render() { 
        const local_key = JSON.parse(localStorage.getItem("keyword", JSON.stringify("name")));
        console.log(local_key);

        return ( 
            <div className="contents-wrap">
                <div className="result-header">
                    <span className="Logo">
                        <a href='/'>페이퍼캣</a>
                    </span>
                    <span className="result-input-box">
                        <SearchBox></SearchBox>
                    </span>
                </div>
                <div className="body-contents">
                    <span className="keyword-box">
                        <History keyword={local_key} RemoveAllHistory={this.RemoveAllHistory}></History>
                        <Recommand keyword={local_key}></Recommand>
                    </span>
                    <span className="main-contents-box">
                        <PaperTable></PaperTable>
                    </span>
                </div>
            </div>
            
        );
    }
}
export default About;