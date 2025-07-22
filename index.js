const menuIcon = document.querySelector('.menu-icon');
const cart = document.getElementById('cart');
const menu = document.getElementById('menu');
const closeCartBtn = document.querySelector('.cart__close');
const closeMenuBtn = document.querySelector('.menu__close');
const cartIcon = document.querySelector('.cart-icon');
const badge = document.querySelector('.cart-count-badge');
const addButtons = document.querySelectorAll('.products__btn');
const cartItemsContainer = document.querySelector('.cart__items-container');
let cartData = [];

function updateCartBadge() {
    badge.textContent = cartData.length;
}

function addToCart(imgSrc,title, price) {
    cartData.push({ title, price });
    const item = document.createElement('div');
    item.className = 'cart__item';
    console.log(imgSrc)
    item.innerHTML = `
        <img class="cart__img" src="${imgSrc}" alt="${title}">
        <p class="cart__price">${price}</p>
        <p class="cart__description">${title}</p>
        <i><img class="cart__delete-icon" src="img/trash-2.svg" alt="Icono quitar"></i>
    `;
    cartItemsContainer.appendChild(item);
    updateCartBadge();
}

addButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.closest('.products__item');
        const title = product.querySelector('.products__title').textContent;
        const price = product.querySelector('.products__price').textContent;
        const imgSrc = product.querySelector('.products__img').src;
        addToCart(imgSrc,title, price);
    });
});

cartIcon.addEventListener('click', () => {
    cart.classList.add('open');
});

closeCartBtn.addEventListener('click', () => {
    cart.classList.remove('open');
});

menuIcon.addEventListener('click', () => {
    menu.classList.add('open');
});

closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('open');
});

updateCartBadge();