import React, { Component } from 'react'
import GifList from '../components/GifList'
import axios from 'axios'

class Trending extends Component {
  constructor(props) {
    super(props)
    this.host       = 'http://api.giphy.com'
    this.pathTrend  = '/v1/gifs/trending'
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    axios
      .get(`${this.host}${this.pathTrend}?api_key=${process.env.REACT_APP_KEY}`)
      .then(res => this.setState({ gifs: res.data.data }))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className='trending' >
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default Trending
