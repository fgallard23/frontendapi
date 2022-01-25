import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavegationBar from "./componentes/site/layout/NavegationBar";
import NotFound from "./componentes/site/pages/NotFound";
import Home from "./componentes/site/pages/Home";
import ContentFile from "./componentes/site/apiexterno/ContentFile";
// state
import ApiState from './componentes/context/apicontext/ApiState';

const App = () => {
  return (
    <ApiState>
      <Router>
        <div className="App">
          <NavegationBar title=' React Test App' icon='fas fa-search' />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/files/data/:filename' component={ContentFile} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </ApiState>
  );
}

export default App;
