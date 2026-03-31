import React from 'react'

import logo from '../assets/images/trailmarker-logo.svg'

const Banner = props => (
  <section id="banner" className="major">
    <div className="inner">
      <img src={logo} alt="" />
      <header>
        <h1>Trailmarker</h1>
      </header>
      {/* <div className="content">
        <a href="mailto:info@trailmarker.io">
          info@trailmarker.io
        </a>
        <ul className="actions">
          <li>
            <a href="#one" name="Get Started" className="button next scrolly">
              Get Started
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  </section>
)

export default Banner
