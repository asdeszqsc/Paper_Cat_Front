import React, { Component } from 'react';
import No_search_logo from '../image/no_result_logo.png'
import '../css/result.css';
import Papers from './paper';
import papers from '../server/data_10000.json';
import _ from 'lodash';

export function paginate(items, pageNumber, pageSize){
    const startIndex = (pageNumber -1) * pageSize;

    return _(items)
        .slice(startIndex)
        .take(pageSize)
        .value();
}


class PaperTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Paper: JSON.parse(papers), 
            pageSize : 10,
            currentpage: 1,
        }
    }
    MapPaper = data =>{
        return(
            data.map((keyword, index) => {return(<Papers Paper={keyword} key={index}></Papers>);})
        );
    }

    handlePageChange = (page) =>{
        this.setState({currentpage: page});
    };

    render() {
        const {length: count} = this.state.Paper.data;
        const {length: keyword_count} = this.props.keyword;
        const pagecount = Math.ceil(count / this.state.pageSize);
        const pages = _.range(1, pagecount + 1);
        const pagedpaper = paginate(this.state.Paper.data, this.state.currentpage, this.state.pageSize);
        
        if(count === 0 || keyword_count === 0)
        return(
            <div className="paper-result">
                <div className="no-results">
                    <img src={No_search_logo} className="no-results-img"></img>
                    <div className="no-results-font">앗..! 그런건 없어용~</div>
                </div>
            </div>
            );
        
        return ( 
            <div className="paper-result">
                <span className="count-result">검색결과 {count}개</span>
                {this.MapPaper(pagedpaper)}
                <nav className="page-position">
                    <ul className="pagination">
                        {pages.map(page => (
                            <li key={page} className={page === this.state.currentpage ? "page-item active" : "page-item"}>
                                <a className="page-link" onClick={() => this.handlePageChange(page)}>{page}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default PaperTable;