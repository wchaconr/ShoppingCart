

export default class CatalogMgr {
  #products;
  
  constructor() {
    this.#products = [];
  }

  addProductToCatalog(newProduct) {

    if(!newProduct.id){
      throw new Error('Product id can not be empty');
    } 
    if(!newProduct.name){
      throw new Error('Name id can not be empty');
    }
    this.#products.forEach((product) => {
      if(product.id === newProduct.id){
        throw new Error('Product id is already in use');
      }
    });
    this.#products.push(newProduct);


    console.log(`Product "${newProduct.name}" has been added to the Catalog`);
  }

  getProductList(){
    return this.#products;
  }
}

