import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header.js';
export default () => {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // Pegando o filme em destaque Featured

      //Pegando apenas os Originais netflix do slug
      let originals = list.filter((i) => i.slug === 'originals');

      //Gerando um numero aleatorio com a quantidade de item que tem na lista
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1),
      );

      //Pegar o filme especifico que eu quero
      let chosen = originals[0].items.results[randomChosen];

      //Pegando informações do filme escolhido
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');

      //Colocando no set Featured data
      setFeaturedData(chosenInfo);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData && <FeaturedMovie item={featuredData} />}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Feito com <span>Vitor Ferreira</span>
        Direitos de imagem para a netflix
        <br />
        Dados Pegos Do Site Themovieb.org
      </footer>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif"
            alt="loading"
          ></img>
        </div>
      )}
    </div>
  );
};
