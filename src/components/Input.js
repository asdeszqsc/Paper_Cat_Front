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
            <div className="search-bar">
                <InputGroup className="mb-3">
                    <FormControl
                        aria-label="키워드 검색"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button type="submit" variant="outline-secondary">검색</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
}

export default SearchBox;