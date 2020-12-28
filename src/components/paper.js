import React, { Component} from 'react';  
import { Paper } from '../server/papers_db.js';
import '../css/paper.css';


class Shortinfo extends Component {
    state = {  }
    render() { 
        return ( 
            <span className="short-info-form">
                <span className="shortinfo"> {this.props.Paper.author[0]} | </span>
                <span className="shortinfo">{this.props.Paper.academy} | </span>
                <span className="shortinfo">{this.props.Paper.year}</span>
            </span>
        );
    }
}

class Detailinfo extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <ul className="detail-form">
                    <li className="detail-list-form">
                        <div className="strong">저자</div>
                        <div className="detail-info">{this.props.Map_author(this.props.Paper.author)}</div>
                    </li>
                    <li className="detail-list-form">
                        <div className="strong">학회</div>
                        <div className="detail-info">{this.props.Paper.academy}</div>
                    </li>
                    <li className="detail-list-form">
                        <div className="strong">발행연도</div>
                        <div className="detail-info">{this.props.Paper.year}</div>
                    </li>
                </ul>
            </div>
        );
    }
}


class Author extends Component {
    render() { 
        return ( 
            <span>{this.props.author} </span>
        );
    }
}

class Keyword extends Component {
    render() {
        return (
            <span className="paper-keyword-form">{this.props.keyword} </span>
        );
    }
}

class RecPaper extends Component {
    render() {
        return (
            <div className="paper-rec-form">
                {this.props.key}. {this.props.recommend_paper}
            </div>
        );
    }
}

class RefPaper extends Component {
    render() { 
        return ( 
            <div className="paper-ref-form">
                {this.props.key}. {this.props.reference}
            </div>
        );
    }
}


class Papers extends Component{
    constructor(props) {
        super(Paper);
        this.state = { 
            isfold: 0,
        }
    }

    Map_author = data =>{
        return(
            data.map((keyword, index) => {return(<Author author={keyword} key={index}></Author>);})
        );
    }

    Map_keyword = data =>{
        return(
            data.map((keyword, index) => {return(<Keyword keyword={keyword} key={index}></Keyword>);})
        );
    }

    Map_recpaper = data =>{
        return(
            data.map((keyword, index) => {return(<RecPaper recommend_paper={keyword} key={index}></RecPaper>);})
        );
    }

    Map_ref = data =>{
        return(
            data.map((keyword, index) => {return(<RefPaper reference={keyword} key={index}>{index}</RefPaper>);})
        );
    }

    UnfoldByClick = () =>{
        this.setState({isfold: this.state.isfold === 1? 0 : 1});
    }
    
    render() {
        if(this.state.isfold === 0)
            return(
                <div className="before-expand">
                    <div className="title"> 
                        <a href={this.props.Paper._source.link} target="_blank">
                            {this.props.Paper._source.title}
                        </a>
                    </div>
                    <div className="before-short-info">
                        <Shortinfo Paper={this.props.Paper._source}></Shortinfo>
                        <span>
                            <button className='expand-button' onClick={this.UnfoldByClick}>
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </button>
                        </span>
                    </div>
                </div>
            );

        return ( 
            <div className="paper-form">
                <div className="title"> 
                    <a href={this.props.Paper._source.link} target="_blank">
                        {this.props.Paper._source.title}
                    </a>
                </div>
                <Detailinfo Paper={this.props.Paper._source} Map_author={this.Map_author}></Detailinfo>
                    <div className="abstract">
                        <div className="paper-title-box">
                            초록
                        </div>
                        {this.props.Paper._source.abstract}
                    </div>
                    <div className="reference">
                        <div className="paper-title-box">
                            참고 문헌
                        </div>
                        {this.Map_ref(this.props.Paper._source.reference)}
                    </div>
                    <div className="recommand-paper">
                        <div className="paper-title-box">
                            추천 논문
                        </div>
                        {this.Map_recpaper(this.props.Paper._source.recommend_paper)}
                    </div>
                    <div className="keyword">
                        <div className="paper-title-box">
                            키워드
                        </div>
                        {this.Map_keyword(this.props.Paper._source.keyword)}
                    </div>
                    <div className="fold-button-form">
                        <button className="fold-button" onClick={this.UnfoldByClick}>
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
                            </svg>
                        </button>
                    </div>
            </div>
        );
    }
}
export default Papers;