import React, { Component } from 'react';
import "../css/home.css";

class Home extends Component {
    render() { 
        return(
            <div>
                <header>
                    <div class="banner">
                        <a href="/">
                            <span class="blind">Paper Cat</span>
                        </a>
                    </div>
                </header>
                <body>

                    <form id="input-liner">
                        <div class="center-align-search-bar">
                            <input type="text" class="search bar"></input>
                            <button type="submit" class="button-submit"></button>
                        </div>
                    </form>
                </body>
            </div>
        );
    }
}

export default Home;