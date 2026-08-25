import React from 'react'

export default function Banner() {
    return (
        <>
            <section class="hero">
                <div class="container hero-grid">
                    <div class="hero-content">
                        <span class="eyebrow">✨ India's Most Innovative Gifting Studio</span>
                        <h1>Unique Gifts, <span>Unlimited</span> <span class="teal">Joy</span></h1>
                        <p class="lead">Discover personalized, handcrafted gifts that surprise and delight. From quirky keepsakes to bespoke creations — every piece tells a story worth gifting.</p>
                        <div class="hero-buttons">
                            <a href="#shop" class="btn btn-primary">Explore Collection <i class="fa-solid fa-arrow-right"></i></a>
                            <a href="#contact" class="btn btn-outline">Customize Your Gift</a>
                        </div>
                        <div class="hero-stats">
                            <div class="stat"><strong>4.9★</strong><span>Customer Rating</span></div>
                            <div class="stat"><strong>2.4k+</strong><span>Happy Customers</span></div>
                            <div class="stat"><strong>500+</strong><span>Unique Gift Ideas</span></div>
                        </div>
                    </div>
                    <div class="hero-image-wrap">
                        <img src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80" alt="Joyful handcrafted gifts" />
                        <div class="floating-tag tag-1"><i class="fa-solid fa-gift orange"></i> Free Gift Wrap</div>
                        <div class="floating-tag tag-2"><i class="fa-solid fa-truck-fast teal"></i> Free Shipping</div>
                        <div class="floating-tag" style={{ top: '50%', right: '-30px', background: 'var(--accent-pink)', color: 'var(--white)', transform: 'rotate(8deg)' }}><i class="fa-solid fa-heart pink"></i> 2.4k+ Loves</div>
                    </div>
                </div>
            </section>
        </>
    )
}
