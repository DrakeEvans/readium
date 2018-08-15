import React from 'react'
import axios from 'axios'


//author
export default class Comments extends React.Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }
    }
    
    async componentDidMount() {
        if (this.props.story) {
            console.log('this.props.story exists')
            const requestString = '/api/stories/'+ this.props.story.id
            console.log('request String', requestString)
            const response = await axios.get(requestString)
            this.setState({comments: response.data.comments})

        } else {
            console.log('this.props.story does not exist')
            const response = await axios.get('/api/authors/'+this.props.author.id+'/comments')
            this.setState({comments: response.data})
        }
    }
    
    
    render() {
        return (
            <div id='comments'>
                {this.state.comments.map(
                    (elem, index) => { return (
                        <div key={elem+index} className='comment row'>
                            <img src={elem.author.imageUrl} />
                            <div className='column'>
                                <a>
                                    <h5>{elem.author.name}</h5>
                                </a>
                                <div>{elem.content}</div>
                            </div>
                           
                        </div>
                    ) } 
                ) }
            </div>
        )    
    }
}