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
      search: ''
    }
  }

  componentDidMount() {
    this.getRandomGif()
  }

  getRandomGif = () => {
    axios
      .get(`${this.host}${this.pathRandom}?api_key=${process.env.REACT_APP_KEY}`)
      .then(res => this.setState({ gif: res.data.data }))
      .catch(err => console.log(err))
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
      </div>
    )
  }
}

export default Random
