import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './store/store';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>   
		</Provider>
	</React.StrictMode>
);

