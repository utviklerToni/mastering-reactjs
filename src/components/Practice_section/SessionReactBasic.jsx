import React, { Component } from 'react';
import CardList from './components/card-list/CardList';

class SessionReactBasic extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}
export default SessionReactBasic;
