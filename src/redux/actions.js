import { database } from "../database/config"

export function startAddingPhoto(post){
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then(() => {
            dispatch(addPhoto(post))
        }).catch((error) =>{
            alert(error)
        })
    }
}

export function startAddingComment(comment, postId){
    return (dispatch) => {
        return database.ref(`comment/${postId}`).push(comment).then(() =>{
            dispatch(addComment(comment, postId))
        }).catch((error) =>{
            alert(error)
        })
    }
}

export function startLoadingComment(){
    return(dispatch) =>{
        return database.ref('comment').once('value').then((snapshot) =>{
            let comment = {}
            snapshot.forEach((childSnapshot) =>{
                comment[childSnapshot.key] = Object.values(childSnapshot.val())
            })
            dispatch(loadComment(comment))
        })
    }
}
export function startLoadingPhoto(){
    return (dispatch) => {
        return database.ref('posts').once('value').then((snapshot) => {
            let posts = []
            snapshot.forEach((childSnapshot) => {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPhoto(posts))
        }).catch((error) =>{
            alert(error)
        })
    }
}

export function startRemovingPhoto(index, id){
    return (dispatch) => {
        return database.ref(`posts/${id}`).remove().then(() =>{
            dispatch(removePhoto(index))
        })
    }
}

export function removePhoto(index){
    return{
        type: 'REMOVE_PHOTO',
        index: index
    }
}
export function addPhoto(post){
    return{
        type: 'ADD_PHOTO',
        post: post
    }
}
export function addComment(comment, postId){
    return{
        type: 'ADD_COMMENT',
        comment: comment,
        postId: postId
    }
}
export function loadPhoto(posts){
    return{
        type: 'LOAD_PHOTO',
        posts: posts
    }
}
export function loadComment(comment){
    return{
        type: 'LOAD_COMMENT',
        comment: comment
    }
}