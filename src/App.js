import React from 'react';
import CardsGeneral from './components/Cards/CardsGeneral';
import CardCases from './components/IntroCards/CardCases/CardCases';
import IntroTexts from './components/IntroTexts/IntroTexts';
import CasesByUF from './components/CasesByUF/CasesByUF';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './Css.css';

const App = () => {
  return (
    <div>
      <Header />
      <IntroTexts />
      <CardCases />
      <CardsGeneral />
      <CasesByUF />

      <Footer />
    </div>
  );
};

export default App;
