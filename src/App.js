import React from 'react';
import './App.css';
import MarkdownEditor from './components/MarkdownEditor';
import MarkdownPreviewer from './components/MarkdownPreviewer';

function App() {
  return (
    <div className='content'>
      <MarkdownEditor />
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
