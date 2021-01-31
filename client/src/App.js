import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Blog from './pages/Blog';
import FourOFour from './components/atoms/FourOFour';

function App() {
    return (
        <Router>
            <Switch>
                <Route component={Blog} path={'/'} />
                <Route component={} path={} />

                <Route component={FourOFour} path={'*'} />
            </Switch>
        </Router>
    );
}

export default App;
