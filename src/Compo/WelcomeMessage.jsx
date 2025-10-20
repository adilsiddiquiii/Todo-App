import React from 'react'
import css from "./WelcomeMessage.module.css"

function WelcomeMessage() {
  return (
    <button type="button" className={`btn btn-lg btn-danger ${css.hedd}`} data-bs-toggle="popover" data-bs-title="Popover title" data-bs-content="And here’s some amazing content. It’s very engaging. Right?">Enjoy Your Day</button>
  )
}

export default WelcomeMessage
