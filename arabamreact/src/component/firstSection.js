import React from 'react'
import '../style/firstSection.css'

function firstSection() {
  return (
    <div className="myContainer">
      <div className="first-section">
        <div className="category-container">
          <div className="up-category">
            <a href="#">Son 24 Saat / 48 Saat</a>
            <a href="#">Acil İlanlar</a>
            <a href="#">Fiyatı Düşenler</a>
          </div>
          <div className="down-category">
            <a href="#">Tüm İlanlar</a>
            <a href="#">Otomobil</a>
            <a href="#">Arazi, SUV, Pick-up</a>
            <a href="#">Motosiklet</a>
            <a href="#">Minivan &amp; Panelvan</a>
            <a href="#">Ticari Araçlar</a>
            <a href="#">Kiralık Araçlar</a>
            <a href="#">Hasarlı Araçlar</a>
            <a href="#">Traktör</a>
            <a href="#">Tarım &amp; İş Makineleri</a>
            <a href="#">Klasik Araçlar</a>
            <a href="#">Elektrikli Araçlar</a>
            <a href="#">ATV &amp; UTV</a>
            <a href="#">Karavan</a>
            <a href="#">Engelli Araçları</a>
            <a href="#">Modifiyeli Araçlar</a>
          </div>
        </div>
        <div className="advertisement-features-container">
          <div className="advertisement">
            <img id="adv-big-img" src={require("../img/399936003529579033.jpeg")} alt='advertisement'/>
            <img id="adv-small-img" src={require("../img/anasayfa-tablet-bireysel.png")} alt='advertisement'/>
          </div>
          <div className="features">
            <div className="feature-card">
              <img className="hide-mobile" src={require("../img/trink-sat.png")} width="24px" height="24px" alt='img'/>
              <div className="hdr">
                <p>
                  <strong>Trink Sat</strong>
                </p>
                Aracını değerinde ve anında biz alıyoruz, <b>15 dakika içinde paran cebinde!</b>
              </div>
            </div>
            <div className="feature-card">
              <img className="hide-mobile" src={require("../img/how-much-my-car.png")} width="24px" height="24px" alt='img'/>
              <div className="hdr">
                <p>
                  <strong>Arabam Kaç Para?</strong>
                </p>
                Alan memnun, satan memnun <b>fiyatını öğren!</b>
              </div>
            </div>
            <div className="feature-card">
              <img className="hide-mobile" src={require("../img/zero-km.png")} width="24px" height="24px" alt='img'/>
              <div className="hdr">
                <p>
                  <strong>Sıfır Km Araçlar</strong>
                </p>
                Sıfır km araç özelliklerini ve <b>fiyat listesini incele!</b>
              </div>
            </div>
            <div className="feature-card">
              <img className="hide-mobile" src={require("../img/suggest-vehicle.png")} width="24px" height="24px" alt='img'/>
              <div className="hdr">
                <p>
                  <strong>Bana Araç Öner</strong>
                </p>
                Hangi aracı alacağına karar veremediysen, <b>biz sana önerelim!</b>
              </div>
            </div>
            <div className="feature-card">
              <img className="hide-mobile" src={require("../img/garage.png")} width="24px" height="24px" alt='img'/>
              <div className="hdr">
                <p>
                  <strong>Garaj</strong>
                </p>
                Periyodik Bakım'dan Oto Kuaför'e kadar <b>aracın için her şey!</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default firstSection