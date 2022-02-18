import { Component } from 'react';

import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/Practice_section/components/SearchComponent/SearchBar';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header>
					<Header />
				</header>
				<main className='container'>
					<SearchBar />
				</main>
			</div>
		);
	}
}

export default App;
