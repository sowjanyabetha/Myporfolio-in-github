import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './landingpage';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';


function Main() {
  return(
    <Switch>
      <Route exact path="/MyPortfolio-in-github" component={Landing} />
      <Route path="/contact" component={Contact} />
      <Route path="/projects" component={Projects} />
      <Route path="/resume" component={Resume} />
    </Switch>
  );
}

export default Main;
