import Main from './Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as action from '../redux/actions';
import {withRouter} from 'react-router';

function mapStateToProps(state){
    return{
        posts: state.post,
        comment: state.comment
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators(action, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App