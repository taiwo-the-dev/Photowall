import React from 'react';
import Photowall from './Photowall';
import AddPhoto from './AddPhoto';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Single from './Single';

class Main extends React.Component { 
    state = {loading: true}
    componentDidMount(){
        this.props.startLoadingPhoto().then(() =>{
            this.setState({loading: false})
        })
        this.props.startLoadingComment()
    }

    render() {
        return ( 
            <div>
                <h1>
                    <Link to="/"> Photowall </Link>
                </h1>
                <Route exact path="/" render={()=>(
                    <Photowall {...this.props}/>
                )} />
                <Route path="/AddPhoto" render={({history}) =>(
                    <AddPhoto {...this.props} onHistory={history}/>
                )} />
                <Route path="/single/:id" render={(params)=>(
                    <Single loading={this.state.loading} {...this.props} {...params}/>
                )} />
            </div>
         );
    }
}

 
export default Main;