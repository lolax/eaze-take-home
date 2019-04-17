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
  
/* 
The favorites view renders a gif list populated by the gifs saved in local storage
in the 'favs' item. I chose to local storage for this feature so that favorites would
persist across refetches, but I wouldn't need to implement auth. The structure of the
local storage item is an object with gif ids as keys and the Gif Object (tm) as values.

I set it up this way so that it would be faster to find/add/remove gifs from the list
when the user toggles the heart button. Local storage only wants strings so I had to 
translate between JSON.parse and JSON.stringify in order to read and update the objects.
To see the other half of this favoriting implementation, check out Gif and Heart in /components.
*/