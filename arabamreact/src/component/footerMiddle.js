import React from 'react'
import '../style/footerMiddle.css'

function footerMiddle() {
  return (
    <div className="myContainer">
        <div className="footer-middle">
            <div className="links-container">
                <div className="nav-links">
                    <span>Kurumsal</span>
                    <ul>
                        <li>
                            <a href="#">Hakkımızda</a>
                        </li>
                        <li>
                            <a href="#">Üye Hikayeleri</a>
                        </li>
                        <li>
                            <a href="#">Yardım / İşlem Rehberi</a>
                        </li>
                        <li>
                            <a href="#">Gizlilik Politikası</a>
                        </li>
                        <li>
                            <a href="#">Reklam Verin</a>
                        </li>
                        <li>
                            <a href="#">İletişim</a>
                        </li>
                        <li>
                            <a href="#">Ziyaretçi Aydınlatma Metni</a>
                        </li>
                        <li>
                            <a href="#">Kişisel Verilerin Korunması Kanunu Hakkında Bilgilendirme</a>
                        </li>
                    </ul>
                </div>


                {/* <!-- Bootstrap Nav&Tabs Javascript Behavior--> */}
                <div className="tabs-container">
                    <div className="nav nav-tabs" id="tabs" role="tablist">
                        <button className="nav-link active" id="sale-car-tab" data-bs-toggle="tab" data-bs-target="#sale-car" type="button" role="tab" aria-controls="sale-car" aria-selected="true">Satılık Araba</button>
                        <button className="nav-link" id="from-owners-tab" data-bs-toggle="tab" data-bs-target="#from-owners" type="button" role="tab" aria-controls="from-owners" aria-selected="false">Sahibinden</button>
                        <button className="nav-link" id="city-tab" data-bs-toggle="tab" data-bs-target="#city" type="button" role="tab" aria-controls="city" aria-selected="false">Şehir</button>
                        <button className="nav-link" id="zero-km-tab" data-bs-toggle="tab" data-bs-target="#zero-km" type="button" role="tab" aria-controls="zero-km" aria-selected="false">Sıfır KM</button>
                        <button className="nav-link" id="garage-tab" data-bs-toggle="tab" data-bs-target="#garage" type="button" role="tab" aria-controls="garage" aria-selected="false">Garaj</button>
                    </div>

                    <div className="tab-content" id="tab-container">
                        <div className="tab-pane show active" id="sale-car" role="tabpanel" aria-labelledby="sale-car-tab" >
                            <div className="tab-contents">
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Satılık Alfa Romeo</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="from-owners" role="tabpanel" aria-labelledby="from-owners-tab" >
                            <div className="tab-contents">
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sahibinden Alfa Romeo</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="city" role="tabpanel" aria-labelledby="city-tab" >
                            <div className="tab-contents">
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">2.El Araba İstanbul</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="zero-km" role="tabpanel" aria-labelledby="zero-km-tab" >
                            <div className="tab-contents">
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Sıfır KM Alfa Romeo</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane" id="garage" role="tabpanel" aria-labelledby="garage-tab" >
                            <div className="tab-contents">
                                <div className="tab-content-item">
                                    <a href="#">Garajı Keşfet</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Oto Kuaför</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Servis & Bakım</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Renault Bakım</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Opel Bakım</a>
                                </div>
                                <div className="tab-content-item">
                                    <a href="#">Toyota Bakım</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footerMiddle