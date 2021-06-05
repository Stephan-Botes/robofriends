import React from 'react'; // Core of package that does the view manipulation
import ReactDOM from 'react-dom'; // Used for DOM websites
import './index.css'; // Add css for ech specific component - can have multiple css files for multiple components
import 'tachyons'; // Library for styling the webpage
import reportWebVitals from './reportWebVitals';
import App from './containers/App/App';

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root')
);

reportWebVitals();
