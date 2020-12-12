import React, { Component } from 'react';
import No_search_logo from '../image/no_result_logo.png'
import '../css/result.css';
import Papers from './paper';
import axios from 'axios';

import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber -1) * pageSize;

    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
}

class Nosearchresult extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="paper-result">
                <div className="no-results">
                    <img src={No_search_logo} className="no-results-img"></img>
                    <div className="no-results-font">앗..! 그런건 없어용~</div>
                </div>
            </div>
        );
    }
}



class PaperTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Paper: [], 
            pageSize : 10,
            startpage: 1,
            currentpage: 1,
            err: 0,
            Loading: 0,
        }
    }

    componentDidMount= async ()=>{        
        try{
            this.setState({Loading: 0}, ()=>{console.log('Loading...')});
            const response = await axios.get('http://110.14.247.126:8080/?search=${this.props.keyword[0].name}');
            this.setState({Paper: response.data});

        }
        catch(e){
            console.log(e);
        }
        this.setState({Loading: 0}, ()=>{console.log('Load complete!')});
    }


    MapPaper = data =>{
        return(
            data.map((keyword, index) => {return(<Papers Paper={keyword} key={index}></Papers>);})
        );
    }

    handlePageChange = (page) =>{
        this.setState({currentpage: page});
    };

    handlestartpage_plus = (data, count) =>{
        if(count <=10) return;

        else if(this.state.startpage >= count-19) {
            this.setState({startpage: count-9});
        }

        else
            this.setState({startpage: data+10});
    }

    handlestartpage_minus = (data) =>{
        if(this.state.startpage <=10) return;
        this.setState({startpage: data-10});
    }

    handlestartpage_last = (count) =>{
        if(count<=10) return;

        this.setState({startpage: count-9});
    }

    handlestartpage_first = () =>{
        this.setState({startpage: 1});
    }

    render() {
        const {length: keyword_count} = this.props.keyword;
        if(!this.state.Paper || keyword_count === 0) return(<Nosearchresult></Nosearchresult>);
        
        const {length: count} = this.state.Paper;
        const pagecount = Math.ceil(count / this.state.pageSize);
        let pages = _.range(this.state.startpage, pagecount+1);
        if(pagecount >= 10)
            pages = _.range(this.state.startpage, this.state.startpage + 10);
        const pagedpaper = paginate(this.state.Paper, this.state.currentpage, this.state.pageSize);

        return ( 
            <div className="paper-result">
                <span className="count-result">검색결과 {count}개</span>
                {this.MapPaper(pagedpaper)}
                <nav className="page-position">
                    <ul className="pagination">
                        <li>
                            <a className="page-link" onClick={this.handlestartpage_first}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="page-link" onClick={()=>this.handlestartpage_minus(this.state.startpage)}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </a>
                        </li>
                        {pages.map(page => (
                            <li key={page} className={page === this.state.currentpage ? "page-item active" : "page-item"}>
                                <a className="page-link" onClick={() => this.handlePageChange(page)}>{page}</a>
                            </li>
                        ))}
                        <li>
                            <a className="page-link" onClick={()=>this.handlestartpage_plus(this.state.startpage, pagecount)}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a className="page-link" onClick={()=>this.handlestartpage_last(pagecount)}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-double-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
                                <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default PaperTable;