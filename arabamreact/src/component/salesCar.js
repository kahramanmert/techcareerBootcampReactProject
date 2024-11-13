import React from 'react'
import '../style/salesCar.css'

function salesCar() {
  return (
    <>
        <div className="page-header">
            <h2>Vitrin
                <a href="#">Tüm Vitrini Gör</a>
            </h2>
        </div>

        <div className="sales-car-container">
            <div className="row">
                <div className="sale-car-card">
                    <div className="vehicle-container">
                        <div className="vehicle">
                            <a href="#">
                                <div className="vehicle-image">
                                    <img src={require("../img/hyundai-i20n-160x120.jpg")} alt='car'/>
                                </div>
                                <div className="vehicle-info">
                                    <div className="city-year">
                                        <p className="model-city">İstanbul</p>
                                        <p className="model-year">2024</p>
                                    </div>
                                    <div className="name">
                                        <h4>Hyundai İ20N 1.6T-GDİ 204PS</h4>
                                    </div>
                                    <div className="price">
                                        1.767.000 TL
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="sale-car-card">
                    <div className="vehicle-container">
                        <div className="vehicle-container">
                            <div className="vehicle">
                                <a href="#">
                                    <div className="vehicle-image">
                                        <img src={require("../img/mazda-mx-5-30th-160x120.jpg")} alt='car'/>
                                    </div>
                                    <div className="vehicle-info">
                                        <div className="city-year">
                                            <p className="model-city">İstanbul</p>
                                            <p className="model-year">2019</p>
                                        </div>
                                        <div className="name">
                                            <h4>Mazda MX-5 2.0 30th Year Edition</h4>
                                        </div>
                                        <div className="price">
                                            4.095.000 TL
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sale-car-card">
                    <div className="vehicle-container">
                        <div className="vehicle-container">
                            <div className="vehicle">
                                <a href="#">
                                    <div className="vehicle-image">
                                        <img src={require("../img/alfa-rome-giulia-160x120.jpg")} alt='car'/>
                                    </div>
                                    <div className="vehicle-info">
                                        <div className="city-year">
                                            <p className="model-city">İstanbul</p>
                                            <p className="model-year">2023</p>
                                        </div>
                                        <div className="name">
                                            <h4>Alfa Romeo Giulia Q4 2.0T 280HP</h4>
                                        </div>
                                        <div className="price">
                                            3.565.000 TL
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sale-car-card">
                    <div className="vehicle-container">
                        <div className="vehicle">
                            <a href="#">
                                <div className="vehicle-image">
                                    <img src={require("../img/hyundai-i20n-160x120.jpg")} alt='car'/>
                                </div>
                                <div className="vehicle-info">
                                    <div className="city-year">
                                        <p className="model-city">İstanbul</p>
                                        <p className="model-year">2024</p>
                                    </div>
                                    <div className="name">
                                        <h4>Hyundai İ20N 1.6T-GDİ 204PS</h4>
                                    </div>
                                    <div className="price">
                                        1.767.000 TL
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="sale-car-card">
                    <div className="vehicle-container">
                        <div className="vehicle-container">
                            <div className="vehicle">
                                <a href="#">
                                    <div className="vehicle-image">
                                        <img src={require("../img/mazda-mx-5-30th-160x120.jpg")} alt='car'/>
                                    </div>
                                    <div className="vehicle-info">
                                        <div className="city-year">
                                            <p className="model-city">İstanbul</p>
                                            <p className="model-year">2019</p>
                                        </div>
                                        <div className="name">
                                            <h4>Mazda MX-5 2.0 30th Year Edition</h4>
                                        </div>
                                        <div className="price">
                                            4.095.000 TL
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sale-car-card">
                    <div className="vehicle-container">
                        <div className="vehicle-container">
                            <div className="vehicle">
                                <a href="#">
                                    <div className="vehicle-image">
                                        <img src={require("../img/alfa-rome-giulia-160x120.jpg")} alt='car'/>
                                    </div>
                                    <div className="vehicle-info">
                                        <div className="city-year">
                                            <p className="model-city">İstanbul</p>
                                            <p className="model-year">2023</p>
                                        </div>
                                        <div className="name">
                                            <h4>Alfa Romeo Giulia Q4 2.0T 280HP</h4>
                                        </div>
                                        <div className="price">
                                            3.565.000 TL
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default salesCar