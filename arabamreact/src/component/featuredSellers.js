import React from 'react'
import '../style/featuredSellers.css'

function featuredSellers() {
  return (
    <div className="featured-sellers">
        <h3>Öne Çıkan Satıcılar</h3>
        <div className="sellers-row">
            <a href="#">
                <div className="seller">
                    <div className="seller-photo">
                        <img src={require("../img/favicon-32x32.png")} alt='seller'/>
                    </div>
                    <div className="seller-name">
                        <span>ABC</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="seller">
                    <div className="seller-photo">
                        <img src={require("../img/favicon-32x32.png")} alt='seller'/>
                    </div>
                    <div className="seller-name">
                        <span>XYZ</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="seller">
                    <div className="seller-photo">
                        <img src={require("../img/favicon-32x32.png")} alt='seller'/>
                    </div>
                    <div className="seller-name">
                        <span>123</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="seller">
                    <div className="seller-photo">
                        <img src={require("../img/favicon-32x32.png")} alt='seller'/>
                    </div>
                    <div className="seller-name">
                        <span>KLM</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="seller">
                    <div className="seller-photo">
                        <img src={require("../img/favicon-32x32.png")} alt='seller'/>
                    </div>
                    <div className="seller-name">
                        <span>PRS</span>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="seller">
                    <div className="seller-photo">
                        <img src={require("../img/favicon-32x32.png")} alt='seller'/>
                    </div>
                    <div className="seller-name">
                        <span>456</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
  )
}

export default featuredSellers