import React from 'react'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
                    <ul className="navbar-list">
                        <li>
                            <div className='dropdown'>
                                <span className='dropdown-toggle'  data-bs-toggle='dropdown'>
                                    Trink sat!
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Teklif Al</a></li>
                                    <li><a className="dropdown-item" href="#">Randevum Var</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='dropdown'>
                                <span className='dropdown-toggle'  data-bs-toggle='dropdown'>
                                    Araç Al
                                </span>
                                <ul className="dropdown-menu">
                                    <div className='drop-grid'>
                                        <ul>
                                            <li><a className="dropdown-item fs-14" href="#">Kategoriler</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Otomobil</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Arazi, SUV, Pick-up</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Motosiklet</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Minivan & Panelvan</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Ticari Araçlar</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Kiralık Araçlar</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Hasarlı Araçlar</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Traktör</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Tarım & İş Makineleri</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Klasik Araçlar</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Elektrikli Araçlar</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">ATV & UTV</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Karavan</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Engelli Araçlar</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Modifiyeli Araçlar</a></li>
                                        </ul>
                                        <ul>
                                            <li><a className="dropdown-item fs-14" href="#">Kasa Tipleri</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Sedan</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Hatchback</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Station Wagon</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Suv / Pick-up</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Coupe</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Cabrio</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Van / Panelvan</a></li>
                                            <li><a className="dropdown-item fw-4" href="#">Minibüs</a></li>
                                        </ul>
                                        <ul>
                                            <li><a className="dropdown-item" href="#">Tüm 2. El İlanlar</a></li>
                                            <li><a className="dropdown-item" href="#">Bana Araç Öner</a></li>
                                            <li><a className="dropdown-item" href="#">Arabam Kaç Para?</a></li>
                                            <li><a className="dropdown-item" href="#">Sahibinden 2. El ilanlar</a></li>
                                            <li><a className="dropdown-item" href="#">Galeriler</a></li>
                                            <li><a className="dropdown-item" href="#">0 Km Araçlar</a></li>
                                            <li><a className="dropdown-item" href="#">Markalar</a></li>
                                            <li><a className="dropdown-item" href="#">Tedarik</a></li>
                                        </ul>
                                    </div>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='dropdown'>
                                <span className='dropdown-toggle'  data-bs-toggle='dropdown'>
                                    Araç Sat
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Trink Sat!</a></li>
                                    <li><a className="dropdown-item" href="#">Ücretsiz İlan Ver</a></li>
                                    <li><a className="dropdown-item" href="#">Turbolar</a></li>
                                    <li><a className="dropdown-item" href="#">Arabam Kaç Para?</a></li>
                                    <li><a className="dropdown-item" href="#">Fillo Araçlarını Hızlı Sat!</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='dropdown'>
                                <span className='dropdown-toggle'  data-bs-toggle='dropdown'>
                                    Hizmetlerimiz
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Arabam Kaç Para?</a></li>
                                    <li><a className="dropdown-item" href="#">Hasar Sorgulama</a></li>
                                    <li><a className="dropdown-item" href="#">Turbolar</a></li>
                                    <li><a className="dropdown-item" href="#">Otomobil Terimleri Sözlüğü</a></li>
                                    <li><a className="dropdown-item" href="#">Tedarik</a></li>
                                    <li><a className="dropdown-item" href="#">Garaj</a></li>
                                    <li><a className="dropdown-item" href="#">Ekspertiz</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='dropdown'>
                                <span className='dropdown-toggle'  data-bs-toggle='dropdown'>
                                    arabam Blog
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Blog Anasayfa</a></li>
                                    <li><a className="dropdown-item" href="#">Haberler</a></li>
                                    <li><a className="dropdown-item" href="#">Testler</a></li>
                                    <li><a className="dropdown-item" href="#">İnceleme</a></li>
                                    <li><a className="dropdown-item" href="#">Otomobille Yaşam</a></li>
                                    <li><a className="dropdown-item" href="#">Danışman</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='dropdown'>
                                <span className='dropdown-toggle'  data-bs-toggle='dropdown'>
                                    Kurumsal
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Tedarik</a></li>
                                    <li><a className="dropdown-item" href="#">Filo Araçlarını Hızlı Sat</a></li>
                                    <li><a className="dropdown-item" href="#">Neden Kurumsal Üye Olmalıyım?</a></li>
                                    <li><a className="dropdown-item" href="#">Kurumsal Başvuru</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='dropdown'>
                                <span className='dropdown-toggle'  data-bs-toggle='dropdown'>
                                    Garaj
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Garajı Keşfet</a></li>
                                    <li><a className="dropdown-item" href="#">Oto Kuaför</a></li>
                                    <li><a className="dropdown-item" href="#">Servis & Bakım</a></li>
                                    <li><a className="dropdown-item fw-4" href="#">Renault Bakım</a></li>
                                    <li><a className="dropdown-item fw-4" href="#">Opel Bakım</a></li>
                                    <li><a className="dropdown-item fw-4" href="#">Toyota Bakım</a></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className='dropdown'>
                                <span className='dropdown-toggle'  data-bs-toggle='dropdown'>
                                    Ekspertiz
                                </span>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Paketleri İncele</a></li>
                                    <li><a className="dropdown-item" href="#">Şubeleri Gör</a></li>
                                </ul>
                            </div>
                        </li>
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
                        <span>&nbsp;/&nbsp;</span>
                        <a href="#">Üye Ol</a>
                        <div className='dropdown'>
                            <button id='advert-button' className='dropdown-toggle' data-bs-toggle='dropdown'>
                                Ücretsiz İlan Ver
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <div className='drop-flex'>
                                    <a href='#'>
                                        <div className='drop-left'>
                                            <h6>Ücretsiz İlan Ver</h6>
                                            <ul>
                                                <li><span className="dropdown-item" href="#">2 dakikada ilan ver</span></li>
                                                <li><span className="dropdown-item" href="#">İlanın hızlıca onaylansın</span></li>
                                                <li><span className="dropdown-item" href="#">8 milyon alıcıya ulaş</span></li>
                                                <li><span className="dropdown-item" href="#">Aracını sat</span></li>
                                            </ul>
                                            <button id='drop-left-button'>Ücretsiz İlan Ver</button>
                                        </div>
                                    </a>
                                    <a href='#'>
                                        <div className='drop-right'>
                                            <h6>Trink Sat</h6>
                                            <ul>
                                                <li><span className="dropdown-item" href="#">Araç bilgilerini gir, teklifimizi gör</span></li>
                                                <li><span className="dropdown-item" href="#">Ücretsiz ekspertiz randevunu al</span></li>
                                                <li><span className="dropdown-item" href="#">Güvenle ve zahmetsizce bize sat</span></li>
                                                <li><span className="dropdown-item" href="#">15 dakika içinde paran cebinde</span></li>
                                            </ul>
                                            <button id='drop-right-button'>Trink Sat</button>
                                        </div>
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default header