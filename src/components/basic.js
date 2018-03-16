import React, { Component } from 'react';
import { BrowserRouter as Router,Route,Link,Switch } from 'react-router-dom'

const BasicExample = ()=>(
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/topics">Topics</Link>
                </li>
            </ul>
            <Route exact path="/" component={Home}></Route>
            <Route  path="/About" component={About}></Route>
            <Route  path="/Topics" component={Topics}></Route>
        </div>

)
const Home = ()=>(
    <div>
        <h2>home</h2>
    </div>

)
const About =()=>{
    return (
        <div>
            <h2>About</h2>
        </div>
    )
}

const Topics =({ match })=>(

    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>Rendering with React</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
            </li>
        </ul>
        <Route exact path={`${match.path}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
)
/*const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)*/

class Topic extends Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        const {match} = this.props
        return(
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
        )
    }
}


export default BasicExample