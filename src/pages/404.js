import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>Not found</h1>
                <p>The route or page you referenced doesn't seem to be here.</p>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
