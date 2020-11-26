import React, { Component } from 'react';
import '../css/result.css';
import Papers from './paper';
import { Paper } from '../server/papers_db.js';
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
        super(Paper);
        this.state = { 
            pageSize : 2,
            currentpage: 1,
        }
    }

    MapPaper = data =>{
        return(
            data.map((keyword, index) => {return(<Papers Paper={keyword} key={index}></Papers>);})
        );
    }

    handlePageChange = (page) =>{
        this.setState({...Paper, currentpage: page});
    };

    render() {
        const {length: count} = Paper;
        const pagecount = Math.ceil(count / this.state.pageSize);
        const pages = _.range(1, pagecount + 1);
        const pagedpaper = paginate(Paper, this.state.currentpage, this.state.pageSize);
        
        if(count === 0)
        return(<div>No search Results.</div>);
        
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