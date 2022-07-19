export default class PriceBook{
    #pricesList;
    #catalog;
    
    constructor(catalog){
      this.#catalog = catalog;
      this.#pricesList = [];
    }
  
    getProductPrice(productId){
        let productList = this.#catalog.getProductList();
        productList.forEach( productObj => this.#pricesList.push({ id: productObj.id , price: 140}));
        let product = this.#pricesList.find( productObj => productObj.id === productId);
        return product.price;
    }
  }
