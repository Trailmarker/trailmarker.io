import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                <form method="post" action="https://getsimpleform.com/messages?form_api_token=b338fce2988a01722ff17de40dcaad8d">
                    <input type="hidden" name="redirect_to" value="https://trailmarker.io/thank-you" />
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>Email</h3>
                        <a href="#">info@trailmarker.io</a>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone</h3>
                        <span>+61 434 929 287</span>
                    </div>
                </section>
                {/* <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>1234 Somewhere Road #5432<br />
                        Nashville, TN 00000<br />
                        United States of America</span>
                    </div>
                </section> */}
            </section>
        </div>
    </section>
)

export default Contact
