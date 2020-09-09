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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
