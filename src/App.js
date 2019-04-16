import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import TrendingList from './components/TrendingList'


class App extends Component {
  constructor() {
    super()
    this.host       = 'http://api.giphy.com'
    this.pathTrend  = '/v1/gifs/trending'
    this.state = {
      trending: []
    }
  }

  componentDidMount() {
    axios
      .get(`${this.host}${this.pathTrend}?api_key=${process.env.REACT_APP_KEY}`)
      .then(res => this.setState({ trending: res.data.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="app">
        <div>welcome to gifhub</div>
        <TrendingList trending={this.state.trending}/>
      </div>
    )
  }
}

export default App
