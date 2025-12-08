import { Product } from '../types';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
    cartItems: Product[];
    onRemoveItem: (index: number) => void;
}

const Cart = ({ isOpen, onClose, cartItems, onRemoveItem }: CartProps) => {
    return (
        <section className={`cart ${isOpen ? 'open' : ''}`} id="cart">
            <button className="cart__close" onClick={onClose}>X</button>
            <h2 className="cart__title">CARRITO</h2>
            <div className="cart__items-container">
                {cartItems.length === 0 ? (
                    <p style={{ padding: '1rem' }}>El carrito está vacío</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div className="cart__item" key={index}>
                            <img className="cart__img" src={item.image} alt={item.title} />
                            <p className="cart__price">${item.price}</p>
                            <p className="cart__description" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100px' }}>{item.title}</p>
                            <i onClick={() => onRemoveItem(index)} style={{ cursor: 'pointer' }}>
                                <img className="cart__delete-icon" src="img/trash-2.svg" alt="Icono quitar" />
                            </i>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div style={{ padding: '1rem', borderTop: '1px solid #ddd', marginTop: 'auto' }}>
                    <strong>Total: ${cartItems.reduce((acc, curr) => acc + curr.price, 0).toFixed(2)}</strong>
                </div>
            )}
        </section>
    );
};

export default Cart;
