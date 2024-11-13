import React from 'react'
import '../style/widgetDown.css'

function widgetDown() {
  return (
    <div className="row mt-3" id="row-down">
        <div className="col-6">
            <div className="down-wrap">
                <div className="down-title">
                    <h2>Test Sürüşleri <hr/></h2>
                </div>
                <div className="down-container">
                    <div className="big-article">
                        <img src={require("../img/renault-megane-e-tech-1-1.jpg")} alt='test'/>
                        <div className="big-content-container">
                            <h4>Renault Megane E-Tech Test Sürüşü</h4>
                            <p>Renault Megane E-Tech modelinin tüm detaylarını sizler için inceledik. Hazırsanız, bu heyecan verici aracı birlikte keşfetmeye başlayalım!</p>
                        </div>
                    </div>
                    <div className="small-article">
                        <div className="small-img-container">
                            <img src={require("../img/Yeni-Proje-6.jpg")} alt='test'/>
                        </div>
                        <div className="small-content-container">
                            <h5 className="text-truncate">Suzuki S-Cross Hybrid Test Sürüşü</h5>
                            <p className="text-truncate">Suzuki S-Cross Hybrid modelinin tüm detaylarını ve sürüş deneyimimizi merak ediyorsanız yazımızı okumaya başlayın!</p>
                        </div>
                    </div>
                    <div className="small-article">
                        <div className="small-img-container">
                            <img src={require("../img/mg-2.jpg")} alt='test'/>
                        </div>
                        <div className="small-content-container">
                            <h5 className="text-truncate">MG ZS EV Test Sürüşü</h5>
                            <p className="text-truncate">Hem dış tasarımı hem de teknolojik anlamda gelişen, sınıfının ilk Euro NCAP’ten 5 yıldız alan ve tamamen elektrikli şehirli SUV’si MG ZS EV test sürüşünün bütün detaylarını sizler için inceledik. MG...
                            </p>
                        </div>
                    </div>
                    <div className="button-container">
                        <button>Tüm Sürüşler</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-6">
            <div className="down-wrap">
                <div className="down-title">
                    <h2>Haberler <hr/></h2>
                </div>
                <div className="down-container">
                    <div className="big-article">
                        <img src={require("../img/arac-satisi-1.jpg")} alt='news'/>
                        <div className="big-content-container">
                            <h4>İthal Otomobillere %10 Ek Gümrük Vergisi Geldi!</h4>
                            <p>Resmi Gazete’de yayımlanan düzenlemeyle ithal otomobillere %10 ek gümrük vergisi uygulanacak. Detaylar için tıklayın!</p>
                        </div>
                    </div>
                    <div className="small-article">
                        <div className="small-img-container">
                            <img src={require("../img/Citroen-C4-X.jpg")} alt='news'/>
                        </div>
                        <div className="small-content-container">
                            <h5 className="text-truncate">Citroen C4 X ile Sürüş Avantajlarının Keyfini Çıkarın!</h5>
                            <p className="text-truncate">Citroen C4 X ile ilgili aradığınız bütün detaylar burada! Modelin teknolojik donanımından dış tasarımına kadar ele aldığımız bu içeriğimize mutlaka göz atın!</p>
                        </div>
                    </div>
                    <div className="small-article">
                        <div className="small-img-container">
                            <img src={require("../img/Arac-satisi-2.jpg")} alt='news'/>
                        </div>
                        <div className="small-content-container">
                            <h5 className="text-truncate">Aracınızı Satmadan Önce Yapmanız Gereken Bakımlar</h5>
                            <p className="text-truncate">Bu rehberde araç satış sürecinde yapmanız gereken adımları bulabilirsiniz.</p>
                        </div>
                    </div>
                    <div className="button-container">
                        <button>Tüm Haberler</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default widgetDown