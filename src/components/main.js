import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import ContactMe from './contactme';
import Projects from './projects';
import Resume from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contactme" component={ContactMe} />
        <Route path="/projects" component={Projects} />
        <Route path="/resume" component={Resume} />
    </Switch>
)

export default Main;