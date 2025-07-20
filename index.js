const menuIcon = document.querySelector('.menu-icon');
    const cart = document.getElementById('cart');
    const closeCartBtn = document.querySelector('.cart__close');
    const cartIcon = document.querySelector('.cart-icon');
    const badge = document.querySelector('.cart-count-badge');
    const addButtons = document.querySelectorAll('.products__btn');
    const cartItemsContainer = document.querySelector('.cart__items-container');
    let cartData = [];

    function updateCartBadge() {
        badge.textContent = cartData.length;
    }

    function addToCart(title, price) {
        const item = document.createElement('div');
        item.className = 'cart__item';
        item.innerHTML = `<p><strong>${title}</strong> - ${price}</p>`;
        cartItemsContainer.appendChild(item);
        updateCartBadge();
    }

    addButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const product = btn.closest('.products__item');
            const title = product.querySelector('.products__title').textContent;
            const price = product.querySelector('.products__price').textContent;
            addToCart(title, price);
        });
    });

    menuIcon.addEventListener('click', () => {
        cart.classList.add('open');
    });

    closeCartBtn.addEventListener('click', () => {
        cart.classList.remove('open');
    });

    updateCartBadge();