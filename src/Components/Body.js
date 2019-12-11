import React, { Component } from 'react';
import Post from './Post';
let title = ["divorce & family ", "Court marriage", "Real-Estate& Property dispeter lawyers", "Civil lawyers", "Corporate,Trade and Industrial", "Consumer Protection and Dispute", "Cyber", "Armed forces and Ttribunal"];

class body extends Component {
    render() {
        return (
            <div className="container">
                {title.map((layer, i) => {
                    return <Post title={layer} key={i} />;
                })}
            </div>
        );
    }
}

export default body;
