import React, { Component } from 'react';  
import { Paper } from '../server/papers_db.js';
import '../css/paper.css';

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
                {this.props.key}. {this.props.recommand_paper}
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
        this.state = {  }
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
            data.map((keyword, index) => {return(<RecPaper recommand_paper={keyword} key={index}></RecPaper>);})
        );
    }

    Map_ref = data =>{
        return(
            data.map((keyword, index) => {return(<RefPaper reference={keyword} key={index}>{index}</RefPaper>);})
        );
    }

    render() {
        return ( 
            <div className="paper-form">
                <div className="title"> 
                    <a href={this.props.Paper.link}>
                        {this.props.Paper.title}
                    </a>
                </div>
                <div className="short-info">
                    <span className="author">
                        <div className="paper-title-box">
                            저자
                        </div>
                        {this.Map_author(this.props.Paper.author)}
                    </span>
                    <span className="academy">
                        <div className="paper-title-box">
                            학회
                        </div>
                        {this.props.Paper.academy} 
                    </span>
                    <span className="year">
                        <div className="paper-title-box">
                            발행연도
                        </div>
                        {this.props.Paper.year}
                    </span>
                    <button className='expand-button'>
                    <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-caret-down-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                    </button>
                </div>
                    <div className="abstract">
                        <div className="paper-title-box">
                            초록
                        </div>
                        {this.props.Paper.abstract}
                    </div>
                    <div className="reference">
                        <div className="paper-title-box">
                            참고 문헌
                        </div>
                        {this.Map_ref(this.props.Paper.reference)}
                    </div>
                    <div className="recommand-paper">
                        <div className="paper-title-box">
                            추천 논문
                        </div>
                        {this.Map_recpaper(this.props.Paper.recommand_paper)}
                    </div>
                    <div className="keyword">
                        <div className="paper-title-box">
                            키워드
                        </div>
                        {this.Map_keyword(this.props.Paper.keyword)}
                    </div>
            </div>
        );
    }
}
export default Papers;