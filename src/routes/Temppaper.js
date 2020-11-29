import React, { Component } from 'react';
import papers from '../server/result2.json';


class Temppaper extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

    componentDidMount(){
      this._getList(papers);
    }

    _getList = (data) => {
      this.setState({paper: JSON.parse(data)});
    }

  render() { 
    {console.log(this.state)}
    return (
      
      <div>
        
      </div>
    );
  }
}
export default Temppaper;