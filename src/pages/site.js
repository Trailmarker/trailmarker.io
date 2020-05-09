import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import lissitzky from '../assets/images/el-lissitzky-untitled.jpg'

const Site = (props) => (
    <Layout>
        <Helmet>
            <title>About trailmarker.io</title>
            <meta name="description" content="Site description" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About trailmarker.io</h1>
                    </header>
                    <p>
                        This site is based on a <a href="https://www.gatsbyjs.org/">GatsbyJS</a> variant of 
                        the <a href="https://html5up.net/forty">Forty</a> theme by <a href="https://html5up.net/">HTML5 Up</a>.
                    </p>
                    <p>
                        The Forty theme uses <a href="https://en.wikipedia.org/wiki/CSS_grid_layout">CSS grid</a> to create a 
                        responsive, customisable set of page layouts. CSS grid is now supported by the majority of web 
                        browsers. Please get in touch if you find you are having trouble using the site. 
                    </p>
                    <p>
                        The site palette was developed from the painting <a href="https://www.guggenheim.org/artwork/2511">
                        Untitled (ca. 1919–1920)</a> by the Russian artist <a href="https://en.wikipedia.org/wiki/El_Lissitzky">
                        El Lissitzky</a>.
                    </p>
                    <span className="image fit"><img src={lissitzky} alt="Untitled, El Lissitzky (ca. 1919–1920)" /></span>
                    <p></p>
                    <p>
                        This site is developed and maintained in Darwin Australia, on the traditional lands of
                        the <a href="https://en.wikipedia.org/wiki/Larrakia_people">Larrakia people</a>. Trailmarker acknowledges 
                        that sovereignty over these lands was never ceded by Larrakia. 
                        {/* If you are living on these lands, 
                        we encourage you to <a href="https://indigenousx.com.au/reform-pay-the-rent/">pay the rent</a> by 
                        giving a part of your income to <a href="http://larrakia.com/">Larrakia Nation.</a>  */}
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Site