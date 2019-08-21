import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Team } from './ac.team';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      team: Team,
      searchField: '',
      filter: '',
    };
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };

  handleFilter = type => {
    const filter = Team.filter(dev => dev.type.includes(type));
    this.setState({ team: filter });
  };

  render() {
    const { team, searchField } = this.state;
    const filteredTeam = team.filter(dev =>
      dev.name.toLowerCase().includes(searchField.toLocaleLowerCase()),
    );

    return (
      <div className='App'>
        <h1>ALLCONNECT DEVELOPERS</h1>
        <SearchBox
          placeholder='search by developer'
          handleChange={this.handleChange}
        />
        <div className='button-container'>
          <button onClick={() => this.handleFilter('back-end')}>
            Back-End
          </button>
          <button onClick={() => this.handleFilter('front-end')}>
            Front-End
          </button>
          <button onClick={() => this.setState({ team: Team })}>
            Everybody
          </button>
        </div>
        <CardList monsters={filteredTeam} />
      </div>
    );
  }
}

export default App;
