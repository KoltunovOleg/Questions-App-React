import React, { Component } from 'react';

class Answer extends Component {
    render() {
      // console.log(this.props.number);
      // console.log(this.props.value);
        return (
            <li>
              <p>Answer for question №{this.props.number}: {this.props.value}</p>
              <p>Status: {this.props.status}</p>
            </li>
        );
    }
}
export default Answer;