interface HeaderProps {
    cartCount: number;
    onCartClick: () => void;
    onMenuClick: () => void;
}

const Header = ({ cartCount, onCartClick, onMenuClick }: HeaderProps) => {
    return (
        <header className="header" style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', alignItems: 'center' }}>
            {/* Note: In React we use className, but careful with existing CSS selectors. 
                Original HTML used <header class="header">. 
                I'm manually adding styles inline or classNames ensuring they match existing SCSS.
                Original:
                <i class="menu-icon"><img ...></i>
            */}

            <i className="menu-icon" onClick={onMenuClick} style={{ cursor: 'pointer' }}>
                <img className="header__icon" src="img/menu.png" alt="menu" />
            </i>

            <i><img className="header__logo" src="img/logo adidas.svg" alt="Logo Adidas" /></i>

            <i className="cart-icon" style={{ position: 'relative', cursor: 'pointer' }} onClick={onCartClick}>
                <img className="cart-icon header__icon" src="img/shopping.svg" alt="Icono carrito" />
                <span className="cart-count-badge">{cartCount}</span>
            </i>
        </header>
    );
};

export default Header;
