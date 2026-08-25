import React from 'react'
import ShopCard from './ShopCard'

export default function Shop({ heading, title, children, description }) {

    var data = [1,1,1,1,1,1,1,1,1,1];

    return (
        <>
            <section id="shop" class="shop">
                <div class="container">
                    <div class="section-header">
                        <span class="eyebrow">{ heading }</span>
                        <h2><span>{ title }</span></h2>
                        <p>{ description }</p>
                    </div>

                    {children}
                    
                    <div class="products-grid" id="productsGrid">
                        {
                            data.map((v, i) => {
                                return(
                                    <ShopCard key={i}/>
                                )
                            })
                        }

                        <article class="product-card" data-id="1">
                            <div class="product-img-wrap">
                                <img src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Scented Soy Candle Set" />
                                <span class="product-badge badge-bestseller">Best Seller</span>
                                <button class="product-quick" aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                            </div>
                            <div class="product-info">
                                <div class="product-category">candles</div>
                                <h3>Scented Soy Candle Set</h3>
                                <div class="product-price">
                                    <strong>₹1,499</strong>
                                    <button class="add-cart-btn" data-id="1" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </article>

                        <article class="product-card" data-id="2">
                            <div class="product-img-wrap">
                                <img src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Personalized Name Wooden Plaque" />
                                <span class="product-badge badge-custom">Customizable</span>
                                <button class="product-quick" aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                            </div>
                            <div class="product-info">
                                <div class="product-category">personalized</div>
                                <h3>Personalized Name Wooden Plaque</h3>
                                <div class="product-price">
                                    <strong>₹2,499</strong>
                                    <button class="add-cart-btn" data-id="2" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </article>

                        <article class="product-card" data-id="3">
                            <div class="product-img-wrap">
                                <img src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Hand-Thrown Ceramic Mug Set" />
                                <span class="product-badge badge-new">New Arrival</span>
                                <button class="product-quick" aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                            </div>
                            <div class="product-info">
                                <div class="product-category">ceramics</div>
                                <h3>Hand-Thrown Ceramic Mug Set</h3>
                                <div class="product-price">
                                    <strong>₹1,899</strong>
                                    <button class="add-cart-btn" data-id="3" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </article>

                        <article class="product-card" data-id="4">
                            <div class="product-img-wrap">
                                <img src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Sterling Silver Leaf Ring" />
                                <span class="product-badge badge-limited">Limited Edition</span>
                                <button class="product-quick" aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                            </div>
                            <div class="product-info">
                                <div class="product-category">jewelry</div>
                                <h3>Sterling Silver Leaf Ring</h3>
                                <div class="product-price">
                                    <strong>₹3,499</strong>
                                    <button class="add-cart-btn" data-id="4" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </article>

                        <article class="product-card" data-id="5">
                            <div class="product-img-wrap">
                                <img src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Eco-Friendly Bamboo Jewelry Box" />
                                <span class="product-badge badge-eco">Eco-Friendly</span>
                                <button class="product-quick" aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                            </div>
                            <div class="product-info">
                                <div class="product-category">woodwork</div>
                                <h3>Eco-Friendly Bamboo Jewelry Box</h3>
                                <div class="product-price">
                                    <strong>₹2,199</strong>
                                    <button class="add-cart-btn" data-id="5" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </article>

                        <article class="product-card" data-id="6">
                            <div class="product-img-wrap">
                                <img src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Surprise Explosion Gift Box" />
                                <span class="product-badge badge-bestseller">Best Seller</span>
                                <button class="product-quick" aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                            </div>
                            <div class="product-info">
                                <div class="product-category">personalized</div>
                                <h3>Surprise Explosion Gift Box</h3>
                                <div class="product-price">
                                    <strong>₹2,999</strong>
                                    <button class="add-cart-btn" data-id="6" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </article>

                        <article class="product-card" data-id="7">
                            <div class="product-img-wrap">
                                <img src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Hand-Painted Ceramic Vase" />
                                <span class="product-badge badge-limited">Limited Edition</span>
                                <button class="product-quick" aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                            </div>
                            <div class="product-info">
                                <div class="product-category">ceramics</div>
                                <h3>Hand-Painted Ceramic Vase</h3>
                                <div class="product-price">
                                    <strong>₹2,799</strong>
                                    <button class="add-cart-btn" data-id="7" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </article>

                        <article class="product-card" data-id="8">
                            <div class="product-img-wrap">
                                <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&amp;fit=crop&amp;w=800&amp;q=80" alt="Quirky Plant Terrarium Kit" />
                                <span class="product-badge badge-new">New Arrival</span>
                                <button class="product-quick" aria-label="Quick view"><i class="fa-solid fa-eye"></i></button>
                            </div>
                            <div class="product-info">
                                <div class="product-category">candles</div>
                                <h3>Quirky Plant Terrarium Kit</h3>
                                <div class="product-price">
                                    <strong>₹1,599</strong>
                                    <button class="add-cart-btn" data-id="8" aria-label="Add to cart"><i class="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
