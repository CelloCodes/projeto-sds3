import Dashboard from 'pages/Dashboard';
import Homepage from 'pages/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Homepage />
                </Route>
                <Route path='/dashboard'>
                    <Dashboard />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;