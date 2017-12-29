import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {configureStore} from "./store/store";
import {App} from "./App";
import { verifyCredentials } from "./redux-token-auth-config";

const store = configureStore();
verifyCredentials(store);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
