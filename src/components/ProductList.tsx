import { Product } from '../types';

interface ProductListProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

const ProductList = ({ products, onAddToCart }: ProductListProps) => {
    return (
        <section className="products">
            {products.map((product) => (
                <article className="products__item" key={product.id}>
                    <img className="products__img" src={product.image} alt={product.title} style={{ objectFit: 'contain', height: '200px', width: '100%' }} />
                    <h3 className="products__title" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{product.title}</h3>
                    <p className="products__price">${product.price}</p>
                    <button className="products__btn" onClick={() => onAddToCart(product)}>Comprar</button>
                </article>
            ))}
        </section>
    );
};

export default ProductList;
