//import react
import React from 'react';
//import react dom
import ReactDOM from 'react-dom';
//import app component
import App from './components/App';
//import context provider
import { ContextProvider } from './utils/Context';
//import service worker
import * as serviceWorker from './serviceWorker';
//import the styles
import './index.css';

ReactDOM.render(
	<ContextProvider>
		<App />
	</ContextProvider>,
	document.getElementById('root'),
);

//service worker
serviceWorker.register();
