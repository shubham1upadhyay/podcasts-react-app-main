import React from 'react'
import "./styles.css"
function Loader() {
  return (
    <div className='wrapper'>
      <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loader
