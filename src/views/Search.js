import React, { Component } from 'react'
import GifList from '../components/GifList'
import axios from 'axios'

class Search extends Component {
  constructor(props) {
    super(props)
    this.host       = 'https://api.giphy.com'
    this.pathSearch = '/v1/gifs/search'
    this.state = {
      gifs: [],
      search: '',
      searchEntered: false,
      message: ''
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
      .catch(err => this.setState({ message: err.message }))
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
        <div className='message'>{this.state.message}</div>
      </div>
    )
  }
}

export default Search

/* 
The search view renders a gif list populated by the response from
the /search endpoint of the api. It automatically formats search inputs
to be accepted by the endpoint parameters. The boolean "searchEntered"
on state so that an error message will be displayed if a search was attempted
and no gifs were returned. 
*/