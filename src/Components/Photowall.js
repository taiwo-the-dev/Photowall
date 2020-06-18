import React from 'react';
import Photo from './Photo';
import {Link} from 'react-router-dom';

function Photowall(props) {
        return (
            <div>
                <Link to="/AddPhoto"><button className="addIcon"> </button></Link>
                <div className="photoGrid">
                    {props.posts
                    .sort(function(x,y){
                        return y.id-x.id
                    })
                    .map((post, index)=> <Photo key={index} post={post} index={index} {...props}/>)}
                </div>
            </div>
        );
}

export default Photowall;
