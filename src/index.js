import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {store} from './redux/store';
import {Provider} from 'react-redux';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </Provider>,
);
