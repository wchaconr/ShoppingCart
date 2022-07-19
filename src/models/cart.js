export default class Cart {
    #productsAddedCart;
    #catalog;
    #priceBook;
    #totalPrice;
    #totalAmount;

    constructor(catalog, priceBook) {
        this.#catalog = catalog;
        this.#productsAddedCart = [];
        this.#priceBook = priceBook;
        this.#totalPrice = 0;
        this.#totalAmount = 0;
    }

    addProduct(productId, quantity) {
        var itemPrice = 0;
        itemPrice = this.#priceBook.getProductPrice(productId);

        let productInCart = this.#productsAddedCart.findIndex(
            (productObj) => productObj.id === productId
        );

        if (productInCart === -1) {
            this.#productsAddedCart.push({
                id: productId,
                price: itemPrice,
                quantity,
            });

            console.log(this.#productsAddedCart);

            this.getTotalAmount(quantity);
            this.calculateTotalPrice(itemPrice);

            console.log(`Product ${productId} has been added`);
            console.log(
                'Total Amount: ',
                this.#totalAmount,
                'Total Price: ',
                this.#totalPrice
            );
        } else {
            this.#productsAddedCart[productInCart].quantity++;
            this.getTotalAmount(quantity);
            this.calculateTotalPrice(itemPrice);
            console.log(
                `Quantity has increased for product ${productId}`
            );
        }
    }

    getTotalAmount(quantity) {
        return (this.#totalAmount += quantity);
    }
    calculateTotalPrice(itemPrice) {
        return (this.#totalPrice = parseInt(itemPrice * this.#totalAmount));
    }

    getProductsAddedCart() {
        return this.#productsAddedCart;
    }

    getNameProducById(productId) {
        let product = this.#catalog
            .getProductList()
            .find((product) => product.id === productId);
        return product.name;
    }

    getTotalPrice() {
        return this.#totalPrice;
    }

    removeProduct(productId) {
        let productInCart = this.#productsAddedCart.findIndex(
            (productObj) => productObj.id === productId
        );

        if (!productInCart === -1) {
            this.#productsAddedCart.splice(productInCart, 1);
        }

        this.getTotalAmount();
        this.calculateTotalPrice();
    }

    clearProductList(){
        this.#productsAddedCart = [];
        this.#totalPrice = 0;
        this.#totalAmount = 0;

    }
}
