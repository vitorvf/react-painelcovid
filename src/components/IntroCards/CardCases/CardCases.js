import React from 'react';
import ConfirmedCard from '../ConfirmedCard/ConfirmedCard';
import RecoveredCard from '../RecoveredCard/RecoveredCard';
import DeathsCard from '../DeathsCard/DeathsCard';
import './style.css';
const CardCases = () => {
  return (
    <section id="globalCases">
      <div className="container">
        <div className="d-flex justify-content-start flex-wrap">
          <ConfirmedCard />
          <RecoveredCard />
          <DeathsCard />
        </div>
      </div>
      <div className="bordapais"></div>
    </section>
  );
};

export default CardCases;
