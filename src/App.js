import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {
  const [urlQr, setUrlQr] = useState('https://www.tenutafontana.com/alberata');
  return (
    <div className="App" style={{ margin: '5px' }}>
      <h2>QR Code:</h2>
      <select onChange={(e) => setUrlQr(e.target.value)}>
        <option value="https://www.tenutafontana.com/alberata">Alberata</option>
        <option value="https://www.tenutafontana.com/civico-1/">
          Civico 1
        </option>
        <option value="https://www.tenutafontana.com/civico-2/">
          Civico 2
        </option>
        <option value="https://www.tenutafontana.com/civico-28/">
          Civico 28
        </option>
        <option value="https://www.tenutafontana.com/civico-44/">
          Civico 44
        </option>
        <option value="https://www.tenutafontana.com/olmo/">Olmo</option>
      </select>
      <div style={{ margin: '15px' }}>
        <QRCode value={urlQr} />
      </div>
      <h2>Indirizzo Web:</h2>
      <input
        type="text"
        value={urlQr}
        onChange={(e) => setUrlQr(e.target.value)}
        style={{ width: '400px' }}
      />

      <div className="copyright">
        {' '}
        <hr />© 2021 Bacetech ltd. All Rights Reserved.{' '}
      </div>
    </div>
  );
}

export default App;
