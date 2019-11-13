import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Grups from './pages/grupos';
import Alimentos from './pages/main';
import FullScreenDialog from './pages/popup';
import SignInSide from './pages/login';
import SignOn from './pages/cadastro';

const Routes = ()=>(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignInSide}/>
            <Route path="/cadastro" component={SignOn}/>
            <Route path="/grupos" component={Grups}/>
            <Route path="/alimentos/:id" component={Alimentos}/>
            <Route path="/alimento/:id" component={FullScreenDialog}/>

        </Switch>
    </BrowserRouter>
);

export default Routes;