// import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
// import pic01 from '../assets/images/pic01.jpg'
// import pic02 from '../assets/images/pic02.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'
import Banner from '../components/Banner'
import Layout from '../components/layout'

// import lissitzky from '../assets/images/el-lissitzky-untitled.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Trailmarker"
          meta={[
            { name: 'description', content: 'Trailmarker — software development' },
            { name: 'keywords', content: 'software, services, spatial, geospatial, remote sensing' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article>
              <Link
                aria-label="Lean service"
                to="#lean-service"
                className="link primary"
              >
                <header className="major">
                  <h3>Travel light</h3>
                  <p>Use tools you can carry.</p>
                </header>
              </Link>
            </article>
            <article>
              <Link
                aria-label="Spatial thinking"
                to="#spatial-thinking"
                className="link primary"
              >
                <header className="major">
                  <h3>Plan your route</h3>
                  <p>The map is not the territory.</p>
                </header>
              </Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <a name="lean-service"><h2>Lean service</h2></a>
              </header>
              <p>
                Trailmarker offers a nimble software development service. Deliver for your
                organisation, your clients and your users without a caravan of overheads.
              </p>
            </div>
            <div className="inner">
              <header className="major">
                <a name="spatial-thinking"><h2>Spatial thinking</h2></a>
              </header>
              <p>
                Work smarter, not harder. A bird's eye view is great, but what 
                about understanding the wind?
              </p>
            </div>
          </section>
          {/* <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Aliquam</h3>
                  <p>Ipsum dolor sit amet</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Tempus</h3>
                  <p>feugiat amet tempus</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Magna</h3>
                  <p>Lorem etiam nullam</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Ipsum</h3>
                  <p>Nisl sed aliquam</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Consequat</h3>
                  <p>Ipsum dolor sit amet</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <Link
                aria-label="Link to Landing Page"
                to="/landing"
                className="link primary"
              >
                <header className="major">
                  <h3>Etiam</h3>
                  <p>Feugiat amet tempus</p>
                </header>
              </Link>
            </article>
          </section> */}
          {/* 
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>Massa libero</h2>
              </header>
              <p>
                Nullam et orci eu lorem consequat tincidunt vivamus et sagittis
                libero. Mauris aliquet magna magna sed nunc rhoncus pharetra.
                Pellentesque condimentum sem. In efficitur ligula tate urna.
                Maecenas laoreet massa vel lacinia pellentesque lorem ipsum
                dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et
                sagittis libero. Mauris aliquet magna magna sed nunc rhoncus
                amet pharetra et feugiat tempus.
              </p>
              <ul className="actions">
                <li>
                  <Link
                    aria-label="Link to Landing Page"
                    to="/landing"
                    className="button next"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </section> */}
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
