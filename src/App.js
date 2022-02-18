import { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/Practice_section/components/SearchComponent/SearchBar';
import HeroSection from './components/HeroSection/HeroSection';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header>
					<Header />
				</header>
				<Routes>
					<Route path='/' element={<HeroSection />} />
					<Route path='/projects' element={<SearchBar />} />
				</Routes>
			</div>
		);
	}
}

export default App;
