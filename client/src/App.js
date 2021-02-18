import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Blog from './pages/Blog';
import FourOFour from './components/atoms/FourOFour';
import BlogAdmin from './pages/BlogAdmin';
import News from './pages/News';
import PrivateUserRoute from './utils/PrivateUserRoute';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact component={Blog} path={'/'} />
                <Route component={Login} path={'/login'} />
                <Route component={Register} path={'/register'} />
                <PrivateUserRoute component={News} path={'/news'} />
                <Route component={BlogAdmin} path={'/admin'} />
                <Route component={FourOFour} path={'*'} />
            </Switch>
        </Router>
    );
}

export default App;
