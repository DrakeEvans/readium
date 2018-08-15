import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Stories from './Stories'

export default class AllStories extends Component {
    constructor () {
        super()
        this.state = {
          stories: []
        }
      }
    
      componentDidMount () {
        if (this.props.authorId) {
            axios.get(`/api/authors/${this.props.authorId}/stories`)
            .then(res => res.data)
            .then(stories => this.setState({stories}))
            .catch(console.log.bind(console))
        } else {
            axios.get('/api/stories')
            .then(res => res.data)
            .then(stories => this.setState({stories}))
            .catch(console.log.bind(console))
        }
      }
      
      render() {
          return <Stories stories={this.state.stories} />
      }
    
    
}