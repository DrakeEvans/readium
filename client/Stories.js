import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Stories extends Component {
  constructor () {
    super()
  }

  render () {
    const stories = this.props.stories

    return (
      <div id='stories' className='column'>
        {
          stories.map(story => (
            <div className='story' key={story.id}>
              <Link to={'/stories/'+story.id}> {story.title} </Link>
              <a>
                <p>{story.author.name}</p>
              </a>
              <hr />
            </div>
          ))
        }
      </div>
    )
  }
}
