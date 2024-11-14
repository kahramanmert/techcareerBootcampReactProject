import React from 'react'
import '../style/mainPage.css'
import FirstSection from './firstSection';
import Expertise from './expertise'
import CarsAndSellers from './carsAndSellers'
import WidgetSection from './widgetSection'

function mainPage() {
  return (
    <div className="main-page-container">
        <FirstSection></FirstSection>
        <Expertise></Expertise>
        <CarsAndSellers></CarsAndSellers>
        <WidgetSection></WidgetSection>
    </div>
  )
}

export default mainPage