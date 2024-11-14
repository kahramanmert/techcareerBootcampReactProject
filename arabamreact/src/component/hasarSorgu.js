import React from 'react'
import '../style/hasarSorgu.css'

function hasarSorgu() {
  return (
    <div className='damage-container'>
        <div className='myContainer'>
            <div className='row m-0 bg-white'>
                <div className='col-6 p-0'>
                    <div className='sign-in-up'>
                        <h3>Hasar Sorgulama</h3>
                        <p className='desc-indiv'>Arabam.com üyeliğinize giriş yapın, Hasar Sorgulama ve Araç Detay Sorgulama hizmetlerinden faydalanın.</p>
                        <p id='p-border'>Bireysel üyelerimiz için sorgulama ücreti 120 TL'dir.</p>
                        <p className='desc-insti'>Kurumsal üyelerimize özel fiyatlar için kurumsal üyeliğinizle giriş yapmayı unutmayın.</p>
                        <div className='sign-in-up-buttons'>
                            <button id='sign-in'>Giriş Yap</button>
                            <button id='sign-up'>Üye Ol</button>
                        </div>
                    </div>
                </div>
                <div className='col-6 p-0'>
                    <img src={require('../img/tramer-kaydi-sorgulama3.png')} width="100%" height="auto" alt='hasar-sorgu'/>
                </div>
            </div>
            <div className='row m-0 mt-3'>
                <div className='information-box bg-white mb-3'>
                    <h2>SBM Araç Hasar Sorgulama Servisi</h2>
                    <div className='info-desc'>
                        Aracın kazasının olup olmadığını ve bu kazaya ait tarih, neden ve hasar tutarı bilgilerini Hasar Sorgulamasıyla öğrenebilirsiniz. 
                    </div>
                    <button className='exmp-btn' data-bs-toggle="modal" data-bs-target="#damageModal">Örnek Sonuç Göster</button>
                </div>
                <div className='information-box bg-white mb-3'>
                    <h2>SBM Araç Detay Sorgulama Servisi</h2>
                    <div className='info-desc'>
                        Marka, model, trafiğe çıkış tarihi, kasko bilgileri, plaka ya da araç türü değişimi durumu gibi bilgileri Araç Detay Sorgulamasıyla edinebilirsiniz.
                    </div>
                    <button className='exmp-btn' data-bs-toggle="modal" data-bs-target="#detailModal">Örnek Sonuç Göster</button>
                </div>
                <p id='add-desc'>2003 yılından sonra kasko ve trafik sigortasına yansıyan hasar bilgilerini Sigorta Bilgi ve Gözetim Merkezi'nin sağladığı Sigortam360 hizmeti sayesinde sizlere ulaştırıyoruz.</p>
            </div>
        </div>
        <div class="modal" id="damageModal" tabindex="-1" aria-labelledby="damageModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="myModalTitle" id="damageModalLabel">Hangi Bilgilere Ulaşacağım?</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p className='myModalInfoText bld'>Görünüm ve araç bilgileri örnek amaçlıdır.</p>
                        <div className='myModalContent'>
                            <div className='myModalBox'>
                                <p className='myModalRedText'>VOLKSWAGEN GOLF 1.6 TDI HIGHLINE (105 HP)</p>
                                <span className='myModalText'>Şasi No: ****1327</span>
                            </div>
                            <div className='myModalBox'>
                                <div>
                                    <span className='myModalText bld'>Hasar Tarihi: </span>
                                    <span className='myModalText'>12.07.2017</span>
                                </div>
                                <div>
                                    <span className='myModalText bld'>Tutar: </span>
                                    <span className='myModalText'>1.800 TL</span>
                                </div>
                                <div>
                                    <span className='myModalText bld'>Hasar Nedeni: </span>
                                    <span className='myModalText'>Park Halinde Çarpma</span>
                                </div>
                            </div>
                            <div className='myModalBox'>
                                <div>
                                    <span className='myModalText bld'>Hasar Tarihi: </span>
                                    <span className='myModalText'>12.05.2016</span>
                                </div>
                                <div>
                                    <span className='myModalText bld'>Tutar: </span>
                                    <span className='myModalText'>1.400 TL</span>
                                </div>
                                <div>
                                    <span className='myModalText bld'>Hasar Nedeni: </span>
                                    <span className='myModalText'>Çarpışma</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <p class="myModalTitle" id="damageModalLabel">Hangi Bilgilere Ulaşacağım?</p>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <p className='myModalInfoText bld'>Görünüm ve araç bilgileri örnek amaçlıdır.</p>
                        <div className='myModalContent'>
                            <div className='row m-0 p-0'>
                                <div className='col-lg-6 m-0 p-0'>
                                    <div className='myModalBox bigBox'>
                                        <p className='myModalRedText mb-3'>ARAÇ BİLGİLERİ</p>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Araç Marka ve Modeli: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>VOLKSWAGEN GOLF 1.6 TDI HIGHLINE (105 HP)</span>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Trafiğe Çıkış Tarihi: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>26.02.2013</span>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Kaskolu Süre: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>1 Yıl 3 Ay</span>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Kaskosuz Süre: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>1 Yıl 1 Ay</span>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Yürürlükteki Kasko: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>Yok</span>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Plaka Değişimi: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>Yok</span>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Plaka İl Değişimi: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>Yok</span>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Araç Tür Değişimi: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>Yok</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6 m-0 p-0'>
                                    <div className='myModalBox bigBox'>
                                        <p className='myModalRedText mb-3'>SON SAHİPLİK BİLGİLERİ</p>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Sigortalı Türü: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>Şahıs</span>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Sahiplik Süresi: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>2 Yıl 8 Ay</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='myModalBox bigBox'>
                                        <p className='myModalRedText mb-3'>PLAKA BİLGİLERİ</p>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Sıra No: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>1</span>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>İl: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>İstanbul</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='myModalBox bigBox'>
                                        <p className='myModalRedText mb-3'>ARAÇ TÜR BİLGİLERİ</p>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Sıra No: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>1</span>
                                            </div>
                                        </div>
                                        <div className='row m-0 p-0 mb-2'>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText bld'>Araç Türü: </span>
                                            </div>
                                            <div className='col-6 m-0 p-0'>
                                                <span className='myModalText'>Otomobil</span>
                                            </div>
                                        </div>
                                    </div>
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

export default hasarSorgu