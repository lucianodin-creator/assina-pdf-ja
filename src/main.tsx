import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>AssinaPDFjá</h1>
      <p>O seu site de assinaturas está online!</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
