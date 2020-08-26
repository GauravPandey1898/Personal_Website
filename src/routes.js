import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App'
import Projects from './components/Projects/Projects'

function Routes() {
    return(
        <Router>
            <Route path="/" exact component={App}/>
            <Route path="/projects" exact component={Projects}/>
        </Router>
    )
}

export default Routes