import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// アプリケーション全体で利用したいデータやテーマなどは、ここに設定することで全体に対して適用できる

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


