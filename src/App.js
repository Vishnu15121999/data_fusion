import React from 'react'
import Header from './components/Header';
import {Routes , Route} from 'react-router-dom';
import DashBoard from './components/DashBoard';
import './App.css';

const App = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<DashBoard/>}/>
        </Routes>
      </main>
    </div>
  )
}

export default App;