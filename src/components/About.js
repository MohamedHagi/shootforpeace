import React from 'react'

function About() {
    return (
        <div className="about-container">
            <div className="hero-2">

                <img src="https://dvodr9ecx1wan.cloudfront.net/Hero-2.jpg" alt="Hero-2"></img>
                <div className="hero-text-container">
                    <div className="hero2-text">
                        <div>
                            <h3 className="cursive-md">
                                Shoot For Peace is a non-profit organization with the mission of community healing through art
</h3>
                            <p className="text-sm">
                                We aim to deliver community programming that makes art accessible to under served youth and launch a generation of story tellers empowered by their identities and experiences, and prepared for success.
</p>
                            <p className="text-sm">
                                Shoot for Peace is an incubator for young artists &mdash; nurturing their creativity, fostering talent, and developing community storytellers.
            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="newsletter">
                <div className="newsletter-text">
                    <p>Sign up for our Newsletter</p>
                </div>
                <div className="newsletter-text">
                    <input type="text" placeholder="name@example.com" name="mail" />
                </div>
            </div>
        </div>

    )
}

export default About
