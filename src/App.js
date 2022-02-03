import { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import SessionReactBasic from './components/Practice_section/SessionReactBasic';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <Header />
        </header>
        <main className='container'>
          <HeroSection />
          <SessionReactBasic />
        </main>
      </div>
    );
  }
}

export default App;
