import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Site = (props) => (
    <Layout>
        <Helmet>
            <title>Thank you</title>
            <meta name="description" content="Thank you for contacting Trailmarker" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Thank you</h1>
                    </header>
                    <p>
                        Your message has been sent—thank you for your interest! Site messages are reviewed regularly and Trailmarker will 
                        respond to you as soon as possible.
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Site