import React, { Component } from 'react'
import GifList from '../components/GifList'
import axios from 'axios'

class Trending extends Component {
  constructor(props) {
    super(props)
    this.host       = 'https://api.giphy.com'
    this.pathTrend  = '/v1/gifs/trending'
    this.state = {
      gifs: [],
      message: '',
      page: 0
    }
  }

  componentDidMount() {
    axios
      .get(`${this.host}${this.pathTrend}?api_key=${process.env.REACT_APP_KEY}`)
      .then(res => this.setState({ gifs: res.data.data }))
      .catch(err => this.setState({ message: `There was an error: ${err.message}. It's likely that the api rate limit has been reached. I'm working on it :)` }))
  }

  // Work in progress: infinite scroll
  // handleScroll = e => {
  //   let bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
  //   if (bottom) { 
  //     axios
  //       .get(`${this.host}${this.pathTrend}?api_key=${process.env.REACT_APP_KEY}&offset=${this.state.page + 25}`)
  //       .then(res => this.setState({ gifs: [...this.state.gifs, ...res.data.data], page: this.state.page + 25 }))
  //       .catch(err => console.log(err))
  //   }
  // }

  render() {
    return (
      <div className='trending'>
        <div className='message'>{this.state.message}</div> 
        <GifList gifs={this.state.gifs} />
      </div>
    )
  }
}

export default Trending

/* 
The trending view renders a gif list populated by the response from
the /trending endpoint of the api. I began work on implementing an 
infinite scroll feature, but I was worried that I would reach my rate
limit again so I decided to put this feature on hold until I have a 
production api key with higher limits.
*/