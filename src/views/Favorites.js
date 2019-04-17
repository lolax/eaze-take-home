import React, { Component } from 'react'
import GifList from '../components/GifList'

class Favorites extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gifs: []
    }
  }

  componentDidMount() {
    let favGifs = localStorage.getItem('favs')
    if (favGifs) {
      favGifs = Object.values(JSON.parse(favGifs))
      this.setState({ gifs: favGifs })
    }
  }
  
  render() {
    return (
      <div className='favorites' >
        {this.state.gifs.length > 0 ? (
          <GifList gifs={this.state.gifs} />
        ) : (
          <div className='message'>Favorite some gifs to see them here!</div>
        )}
      </div>
    )
  }
}
  
  export default Favorites
  