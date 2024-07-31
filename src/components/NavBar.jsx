import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
  <span className="bg" />
  <div className="wrapper">
    <header>
      <div className="container">
        <div className="component">
          <button id="nav-menu-btn" className="btn nav-btn">
            {" "}
            <i className="fa-regular fa-bars fa-lg" />{" "}
          </button>{" "}
          <a href="home" className="logo">
            <img
              src="https://mangafire.to/assets/sites/mangafire/logo.png?v3"
              alt="MangaFire"
            />
          </a>
          <div id="nav-menu">
            <ul>
              <li>
                <a href="javascript:;">Types</a>
                <ul className="c1">
                  <li>
                    <a title="Manga mangas" href="/type/manga">
                      Manga
                    </a>
                  </li>
                  <li>
                    <a title="One-Shot mangas" href="/type/one-shot">
                      One-Shot
                    </a>
                  </li>
                  <li>
                    <a title="Doujinshi mangas" href="/type/doujinshi">
                      Doujinshi
                    </a>
                  </li>
                  <li>
                    <a title="Novel mangas" href="/type/novel">
                      Novel
                    </a>
                  </li>
                  <li>
                    <a title="Manhwa mangas" href="/type/manhwa">
                      Manhwa
                    </a>
                  </li>
                  <li>
                    <a title="Manhua mangas" href="/type/manhua">
                      Manhua
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:;">Genres</a>
                <ul className="lg">
                  <li>
                    <a
                      title="Action mangas"
                      href="https://mangafire.to/genre/action"
                    >
                      Action
                    </a>
                  </li>
                  <li>
                    <a
                      title="Adventure mangas"
                      href="https://mangafire.to/genre/adventure"
                    >
                      Adventure
                    </a>
                  </li>
                  <li>
                    <a
                      title="Avant Garde mangas"
                      href="https://mangafire.to/genre/avant-garde"
                    >
                      Avant Garde
                    </a>
                  </li>
                  <li>
                    <a
                      title="Boys Love mangas"
                      href="https://mangafire.to/genre/boys-love"
                    >
                      Boys Love
                    </a>
                  </li>
                  <li>
                    <a
                      title="Comedy mangas"
                      href="https://mangafire.to/genre/comedy"
                    >
                      Comedy
                    </a>
                  </li>
                  <li>
                    <a
                      title="Demons mangas"
                      href="https://mangafire.to/genre/demons"
                    >
                      Demons
                    </a>
                  </li>
                  <li>
                    <a
                      title="Drama mangas"
                      href="https://mangafire.to/genre/drama"
                    >
                      Drama
                    </a>
                  </li>
                  <li>
                    <a
                      title="Ecchi mangas"
                      href="https://mangafire.to/genre/ecchi"
                    >
                      Ecchi
                    </a>
                  </li>
                  <li>
                    <a
                      title="Fantasy mangas"
                      href="https://mangafire.to/genre/fantasy"
                    >
                      Fantasy
                    </a>
                  </li>
                  <li>
                    <a
                      title="Girls Love mangas"
                      href="https://mangafire.to/genre/girls-love"
                    >
                      Girls Love
                    </a>
                  </li>
                  <li>
                    <a
                      title="Gourmet mangas"
                      href="https://mangafire.to/genre/gourmet"
                    >
                      Gourmet
                    </a>
                  </li>
                  <li>
                    <a
                      title="Harem mangas"
                      href="https://mangafire.to/genre/harem"
                    >
                      Harem
                    </a>
                  </li>
                  <li>
                    <a
                      title="Horror mangas"
                      href="https://mangafire.to/genre/horror"
                    >
                      Horror
                    </a>
                  </li>
                  <li>
                    <a
                      title="Isekai mangas"
                      href="https://mangafire.to/genre/isekai"
                    >
                      Isekai
                    </a>
                  </li>
                  <li>
                    <a
                      title="Iyashikei mangas"
                      href="https://mangafire.to/genre/iyashikei"
                    >
                      Iyashikei
                    </a>
                  </li>
                  <li>
                    <a
                      title="Josei mangas"
                      href="https://mangafire.to/genre/josei"
                    >
                      Josei
                    </a>
                  </li>
                  <li>
                    <a
                      title="Kids mangas"
                      href="https://mangafire.to/genre/kids"
                    >
                      Kids
                    </a>
                  </li>
                  <li>
                    <a
                      title="Magic mangas"
                      href="https://mangafire.to/genre/magic"
                    >
                      Magic
                    </a>
                  </li>
                  <li>
                    <a
                      title="Mahou Shoujo mangas"
                      href="https://mangafire.to/genre/mahou-shoujo"
                    >
                      Mahou Shoujo
                    </a>
                  </li>
                  <li>
                    <a
                      title="Martial Arts mangas"
                      href="https://mangafire.to/genre/martial-arts"
                    >
                      Martial Arts
                    </a>
                  </li>
                  <li>
                    <a
                      title="Mecha mangas"
                      href="https://mangafire.to/genre/mecha"
                    >
                      Mecha
                    </a>
                  </li>
                  <li>
                    <a
                      title="Military mangas"
                      href="https://mangafire.to/genre/military"
                    >
                      Military
                    </a>
                  </li>
                  <li>
                    <a
                      title="Music mangas"
                      href="https://mangafire.to/genre/music"
                    >
                      Music
                    </a>
                  </li>
                  <li>
                    <a
                      title="Mystery mangas"
                      href="https://mangafire.to/genre/mystery"
                    >
                      Mystery
                    </a>
                  </li>
                  <li>
                    <a
                      title="Parody mangas"
                      href="https://mangafire.to/genre/parody"
                    >
                      Parody
                    </a>
                  </li>
                  <li>
                    <a
                      title="Psychological mangas"
                      href="https://mangafire.to/genre/psychological"
                    >
                      Psychological
                    </a>
                  </li>
                  <li>
                    <a
                      title="Reverse Harem mangas"
                      href="https://mangafire.to/genre/reverse-harem"
                    >
                      Reverse Harem
                    </a>
                  </li>
                  <li>
                    <a
                      title="Romance mangas"
                      href="https://mangafire.to/genre/romance"
                    >
                      Romance
                    </a>
                  </li>
                  <li>
                    <a
                      title="School mangas"
                      href="https://mangafire.to/genre/school"
                    >
                      School
                    </a>
                  </li>
                  <li>
                    <a
                      title="Sci-Fi mangas"
                      href="https://mangafire.to/genre/sci-fi"
                    >
                      Sci-Fi
                    </a>
                  </li>
                  <li>
                    <a
                      title="Seinen mangas"
                      href="https://mangafire.to/genre/seinen"
                    >
                      Seinen
                    </a>
                  </li>
                  <li>
                    <a
                      title="Shoujo mangas"
                      href="https://mangafire.to/genre/shoujo"
                    >
                      Shoujo
                    </a>
                  </li>
                  <li>
                    <a
                      title="Shounen mangas"
                      href="https://mangafire.to/genre/shounen"
                    >
                      Shounen
                    </a>
                  </li>
                  <li>
                    <a
                      title="Slice of Life mangas"
                      href="https://mangafire.to/genre/slice-of-life"
                    >
                      Slice of Life
                    </a>
                  </li>
                  <li>
                    <a
                      title="Space mangas"
                      href="https://mangafire.to/genre/space"
                    >
                      Space
                    </a>
                  </li>
                  <li>
                    <a
                      title="Sports mangas"
                      href="https://mangafire.to/genre/sports"
                    >
                      Sports
                    </a>
                  </li>
                  <li>
                    <a
                      title="Super Power mangas"
                      href="https://mangafire.to/genre/super-power"
                    >
                      Super Power
                    </a>
                  </li>
                  <li>
                    <a
                      title="Supernatural mangas"
                      href="https://mangafire.to/genre/supernatural"
                    >
                      Supernatural
                    </a>
                  </li>
                  <li>
                    <a
                      title="Suspense mangas"
                      href="https://mangafire.to/genre/suspense"
                    >
                      Suspense
                    </a>
                  </li>
                  <li>
                    <a
                      title="Thriller mangas"
                      href="https://mangafire.to/genre/thriller"
                    >
                      Thriller
                    </a>
                  </li>
                  <li>
                    <a
                      title="Vampire mangas"
                      href="https://mangafire.to/genre/vampire"
                    >
                      Vampire
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="newest" title="New Release Manga">
                  Newest
                </a>
              </li>
              <li>
                <a href="updated" title="Recently Updated Manga">
                  Updated
                </a>
              </li>
              <li>
                <a href="added" title="Recently Added Manga">
                  Added
                </a>
              </li>
              <li>
                <a href="random" title="Random Manga">
                  <i className="mr-1 fa-regular fa-shuffle" /> Random
                </a>
              </li>
            </ul>
          </div>
          <div id="nav-search">
            <div className="search-inner">
              <form action="filter" autoComplete="off">
                <i className="fa-regular fa-magnifying-glass text-muted mr-1" />{" "}
                <input
                  type="text"
                  placeholder="Search manga..."
                  name="keyword"
                />{" "}
                <a href="filter" className="btn btn-primary2">
                  {" "}
                  <i className="fa-regular fa-circles-overlap fa-xs" />
                  <span>Filter</span>{" "}
                </a>
              </form>
              <div className="suggestion" />
            </div>
          </div>
          <button id="nav-search-btn" className="btn nav-btn">
            {" "}
            <i className="fa-regular fa-magnifying-glass" />{" "}
          </button>
          <div className="nav-user" id="user">
            <button
              data-toggle="modal"
              data-target="#sign"
              className="btn btn-primary rounded-pill"
            >
              {" "}
              <span className="d-none d-sm-inline pl-1 mr-1">Login</span>{" "}
              <i className="d-inline d-sm-none fa-solid fa-user-vneck" />{" "}
              <i className="d-none d-sm-inline fa-solid fa-sm fa-angle-right" />{" "}
            </button>
          </div>
        </div>
      </div>
    </header>
    <div
      className="st-placement standard_1 inTop"
      id="standard_1"
      style={{ direction: "ltr", all: "initial !important" }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n               #standard_1.st-placement .st-reset {\n               all: unset;\n               all: initial;\n               max-width: unset !important;\n               max-height: unset !important;\n               position: absolute;\n               z-index: 2147483647;\n               }\n               #standard_1.st-placement style {\n               display: none !important;\n               }\n               #standard_1.st-placement script {\n               display: none !important;\n               }\n               .st-adunit-intop {\n               z-index: 9999999999 !important;\n               }\n            "
        }}
      />
      <div />
    </div>
  </div>

  );
};

export default NavBar;
