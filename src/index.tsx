import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react';

import App from "app.jsx";

import firstStore from "first.store";
import secondStore from "second.store";

const stores = {
    firstStore,
    secondStore
}


ReactDOM.render(
    <Provider {...stores}>
        <App/>
    </Provider>,
    document.getElementById('root')
)