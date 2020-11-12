import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/input.css';
import { FormControl, InputGroup, Button } from 'react-bootstrap';

class SearchBox extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="키워드 검색"
                        aria-label="키워드 검색"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">검색</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        );
    }
}

export default SearchBox;