import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cadastro from './Pages/Cadastro';
import LoginPage from './Pages/Login';
import Main from './Pages/Main'

import mapDispatchToProps from "./components/mapDispatchToProps";
import mapStateToProps from "./components/mapStateToProps";
import { connect } from "react-redux";

function App({ state }) {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact path='/'
          render={(props) => <LoginPage {...props} />}
        />
        {state === 'sucess' &&
          <Route path='/main'>
            <Main />
          </Route>}
        <Route path='/cadastro'>
          <Cadastro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
