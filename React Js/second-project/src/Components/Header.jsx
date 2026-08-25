import React from 'react'

export default function Header() {
    return (
        <>
            <header class="header">
                <div class="container header-inner">
                    <a href="#" class="logo">
                        <span class="logo-icon"><i class="fa-solid fa-gift"></i></span>
                        ArtisanGifts
                    </a>
                    <nav class="nav">
                        <ul class="nav-list" id="navList">
                            <li><a href="#shop">Shop</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <div class="header-actions">
                            <button class="cart-btn" id="cartBtn" aria-label="Open cart">
                                <i class="fa-solid fa-bag-shopping"></i>
                                <span class="cart-badge" id="cartBadge">0</span>
                            </button>
                            <button class="hamburger" id="hamburger" aria-label="Menu">
                                <i class="fa-solid fa-bars"></i>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
