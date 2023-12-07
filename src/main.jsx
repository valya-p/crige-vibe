import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {store} from './redux/store';
import {Provider} from 'react-redux';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import 'react-multi-carousel/lib/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </Provider>
)
