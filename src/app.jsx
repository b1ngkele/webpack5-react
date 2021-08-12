import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import BasicLayout from '@/components/BasicLayout/basicLayout';

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route path="/login" component={<div>123</div>} /> */}
        <Route path="/" component={BasicLayout} />
      </Switch>
    </Router>
  );
}

export default App;
