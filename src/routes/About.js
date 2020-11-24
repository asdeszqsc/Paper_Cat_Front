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
            id:0,
            keyword:'',
        }
    }
    render() { 
        return ( 
            <div className="contents-wrap">
                <div className="result-header">
                    <div className="result-input-box">
                        <SearchBox></SearchBox>
                    </div>
                </div>
                <div className="body-contents">
                    <span className="keyword-box">
                        <History></History>
                        <Recommand></Recommand>
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