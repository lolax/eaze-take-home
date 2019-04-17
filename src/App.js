import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import './App.css'
import Trending from './views/Trending'
import Search from './views/Search'
import Random from './views/Random'
import Favorites from './views/Favorites'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <header className='header'>
          <h1 className='welcome'>GifHub</h1>
          <nav className='nav'>
            <Link className='nav-link' to='/trending'>Trending</Link>
            <Link className='nav-link' to='/favorites'>Favorites</Link>
            <Link className='nav-link' to='/random'>Random</Link>
            <Link className='nav-link' to='/search'>Search</Link>
          </nav>
        </header>
        <Route exact path='/' component={Trending} />
        <Route exact path='/trending' component={Trending} />
        <Route path='/search' component={Search} />
        <Route path='/random' component={Random} />
        <Route path='/favorites' component={Favorites} />
      </div>
    )
  }
}

export default App

/* 
App contains the nav bar and routes for each of the pages, 
which map to class components in the /views directory
*/