import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.module.scss'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="icone_and_text">
          <img
            className="kasa_footer"
            src="LOGO_footer.png"
            alt="logo de KASA footer"
          />
          <p className="text_footer">© 2020 Kasa. All rights reserved</p>
          FOOTER
        </div>
      </div>
    </footer>
  )
}

export default Footer
