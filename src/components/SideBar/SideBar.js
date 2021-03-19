import React from 'react';

import homeIcon from '../../svg/home.svg';
import darkModeIcon from '../../svg/darkmode.svg';
import donateIcon from '../../svg/donate.svg';
import gitHubIcon from '../../svg/github.svg';
import './style.css';
const SideBar = () => {
  return (
    <div id="sideBar">
      <img
        data-tip="Painel"
        data-place="right"
        src={homeIcon}
        className="current_page"
        width="40"
        alt="Painel"
      ></img>

      <a
        href="https://github.com/CaioAugustoo/cv19tracker"
        rel="noopener noreferrer"
        target="_blank"
        data-tip="Código fonte"
        data-place="right"
      >
        <img src={gitHubIcon} width="25" alt="Código fonte"></img>
      </a>

      <a
        href="https://www.mercadopago.com.br/checkout/v1/redirect?pref_id=129081999-04b80ee2-0f9e-44df-ae15-51cdd03f87ce"
        rel="noopener noreferrer"
        target="_blank"
        data-tip="Doar pelo o projeto"
        data-place="right"
      >
        <img src={donateIcon} width="15" alt="Doar"></img>
      </a>

      <img
        data-tip="Alterar tema"
        data-place="right"
        src={darkModeIcon}
        width="30"
        title="Change theme"
        alt="Alterar tema"
      ></img>
    </div>
  );
};

export default SideBar;
