import React from 'react'
import axios from 'axios'
import Stories from './Stories'
import Comments from './Comments'
import AllStories from './AllStories'
import {Route, Link} from 'react-router-dom'
import NotFound from './NotFound'

export default class SingleAuthor extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            author: null
        }
        this.baseUrl = this.props.location.pathname


    }
    
    async componentDidMount() {
        console.log('ComponentDidMount')
        console.log('this.props.location', this.props.location)

        const response = await axios.get('/api/authors/'+this.props.match.params.authorId)
        this.setState({author: response.data})
    }
    
    
    
    render() {
        return (
        <div>
            {
            (this.state.author)
            ? 
            <div id='single-author' className='column'>
                <div id='single-author-detail' className='row'>
                    <div className='column mr1'>
                        <h1>{this.state.author.name}</h1>
                        <p>{this.state.author.bio}</p>
                    </div>
                    <img src={this.state.author.imageUrl} />
                </div>
                <div id='single-author-nav'>
                    <Link to={`${this.baseUrl}/storyList`}>Stories</Link>
                    <Link to={`${this.baseUrl}/commentList`}>Comments</Link>
                </div>
                <hr />
                <div>
                    <Route path={`${this.baseUrl}/storyList`} render={() => <AllStories authorId={this.state.author.id}/>} />
                    <Route path={`${this.baseUrl}/commentList`} render={() => <Comments author={this.state.author} />} />
                </div>
                    
                <div>
                    
                    
                </div>
            </div>
            : <NotFound />
            }
        </div>
        )
            
            
        
    }
}