import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import Banner from '../components/banner'
import Layout from '../components/layout'

import tongariro from '../assets/images/tongariro.jpg'
import nightcliff from '../assets/images/nightcliff-jetty.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Home"
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${tongariro})` }}>
              <Link
                aria-label="Travel light"
                to="#travel-light"
                className="link primary"
              >
                <header className="major">
                  <h3>Travel light</h3>
                  <p className="fancy">Use tools you can carry</p>
                </header>
              </Link>
            </article>
            <article style={{ backgroundImage: `url(${nightcliff})` }}>
              <Link
                aria-label="Plan ahead"
                to="#plan-ahead"
                className="link primary"
              >
                <header className="major">
                  <h3>Plan ahead</h3>
                  <p className="fancy">The map is not the territory</p>
                </header>
              </Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <a name="travel-light"><h2>Travel light</h2></a>
              </header>
              <p>
                The most useful tools don't weigh you down. Trailmarker offers a 
                lean and nimble software development service. Deliver for your
                organisation, your clients and your users without a caravan of overheads.
              </p>
            </div>
            <div className="inner">
              <header className="major">
                <a name="plan-ahead"><h2>Plan ahead</h2></a>
              </header>
              <p>
                Work smarter, not harder. A bird's eye view is a good start, but the 
                map is not the territory. Trailmarker is about spatial thinking that lets  
                you put your feet up later. 
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
