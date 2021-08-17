import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import './App.css';

function App() {
  const [urlQr, setUrlQr] = useState('https://www.tenutafontana.com/alberata');
  return (
    <div className="App" style={{ margin: '5px' }}>
      <h2>Proposte:</h2>
      <select onChange={(e) => setUrlQr(e.target.value)}>
        <option value="https://www.tenutafontana.com/alberata">
          Alberata - Tenuta Fontana
        </option>
        <option value="https://www.tenutafontana.com/shop/index.php?route=product/product&path=63&product_id=64">
          Alberata - Tenuta Fontana Shop
        </option>
        <option value="https://www.youtube.com/watch?v=B80_T55OeDw">
          Alberata - Tenuta Fontana Youtube
        </option>
      </select>
      <div style={{ margin: '15px' }}>
        <QRCode value={urlQr} />
      </div>
      <h2>Visualizza o inserisci url:</h2>
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
