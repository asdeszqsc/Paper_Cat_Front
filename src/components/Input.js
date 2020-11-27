import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/input.css';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class SearchBox extends Component {
    id=1;
    constructor(props) {
        super(props);
        this.state = { 
            word: "",
            keyword:[
            ],
        }
    }

    SubmitbyEnter = (target) => {
        if(target.charCode == 13){
            this.handleCreate(this.state.word);
        }
    }

    handleChange = (event) => {
        this.setState({word: event.target.value})
    }

    handleCreate = (data) =>{
        const {keyword} = this.state;
        this.setState({keyword: keyword.concat({id: this.id++, name: data})})
    }

    render() {
        const word = this.state.word;
        console.log(this.state.keyword);
        return ( 
            <span className="search-bar">
                <InputGroup className="mb-3" onKeyPress={this.SubmitbyEnter} onCreate={this.handleCreate}>
                    <FormControl
                        aria-label="키워드 검색"
                        aria-describedby="basic-addon2"
                        type="text"
                        value={word}
                        onChange={this.handleChange}
                    />
                    <InputGroup.Append>
                        <Link to={{pathname:'/about/${this.state.keyword}', state: {keyword: this.state.keyword} }} >
                            <Button type="submit" variant="outline-secondary" className="input-button" >
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'10px', position:'absolute', right:'8px', top:'8px'}}>
                                <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                                <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                                </svg>
                            </Button>
                        </Link>
                    </InputGroup.Append>
                </InputGroup>
            </span>
        );
    }
}

export default SearchBox;