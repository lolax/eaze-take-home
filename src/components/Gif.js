import React, { Component } from 'react'
import HeartButton from './Heart'
import ProgressiveImage from 'react-progressive-image'

class Gif extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: false,
      details: false
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

  toggleDetails = () => {
    this.setState({ details: !this.state.details })
  }

  render() {
    const { gif } = this.props
    return (
      <div className='gif-container' >
        {this.state.details ? (
            <div className='details' onClick={this.toggleDetails}>
              <h3 className='title'>{gif.title}</h3>
              <div className='detail'>posted by: {gif.username ? gif.username : 'unknown'}</div>
              <div className='detail'>content rating: {gif.rating ? gif.rating : 'unknown'}</div>
              <a  className='detail-link' href={gif.source ? gif.source : gif.url}>link to source</a>
            </div>
          ) :  (
            <>
              <HeartButton 
              liked={this.state.liked} 
              favGif={this.favGif} 
              />
              <ProgressiveImage 
                src={gif.images.original.url} 
                placeholder={gif.images.original_still.url}>
                {src => (
                  <img
                    className='gif' 
                    src={src} 
                    alt={gif.title}
                    onClick={this.toggleDetails}
                  />
                )}
              </ProgressiveImage>
            </>
          ) 
        }
      </div>
    )
  }
}
  
export default Gif

/* 
The gif component is the essence of gifhub, where the true treasure lies.
These components were originally functional components, but I upgraded them
to class components in order to implement the favoriting functionality.

When a gif is favorited, the state is toggled so that the heart color updates
and the favorite object in local storage can update accordingly. When a gif is
favorited, it retrieves the item 'favs' from local storage and parses the JSON.
It then adds the new gif to the favs object with the gif id as the key and the
whole Gif Object as the value. Then it restringifies the JSON and puts it back 
into local storage. Similarly, if a gif is unfavorited, it removes it from this
list. While gifs can be favorited and unfavorited on any page, the application
doesn't currently update the favorites view when a gif is unfavorited from there.

I used progressive loading for the gifs so their original-sized still appears
while the rest of the gif is loading. Clicking on a gif will toggle between 
displaying the gif or its details (username, title, rating, source)
*/