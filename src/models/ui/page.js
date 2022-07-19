import Cart from '../cart.js';
import PriceBook from '../priceBook.js';

export default class Page {
    #shoppingCart;
    #productListContainer;
    #priceBook;
    #miniCart;
    #showPrice;
    #checkout;

    constructor(catalog) {
        this.#productListContainer = document.querySelector('.product-list');
        this.#priceBook = new PriceBook(catalog);
        this.#shoppingCart = new Cart(catalog, this.#priceBook);
        this.#miniCart = document.querySelector('.mini-cart__product-list');
        this.#checkout = document.querySelector('#checkout');

        this.#productListContainer.addEventListener(
            'click',
            this.#onProductListItemClicked.bind(this)
        );

        this.#showPrice = document.querySelector('.mini-cart__controls-price');

        this.#checkout.addEventListener('click', this.#clearCartList.bind(this));


        this.#clearCartHTML();
    }

    #onProductListItemClicked(event) {
        const ADD_TO_CART_BUTTON_CLASS_NAME = 'js-add-to-cart';

        if (event.target.classList.contains(ADD_TO_CART_BUTTON_CLASS_NAME)) {
            let productContainer = event.target.parentElement;
            let productId = parseInt(productContainer.dataset.productId);

            this.#shoppingCart.addProduct(productId, 1);

            console.log(this.#shoppingCart);

            this.#renderCart();
        }
    }

    #renderCart() {
        this.#clearCartHTML();

        this.#shoppingCart.getProductsAddedCart().forEach((productObj) => {
            const li = document.createElement('li');

            const divName = document.createElement('div');
            const divQuantity = document.createElement('div');
            const divPrice = document.createElement('div');
            const remove = document.createElement('button');

            remove.innerHTML = 'Remove';
            remove.addEventListener('click', () => {
                this.#shoppingCart.removeProduct(productObj.productId);
                this.#renderCart();
            });

            divName.innerHTML =
                'Name: ' + this.#shoppingCart.getNameProducById(productObj.id);
            divQuantity.innerHTML = 'Quantity: ' + productObj.quantity;
            divPrice.innerHTML = `$ ${productObj.price}.00`;

            li.appendChild(divName);
            li.appendChild(divQuantity);
            li.appendChild(divPrice);
            li.appendChild(remove);

            this.#showPrice.innerHTML = `$ ${this.#shoppingCart.getTotalPrice()}.00`;

            this.#miniCart.appendChild(li);
        });
    }

    #clearCartList() {
        this.#shoppingCart.clearProductList();
        this.#showPrice.innerHTML = `$ 0.00`;
        this.#renderCart();

    }

    #clearCartHTML() {
        this.#miniCart.querySelectorAll('li').forEach((li) => {
            this.#miniCart.removeChild(li);
        });
        this.#showPrice.innerHTML = `$ 0.00`;
    }
}
