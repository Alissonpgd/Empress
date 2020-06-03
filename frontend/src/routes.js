import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './Pages/Logon';
import Register from './Pages/Register';
import Cadastro from './Pages/Cadastro';
import Solicitacao from './Pages/Solicitacao';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/solicitacao" component={Solicitacao} />
            </Switch>
        </BrowserRouter>
    );
}