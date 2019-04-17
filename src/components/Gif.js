import React, { Component } from 'react'
import HeartButton from './Heart'
import ProgressiveImage from 'react-progressive-image'

class Gif extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false
    }
  }

  componentDidMount() {
    let favGifs = localStorage.getItem('favs')
    if (favGifs) {
      favGifs = JSON.parse(favGifs)
      this.setState({
        liked: favGifs[this.props.gif.id] ? true : false
      })
      
    }
  }

  updateFavs = () => {
    const { gif } = this.props
    let favGifs = localStorage.getItem('favs')
    if (favGifs) {
      favGifs = JSON.parse(favGifs)
      this.state.liked ? favGifs[gif.id] = gif : delete favGifs[gif.id]
      localStorage.setItem('favs', JSON.stringify(favGifs))
    } else {
      favGifs = {}
      this.state.liked ? favGifs[gif.id] = gif : console.log("ruh roh")
      localStorage.setItem('favs', JSON.stringify(favGifs))
    }
  }
  
  favGif = () => {
    this.setState({ liked: !this.state.liked }, this.updateFavs)
  }

  render() {
    return (
      <div className='gif-container'>
        <HeartButton 
          liked={this.state.liked} 
          favGif={this.favGif} 
        />
        <ProgressiveImage 
          src={this.props.gif.images.original.url} 
          placeholder={this.props.gif.images.original_still.url}>
          {src => (
            <img
              className='gif' 
              src={src} 
              alt={this.props.gif.title}
            />
          )}
        </ProgressiveImage>
      </div>
    )
  }
}
  
export default Gif