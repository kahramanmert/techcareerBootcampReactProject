import React from 'react'
import FooterTop from './footerTop'
import FooterMiddle from './footerMiddle'
import FooterCC from './footerCC'
import FooterEnd from './footerEnd'

function footer() {
  return (
    <footer style={{paddingTop:"70px"}}>
      <FooterTop></FooterTop>
      <FooterMiddle></FooterMiddle>
      <FooterCC></FooterCC>
      <FooterEnd></FooterEnd>
    </footer>
  )
}

export default footer