import React from 'react'
import axios from 'axios'
import Comments from './Comments'
import NotFound from './NotFound'


// const this.state.story = {
//     title: 'Ships',
//     id: 2,
//     content: "A ship in port is safe,\nbut that's not what ships are built for",
//     author: {
//       id: 1,
//       name: 'Grace Hopper'
//     },
//     comments: [
//       {
//         id: 4,
//         content: 'I like ships!',
//         author: {
//           id: 2,
//           name: 'Alan Turing',
//           imageUrl: 'default-author.png'
//         }
//       }
//     ]
//   }

export default class SingleStory extends React.Component {
    
    constructor() {
        super()
        this.state = {
            story: null
        }
    }
    
    async componentDidMount() {
        console.log('ComponentDidMount', this.props.match.params)
        try {
            const response = await axios.get('/api/stories/'+this.props.match.params.storyId)
            this.setState({story: response.data})
        } catch (error) {
            console.log('error in SingleStory', error)
        }
    }
    
    render() {
        return (
            <div>
            {
            (this.state.story)
            ? <div id='single-story' className='column'>
            <h1>{this.state.story.title}</h1>
            <p>{this.state.story.content}</p>
            <h3>Responses:</h3>

            <Comments story={this.state.story} />

            </div>
            : <NotFound />
            }
        </div>
        )
            
            
        
    }
}