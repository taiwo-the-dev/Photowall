import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './comments';

class Single extends Component {
    render() { 
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
        const comments = this.props.comment[id] || []
        const index = this.props.posts.findIndex((p) => p.id === id)
        if(this.props.loading === true){
            return <div className="loader">...loading</div>
        }else if(post){
            return ( 
                <div className="single-photo">
                    <Photo post={post} {...this.props} index={index}/>
                    <Comments addComment={this.props.startAddingComment} comment={comments} id={id}/>
                </div>
            );
        } else{
            return <h1>.... Post Does not Exist</h1>
        }  
    }
}
 
export default Single;