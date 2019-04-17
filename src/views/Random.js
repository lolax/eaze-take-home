import React, { Component } from 'react'
import Gif from '../components/Gif'
import axios from 'axios'

class Random extends Component {
  constructor(props) {
    super(props)
    this.host        = 'https://api.giphy.com'
    this.pathRandom  = '/v1/gifs/random'
    this.state = {
      gif: false,
      search: '',
      message: ''
    }
  }

  componentDidMount() {
    this.getRandomGif()
  }

  getRandomGif = () => {
    axios
      .get(`${this.host}${this.pathRandom}?api_key=${process.env.REACT_APP_KEY}`)
      .then(res => this.setState({ gif: res.data.data }))
      .catch(err => this.setState({ message: `There was an error: ${err.message}. It's likely that the api rate limit has been reached. I'm working on it :)` }))
  }

  render() {
    return (
      <div className='random' >
        <div className='button' onClick={this.getRandomGif}>Show me another!</div>
        {this.state.gif ? (
          <Gif gif={this.state.gif} />
        ) : (
          <div className='message'>Loading...</div>
        )}
        <div className='message'>{this.state.message}</div>
      </div>
    )
  }
}

export default Random

/* 
The random view renders a single gif returned by the /random endpoint of the api. 
I added a button to fetch a new random gif so that the fun is endless 
(until the rate limit is reached).
*/