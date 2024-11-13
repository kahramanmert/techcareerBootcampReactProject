import React from 'react'
import '../style/footerEnd.css'

function footerEnd() {
  return (
    <div className="footer-end-container">
        <div className="myContainer">
            <div className="footer-end">
                <div className="holding">
                    <span>arabam.com bir <img src={require("../img/ilab-new-logo.png")} width="45px" alt='logo'/> grup şirketidir.</span>
                    <ul>
                        <li><a href="https://www.kariyer.net/"></a>Kariyer.net</li>
                        <li><a href="https://isinolsun.com/"></a>İsinolsun.com</li>
                        <li><a href="https://www.emlakjet.com/"></a>Emlakjet</li>
                        <li><a href="https://www.sigortam.net/"></a>Sigortam.net</li>
                        <li><a href="https://www.hangikredi.com/"></a>HangiKredi</li>
                        <li><a href="https://www.neredekal.com/"></a>Neredekal.com</li>
                        <li><a href="https://www.chemorbis.com/tr/"></a>ChemOrbis</li>
                        <li><a href="https://www.cimri.com/"></a>Cimri.com</li>
                        <li><a href="https://tr.steelorbis.com/"></a>SteelOrbis</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footerEnd