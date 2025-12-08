import { useState, useEffect } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { Product } from './types'

function App() {
    const [products, setProducts] = useState<Product[]>([])
    const [cart, setCart] = useState<Product[]>([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
            .catch(err => console.error("Error fetching products:", err))
    }, [])

    const addToCart = (product: Product) => {
        setCart([...cart, product])
    }

    const removeFromCart = (indexToRemove: number) => {
        setCart(cart.filter((_, index) => index !== indexToRemove))
    }

    const toggleCart = () => setIsCartOpen(!isCartOpen)
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
        <>
            <Header
                cartCount={cart.length}
                onCartClick={toggleCart}
                onMenuClick={toggleMenu}
            />

            <main>
                <Banner />
                {loading ? (
                    <p style={{ textAlign: 'center', padding: '2rem', fontSize: '1.5rem' }}>Cargando productos...</p>
                ) : (
                    <ProductList products={products} onAddToCart={addToCart} />
                )}

                <Cart
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    cartItems={cart}
                    onRemoveItem={removeFromCart}
                />

                {/* Simple Menu Modal Implementation reusing existing styles */}
                <section className={`menu ${isMenuOpen ? 'open' : ''}`} id="menu">
                    <button className="menu__close" onClick={() => setIsMenuOpen(false)}>X</button>
                    <h2 className="menu__title">MENU</h2>
                    <div className="menu__Options">
                        <a href="#">Home</a>
                        <a href="#">Contact</a>
                    </div>
                </section>
            </main>
        </>
    )
}

export default App
