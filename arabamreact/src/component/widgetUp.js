import React from 'react'
import '../style/widgetUp.css'

function widgetUp() {
  return (
    <div className="row mb-4" id="row-wid">
        <div className="widget-wrapper">
            <h3>arabam.com ile, İşini Bir Adım İleri Taşı!</h3>
            <div className="col-4 widget-row">
                <div className="widget-container">
                    <div className="widget-card">
                        <div className="widget-image">
                            <img src={require("../img/homepage_1.png")} alt='widget'/>
                        </div>
                        <div className="widget-description">
                            <p>Sadece arabam.com'da Bulabileceğiniz Hizmetlerler işinize Değer Katalım</p>
                        </div>
                    </div>
                </div>
                <div className="widget-container">
                    <div className="widget-card">
                        <div className="widget-image">
                            <img src={require("../img/homepage_2.png")} alt='widget'/>
                        </div>
                        <div className="widget-description">
                            <p>Ek Gelir ve Fayda Sağlayan Hizmetlerimizi Keşfedin</p>
                        </div>
                    </div>
                </div>
                <div className="widget-container">
                    <div className="widget-card">
                        <div className="widget-image">
                            <img src={require("../img/homepage_new.png")} alt='widget'/>
                        </div>
                        <div className="widget-description">
                            <p>arabam.com'u, Tercih Eden Üyelerimizden Dinleyin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default widgetUp