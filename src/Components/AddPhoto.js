import React, { Component } from 'react';
class AddPhoto extends Component {
    constructor(){
        super()
        this.photoSubmission = this.photoSubmission.bind(this)
    }
    photoSubmission(e){
        e.preventDefault();
        const imageLink = e.target.link.value
        const description = e.target.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if(imageLink && description){
            this.props.startAddingPhoto(post)
            this.props.onHistory.push('/')
        }
    }
    render() { 
        return (
            <div>
                <div className="form">
                    <form onSubmit={this.photoSubmission}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="description" name="description" />
                        <button>Post</button>
                    </form>
                </div>
            </div>
            )
    }
}
 
export default AddPhoto;