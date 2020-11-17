import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/input.css';
import { FormControl, InputGroup, Button } from 'react-bootstrap';


// function SubmitInput(){
//     function handleClick(e){
//         e.preventDefault();
//         console.log('The link was clicked');
//     }

//     return(
//         <a></a>
//     );
// }


class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <span className="search-bar">
                <InputGroup className="mb-3">
                    
                    <FormControl
                        aria-label="키워드 검색"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button type="submit" variant="outline-secondary" className="input-button">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{marginBottom:'5px'}}>
                        <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                        </svg>
                    </Button>
                    </InputGroup.Append>
                </InputGroup>
            </span>
        );
    }
}

export default SearchBox;