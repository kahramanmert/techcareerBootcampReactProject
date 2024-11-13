import React from 'react'
import '../style/footerTop.css'
import android from '../img/android.svg'
import ios from '../img/ios.svg'
import huawei from '../img/huawei.svg'
import facebook from '../img/facebook.svg'
import x from '../img/x-twitter.svg'
import youtube from '../img/youtube.svg'
import instagram from '../img/instagram.svg'

function footerTop() {
  return (
    <div className="footer-top-container">
        <div className="myContainer">
            <div className="footer-top">
                <div className="mobile-social-wrapper">
                    <div className="mobile">
                        <div className="item">
                            <img src={android} alt='logo'/>
                            <div className="text">
                                <span><b>Google Play'den</b> indirebilirsiniz.</span>
                            </div>
                        </div>
                        <div className="item">
                            <img src={ios} alt='logo'/>
                            <div className="text">
                                <span><b>App Store'dan</b> indirebilirsiniz.</span>
                            </div>
                        </div>
                        <div className="item">
                            <img src={huawei} alt='logo'/>
                            <div className="text">
                                <span><b>App Gallery'den</b> indirebilirsiniz.</span>
                            </div>
                        </div>
                    </div>
                    <div className="social">
                        <img src={facebook} alt='logo'/>
                        <img src={x} alt='logo'/>
                        <img src={youtube} alt='logo'/>
                        <img src={instagram} alt='logo'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default footerTop