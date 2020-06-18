import React from 'react';
import {Link} from 'react-router-dom';

function Photo(props) {
        const post = props.post;
        return (
                <figure className="figure">
                    <Link to={`/single/${post.id}`}><img src={post.imageLink} alt={post.description} className="photo" /></Link>
                    <figcaption><p>{post.description}</p></figcaption>
                    <div className="button-container">
                        <button onClick={() => {
                            props.startRemovingPhoto(props.index, post.id)
                            props.history.push('/')
                        }}>Remove</button>
                        <Link to={`/single/${post.id}`} className="button">
                            <div className="comment-count">
                                <div className="speech-bubble"></div>
                                {props.comment[post.id] ? props.comment[post.id].length : 0}
                            </div>
                        </Link>
                    </div>
                </figure>
        );
}
export default Photo;
