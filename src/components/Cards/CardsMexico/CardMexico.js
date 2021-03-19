import React, { useState, useEffect } from 'react';
import './style.css';

function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function loadData() {
      const response = await fetch(url);
      if (!response.ok) {
        console.log('erro');
        return;
      }

      const posts = await response.json();
      setData(posts.data);
    }

    loadData();
  }, [url]);
  return data;
}

const App = () => {
  const data = useFetch(
    'https://covid19-brazil-api.now.sh/api/report/v1/mexico',
  );
  console.log(data);

  return (
    <div id="card_mexico" style={{ marginRight: '30px' }}>
      <h1>Situação no Mexico</h1>
      <p className="mt-4">
        Casos:
        <strong> {data?.cases} </strong>
      </p>
      <p className="mt-2">
        Casos confirmados:
        <span style={{ color: '#FFAA00' }}> {data?.confirmed}</span>
      </p>
      <p className="mt-2">
        Casos recuperados:
        <span style={{ color: '#00FF66' }}> {data?.recovered}</span>
      </p>
      <p className="mt-2">
        Óbitos confirmados:
        <span style={{ color: '#FF0000' }}> {data?.deaths}</span>
      </p>
    </div>
  );
};

export default App;
