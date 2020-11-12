import React, { Component } from 'react';
import SearchBox from "../components/Input";
import "../css/home.css";

class Home extends Component {
    render() { 
        return(
            <div>
                <header>
                    <div className="navbar">
                        <nav>
                            <span></span>
                        </nav>
                    </div>
                    <div class="banner">
                        <a href="/">
                            <span class="blind">Paper Cat</span>
                        </a>
                    </div>
                </header>
                <body>
                    <div>
                        <SearchBox/>
                    </div>
                </body>
            </div>
        );
    }
}

export default Home;