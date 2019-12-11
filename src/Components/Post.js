import React, { Component } from 'react';
import "../App.css";


class Post extends Component {
    state = {}

    render() {
        const { title } = this.props;
        return (
            <div className="postcontainer">


                {title}
            </div>

        );
    }
}

export default Post;