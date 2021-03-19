import React from 'react';
import './style.css';
import imgMulher from './img/capa-mulher.png';

function Header() {
  return (
    <>
      <div>
        <header>
          <nav class="navbar navbar-expand-sm navbar-light ">
            <div class="container">
              <button
                class="navbar-toggler"
                data-toggle="collapse"
                data-target="#nav-principal"
              >
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="nav-principal">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a href="" class="nav-link">
                      Home
                    </a>
                  </li>

                  <li class="nav-item">
                    <a
                      href="https://github.com/vitorvf/painelcovid.git"
                      class="nav-link"
                    >
                      Codigo de fonte
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="https://mpago.la/2fibCor" class="nav-link">
                      Doar para o projeto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <section id="home">
          <div class="container">
            <div class="row">
              <div class="col-md-6 d-flex">
                <div class="align-self-center">
                  <h1 class="display-5 texth1">Painel COVID-19 API</h1>
                  <p>
                    Painel coronavírus Feito com React.js
                    <br /> o projeto consome uma API real. e mostra dados em
                    tempo
                    <br />
                  </p>
                </div>
              </div>
              <div class="col-md-6 d-none d-md-block">
                <img src={imgMulher} className="img-fluid"></img>
              </div>
            </div>
          </div>
        </section>
        <div id="borda">;</div>
      </div>
    </>
  );
}

export default Header;
