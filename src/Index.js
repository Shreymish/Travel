import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './App.css'; // ensure this file exists (case-sensitive)

const rootEl = document.getElementById('root');
createRoot(rootEl).render(<App />);