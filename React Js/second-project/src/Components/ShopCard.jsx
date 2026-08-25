import React from 'react'

export default function ShopCard() {
    return (
        <>
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
        </>
    )
}
