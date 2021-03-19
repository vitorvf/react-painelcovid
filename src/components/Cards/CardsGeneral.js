import React from 'react';
import CardBrazil from './Cardsbrazil/CardBrazil';
import CardChina from './Cardschina/CardChina';
import CardItaly from './CardsItaly/CardItaly';
import CardUsa from './CardsUSA/CardUsa';
import './style.css';

const CardsGeneral = () => {
  return (
    <section id="casesByCountry" className="align-items-start">
      <div>
        <h1 className="casosporpais">Casos Por Pais</h1>
        <p className="casosporpaisp" style={{ opacity: '0.5' }}>
          Dados atualizados diariamente
        </p>
      </div>
      <div className="container d-flex justify-content-start flex-wrap">
        <div
          className="d-flex justify-content-start flex-wrap"
          style={{ margin: '30px 0px', flex: '1' }}
        >
          <CardBrazil />
          <CardChina />
          <CardItaly />
          <CardUsa />
        </div>
        <div className="bordaporpais"></div>
        <div
          className="d-flex justify-content-start flex-wrap"
          style={{ margin: '30px 0px' }}
        ></div>
      </div>
      <div className="casesinbrazil">
        <h1 className="h1estados">Casos no Brasil por estados</h1>
        <p className="pestados" style={{ opacity: '0.5' }}>
          Dados atualizados diariamente
        </p>
      </div>
    </section>
  );
};

export default CardsGeneral;
