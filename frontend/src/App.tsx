import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Search from './redux/containers/Search'

const App = () => {
  return (
    <>
      <Header/>
      <main>
       <Search/>
      </main>
      <Footer/>
    </>

  );
}
export default App;
