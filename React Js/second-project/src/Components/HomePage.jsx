import React from 'react'
import Header from './Header'
import Banner from './Banner'
import AboutUs from './AboutUs'
import Shop from './Shop'
import WhyUs from './WhyUs'

export default function HomePage() {
    return (
        <>
            {/* <!-- HEADER --> */}
            <Header></Header>

            {/* <!-- HERO --> */}
            <Banner></Banner>

            {/* <!-- ABOUT --> */}
            <AboutUs />

            {/* <!-- SHOP --> */}
            <Shop heading='Explore the Collection' title='Thoughtful Gifts, Made to Matter' description='Discover beautifully handcrafted pieces chosen to make every occasion feel a little more special. From heartfelt keepsakes to charming surprises, each gift is made with care and designed to bring a genuine smile.'>
                <div class="category-filter">
                    <button class="filter-btn active" data-cat="all">All Gifts</button>
                    <button class="filter-btn" data-cat="candles">Candles</button>
                    <button class="filter-btn" data-cat="woodwork">Woodwork</button>
                    <button class="filter-btn" data-cat="ceramics">Ceramics</button>
                    <button class="filter-btn" data-cat="jewelry">Jewelry</button>
                    <button class="filter-btn" data-cat="personalized">Personalized</button>
                </div>
            </Shop>

            {/* <!-- WHY US --> */}
            <WhyUs/>

            {/* <!-- TESTIMONIALS --> */}
            <section id="testimonials" class="testimonials">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">Loved By Thousands</span>
                        <h2>Real Stories, Real <span>Smiles</span></h2>
                        <p>Why gift-givers across India and beyond keep coming back for more.</p>
                    </div>
                    <div class="testimonials-grid">
                        <div class="testimonial-card">
                            <div class="stars">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                            <p>"I ordered a personalized name plaque for my best friend's birthday and was blown away. The packaging was so thoughtful, the craftsmanship impeccable. This is the only place I'll ever buy gifts from now!"</p>
                            <div class="testimonial-author">
                                <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Priya Sharma" />
                                <div><strong>Priya Sharma</strong><small>Verified Buyer · Mumbai</small></div>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="stars">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                            <p>"ArtisanGifts turned my boring office secret santa into the highlight of the year. Every item screams quality and love. Their candle collection is unreal — my colleagues all asked where I got them!"</p>
                            <div class="testimonial-author">
                                <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Rahul Mehta" />
                                <div><strong>Rahul Mehta</strong><small>Verified Buyer · Bangalore</small></div>
                            </div>
                        </div>
                        <div class="testimonial-card">
                            <div class="stars">
                                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                            </div>
                            <p>"The custom jewelry I ordered for my wife was breathtaking — they kept me in the loop the whole time and even sent progress pics. The final piece was even better than I imagined. ArtisanGifts makes you look like a gift-giving genius."</p>
                            <div class="testimonial-author">
                                <img src="https://randomuser.me/api/portraits/women/52.jpg" alt="Ananya Iyer" />
                                <div><strong>Ananya Iyer</strong><small>Verified Buyer · Delhi</small></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- GALLERY --> */}
            {/* <section id="gallery">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">Behind The Scenes</span>
                        <h2>Inside Our <span>Joy Factory</span></h2>
                        <p>From raw materials to finished smiles — every gift is a little celebration.</p>
                    </div>
                    <div class="gallery-grid">
                        <div class="gallery-item" data-label="Candles">
                            <img src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=80" alt="Candles" />
                        </div>
                        <div class="gallery-item" data-label="Woodwork">
                            <img src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=800&q=80" alt="Woodworking" />
                        </div>
                        <div class="gallery-item" data-label="Pottery">
                            <img src="https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80" alt="Pottery" />
                        </div>
                        <div class="gallery-item" data-label="Jewelry">
                            <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80" alt="Jewelry" />
                        </div>
                        <div class="gallery-item" data-label="Gift Wrapping">
                            <img src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80" alt="Gift wrapping" />
                        </div>
                        <div class="gallery-item" data-label="Workshop">
                            <img src="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=800&q=80" alt="Workshop" />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <!-- SHOP --> */}
            <Shop heading='Create Something Special' title='Made Just for Them' description='Turn a meaningful moment into something unforgettable with a gift made especially for them. Personalize your favorite pieces with names, messages, and little details that make every present uniquely theirs.'>
                
            </Shop>

            {/* <!-- NEWSLETTER --> */}
            <section class="newsletter">
                <div class="container newsletter-inner">
                    <span class="eyebrow">Join The Joy</span>
                    <h2>Surprise In Your Inbox</h2>
                    <p>Be the first to discover new collections, get 15% off your first order, and unlock exclusive gift ideas every month.</p>
                    <form class="newsletter-form" id="newsletterForm">
                        <input type="email" placeholder="Enter your email address" required />
                        <button type="submit">Subscribe <i class="fa-solid fa-paper-plane"></i></button>
                    </form>
                </div>
            </section>

            {/* <!-- CONTACT --> */}
            <section id="contact">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">Let's Talk</span>
                        <h2>Got a Crazy Idea? <span>Let's Make It</span></h2>
                        <p>Custom orders, bulk gifting, or just a friendly hello — we'd love to hear from you.</p>
                    </div>
                    <div class="contact-grid">
                        <div class="contact-info">
                            <h3>Say Hello</h3>
                            <p>We typically respond within a few hours — and yes, a real human will reply (no bots, no scripts).</p>
                            <div class="contact-item">
                                <i class="fa-solid fa-location-dot"></i>
                                <div><strong>Studio Address</strong><span>42 Creative Lane, Koramangala, Bangalore 560034</span></div>
                            </div>
                            <div class="contact-item">
                                <i class="fa-solid fa-phone"></i>
                                <div><strong>Phone</strong><span>+91 98765 43210</span></div>
                            </div>
                            <div class="contact-item">
                                <i class="fa-solid fa-envelope"></i>
                                <div><strong>Email</strong><span>hello@artisangifts.in</span></div>
                            </div>
                            <div class="social-icons">
                                <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" aria-label="Pinterest"><i class="fa-brands fa-pinterest-p"></i></a>
                                <a href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                        <form class="contact-form" id="contactForm">
                            <div class="form-group">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" placeholder="Jane Doe" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Email Address</label>
                                <input type="email" id="email" placeholder="jane@example.com" required />
                            </div>
                            <div class="form-group">
                                <label for="message">Your Message</label>
                                <textarea id="message" placeholder="Tell us about your gift idea, occasion, or question..." required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" style={{ width: '100%' }}>Send Message <i class="fa-solid fa-paper-plane"></i></button>
                        </form>
                    </div>
                </div>
            </section>

            {/* <!-- FOOTER --> */}
            <footer class="footer">
                <div class="container">
                    <div class="footer-grid">
                        <div class="footer-brand">
                            <a href="#" class="logo">
                                <span class="logo-icon"><i class="fa-solid fa-gift"></i></span>
                                ArtisanGifts
                            </a>
                            <p>Handcrafted gifts made with intention by a small studio that believes every gift can make any celebration.</p>
                            <div class="social-icons">
                                <a href="#" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#" aria-label="Pinterest"><i class="fa-brands fa-pinterest-p"></i></a>
                            </div>
                        </div>
                        <div class="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#shop">Shop Collection</a></li>
                                <li><a href="#gallery">Gallery</a></li>
                                <li><a href="#testimonials">Reviews</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Customer Care</h4>
                            <ul>
                                <li><a href="#">Shipping &amp; Returns</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Custom Orders</a></li>
                                <li><a href="#">Bulk Gifting</a></li>
                                <li><a href="#">Track Order</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>Studio Hours</h4>
                            <ul>
                                <li><i class="fa-regular fa-clock"></i> Mon — Fri: 10am — 7pm</li>
                                <li><i class="fa-regular fa-clock"></i> Saturday: 11am — 5pm</li>
                                <li><i class="fa-regular fa-clock"></i> Sunday: Closed</li>
                                <li><i class="fa-solid fa-location-dot"></i> Bangalore, India</li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2026 ArtisanGifts Studio. Handmade with <i class="fa-solid fa-heart"></i> in India.</p>
                        <div class="footer-legal">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Refund Policy</a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <!-- PRODUCT MODAL --> */}
            <div class="modal-overlay" id="modalOverlay">
                <div class="modal" id="productModal">
                    <button class="modal-close" id="modalClose" aria-label="Close modal"><i class="fa-solid fa-xmark"></i></button>
                    <div class="modal-img"><img id="modalImage" src="" alt="" /></div>
                    <div class="modal-content">
                        <span class="product-category" id="modalCategory"></span>
                        <h2 id="modalName"></h2>
                        <div class="modal-price" id="modalPrice"></div>
                        <p class="modal-desc" id="modalDesc"></p>
                        <div style={{ fontSize: '0.85rem', color: 'var(--text-mid)', marginBottom: '8px', fontWeight: '700' }}>Quantity</div>
                        <div class="qty-stepper">
                            <button id="qtyMinus" aria-label="Decrease quantity"><i class="fa-solid fa-minus"></i></button>
                            <span id="qtyValue">1</span>
                            <button id="qtyPlus" aria-label="Increase quantity"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button class="btn btn-primary" id="modalAddBtn" style={{ width: '100%', marginTop: '8px' }}>
                            <i class="fa-solid fa-bag-shopping"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* <!-- CART SIDEBAR --> */}
            <div class="cart-overlay" id="cartOverlay"></div>
            <aside class="cart-sidebar" id="cartSidebar" aria-label="Shopping cart">
                <div class="cart-header">
                    <h3>Your Cart (<span id="cartCount">0</span>)</h3>
                    <button class="cart-close" id="cartClose" aria-label="Close cart"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <div class="cart-items" id="cartItems"></div>
                <div class="cart-footer" id="cartFooter">
                    <div class="cart-row"><span>Subtotal</span><span id="cartSubtotal">₹0</span></div>
                    <div class="cart-row"><span>Estimated Tax</span><span id="cartTax">₹0</span></div>
                    <div class="cart-row total"><span>Grand Total</span><span id="cartTotal">₹0</span></div>
                    <button class="btn btn-primary checkout-btn" id="checkoutBtn"><i class="fa-solid fa-lock"></i> Proceed to Checkout</button>
                </div>
            </aside>

            {/* <!-- TOAST --> */}
            <div class="toast" id="toast"><i class="fa-solid fa-circle-check"></i> <span id="toastMsg"></span></div>
        </>
    )
}
