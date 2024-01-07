import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
//670a647c
const rootElement = document.getElementById('root');

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(rootElement);

// Now, you can render your app using root.render
root.render(<App />);
