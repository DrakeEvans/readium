import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import SingleAuthor from './SingleAuthor'

export default class Authors extends Component {
  constructor () {
    super()
    this.state = {
      authors: []
    }
  }

  componentDidMount () {
    axios.get('/api/authors')
      .then(res => res.data)
      .then(authors => this.setState({authors}))
      .catch(console.log.bind(console))
  }

  render () {
    const authors = this.state.authors

    return (
      <div id='authors' className='column'>
        {
          authors.map(author => (
            <div className='author' key={author.id}>
              <Link to={'/authors/'+author.id}> {author.name} </Link>
              <hr />
            </div>
          ))
        }
      </div>
    )
  }
}
