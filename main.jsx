import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import QuizDemo from './QuizDemo';
import './styles.css';
createRoot(document.getElementById('root')).render(<React.StrictMode>{new URLSearchParams(location.search).get('demo')==='quiz'?<QuizDemo/>:<App/>}</React.StrictMode>);
