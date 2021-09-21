import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';

import { LoginPage } from './pages/loginPage';
import { DashboardPage } from './pages/dashboardPage';

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}
