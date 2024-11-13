import React from 'react'
import '../style/footerCC.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

function footerCC() {
  return (
    <div className="myContainer">
        <div className="footer-cc">
            <div className="services">
                <div className="call-center">
                    <span>Müşteri Hizmetleri</span>
                    <b>0 850 759 90 00</b>
                </div>
                <div className="copyright-etbis">
                    <b><FontAwesomeIcon icon={faCopyright}/> 2000-2024 arabam.com </b>
                    <div className="etbis">
                        <img src={require("../img/etbis-qr.jpeg")} width="40px" height="47px" alt='etbis'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footerCC