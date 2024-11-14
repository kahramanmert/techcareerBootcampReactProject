import React from 'react'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function header() {
  return (
    <>
        <header>
        <div className="banner">
            <div className="myContainer">
                <a><img className="img-inside-div" src={require("../img/content-indirim-desktop.png")} alt='banner'/></a>
            </div>
        </div>

        {/* <!-- NavBar --> */}
        <div className="navbar-container">
            <nav className="navbar-x">

                {/* <!-- inside lists will append --> */}

                <ul className="navbar-list">
                    <li>Trink sat! <FontAwesomeIcon icon={faCaretDown} /></li>
                    <li>Araç Al <FontAwesomeIcon icon={faCaretDown} /></li>
                    <li>Araç Sat <FontAwesomeIcon icon={faCaretDown} /></li>
                    <li>Hizmetlerimiz <FontAwesomeIcon icon={faCaretDown} /></li>
                    <li>arabam Blog <FontAwesomeIcon icon={faCaretDown} /></li>
                    <li>Kurumsal <FontAwesomeIcon icon={faCaretDown} /></li>
                    <li>Garaj <FontAwesomeIcon icon={faCaretDown} /></li>
                    <li>Ekspertiz <FontAwesomeIcon icon={faCaretDown} /></li>
                </ul>
            </nav>
        </div>

        {/* <!-- HeaderBar --> */}
         <div className="headerbar-container">
            <div className="headerbar">
                <a href='/'><img src={require("../img/tek-tur-large.gif")} width="207px" height="36px" alt='logo'/>
                    <a href='/hasar-sorgu'> 2 </a>
                </a>
                <div className="search-input-container">
                    <div className="search-input-bar">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input id="search-input" type="text" placeholder="Kelime, galeri adı veya ilan no ile ara"/>
                    </div>
                    <button id="search-button">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                <div className="buttons">
                    <a href="#">Giriş Yap</a>
                    <span> / </span>
                    <a href="#">Üye Ol</a>
                    <button id="advert-button">Ücretsiz İlan Ver <FontAwesomeIcon icon={faCaretDown} /></button>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default header