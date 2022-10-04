import React from 'react'
import About from './About'

function Hero() {
    return (
        <>
            <header className="hero">
                <img src="https://dvodr9ecx1wan.cloudfront.net/Hero.jpg" alt="Hero" />
                <section className='hero-text'>
                    <h1>Community Healing Through Art</h1>
                </section>
            </header>
            <About />


        </>
    )
}

export default Hero
