import React from 'react'

export default function AboutUs() {
    return (
        <>
            <section id="about">
                <div class="container about-grid">
                    <div class="about-images">
                        <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80" alt="Artisan studio" />
                        <div class="about-sticker">
                            <div>
                                <strong>500+</strong>
                                Unique Ideas
                            </div>
                        </div>
                    </div>
                    <div class="about-content">
                        <span class="eyebrow">Our Story</span>
                        <h2>We Don't Just Sell Gifts. We Create <span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>Surprises</span>.</h2>
                        <p>We don't source boring stuff — toys and decorative items from whole-sellers. Every idea comes from scratch so that it ends up being as unique as your loved one. Each idea is dreamed, designed, and crafted in our studio.</p>
                        <p>What started as a passion for making people smile has grown into a movement of intentional gifting. From the smallest trinket to the grandest gesture — every ArtisanGifts creation carries the warmth of human hands and the magic of an unexpected surprise.</p>
                        <ul class="feature-list">
                            <li><i class="fa-solid fa-hand-sparkles"></i> 100% Handcrafted</li>
                            <li><i class="fa-solid fa-pen-fancy"></i> Personalized Gifts</li>
                            <li><i class="fa-solid fa-map-pin"></i> Made in India</li>
                            <li><i class="fa-solid fa-face-smile-beam"></i> Surprise &amp; Delight</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}
