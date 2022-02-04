import React, { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';

class SessionReactBasic extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };

    // we would have to write this for each method like handleChange
    // so , using ES6 arrow function to avoid this problem
    // this.state = this.state.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div>
        <h1 style={{ padding: '1rem' }}>Our Crew</h1>
        <SearchBox
          placeholder={'search bots'}
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default SessionReactBasic;
