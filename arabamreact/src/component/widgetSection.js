import React from 'react'
import WidgetUp from './widgetUp'
import WidgetDown from './widgetDown'

function widgetSection() {
  return (
    <div className='myContainer'>
        <WidgetUp></WidgetUp>
        <WidgetDown></WidgetDown>
    </div>
  )
}

export default widgetSection