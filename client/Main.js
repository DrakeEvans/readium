import React from 'react'
import Navbar from './Navbar'
import Stories from './Stories'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import SingleStory from './SingleStory'
import SingleAuthor from './SingleAuthor'
import Authors from './Authors'
import AllStories from './AllStories'
import NotFound from './NotFound'

export default class Main extends React.Component {
  render () {
    return (
    <HashRouter >
      <div id='main'>
        <div className='column container'>
          <div id='header'>
            <h1>Readium</h1>
          </div>
          <Navbar />
        </div>
        <Switch>
            <Route exact path='/stories' component={AllStories} />
            <Route exact path='/' component={AllStories} />
            <Route path='/stories/:storyId' component={SingleStory} />
            <Route exact path='/authors' component={Authors} />
            <Route path='/authors/:authorId' component={SingleAuthor} />
            <Route component={NotFound} />
        </Switch>
      </div>
      </HashRouter>
    )
  }
}
