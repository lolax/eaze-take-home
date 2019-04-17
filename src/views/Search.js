import React, { Component } from 'react'
import GifList from '../components/GifList'
import axios from 'axios'


class Search extends Component {
  constructor(props) {
    super(props)
    this.host       = 'http://api.giphy.com'
    this.pathSearch = '/v1/gifs/search'
    this.state = {
      gifs: [],
      search: '',
      searchEntered: false
    }
  }

  submitHandler = event => {
    event.preventDefault()
    this.setState({
      search: this.state.search.replace(" ", "+"),
      searchEntered: true
    })
    axios
      .get(`${this.host}${this.pathSearch}?q=${this.state.search}&api_key=${process.env.REACT_APP_KEY}`)
      .then(res => this.setState({ gifs: res.data.data }))
      .catch(err => console.log(err))
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className='search'>
        <form className='search-form' onSubmit={this.submitHandler}>
          <input 
            className='search-bar'
            placeholder='Search gifs'
            value={this.state.search}
            name='search'
            onChange={this.changeHandler}
          />
        </form>
        {this.state.gifs.length > 0 && (
          <GifList gifs={this.state.gifs} />
        )}
        {this.state.gifs.length < 1 && this.state.searchEntered && (
          <div className='message'>No gifs found, try another search!</div>
        )}
      </div>
    )
  }
}

export default Search
