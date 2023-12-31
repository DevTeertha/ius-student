import React from 'react';
import ReactDOM from 'react-dom/client';
import { Theme } from 'react-daisyui';

import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme dataTheme='light'>
      <div className='root-container'>
        <App />
      </div>
    </Theme>
  </React.StrictMode>
);
