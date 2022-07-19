import Page from './models/ui/page.js';
import Catalog from './models/catalogMgr.js';

let catalog = new Catalog();

let standardJerryShirt = {
    id: 1,
    name: 'Standard gray shirt',
};

let standardJerryShirt1 = {
    id: 2,
    name: 'Standard red shirt',
};

let standardJerryShirt2 = {
    id: 3,
    name: 'Standard white shirt',
};

let standardJerryShirt3 = {
    id: 4,
    name: 'Standard black shirt',
};

let standardJerryShirt4 = {
    id: 5,
    name: 'Standard green shirt',
};

let standardJerryShirt5 = {
    id: 6,
    name: 'Standard beige shirt',
};

catalog.addProductToCatalog(standardJerryShirt);
catalog.addProductToCatalog(standardJerryShirt1);
catalog.addProductToCatalog(standardJerryShirt2);
catalog.addProductToCatalog(standardJerryShirt3);
catalog.addProductToCatalog(standardJerryShirt4);
catalog.addProductToCatalog(standardJerryShirt5);

let productListingPage = new Page(catalog);
console.log(productListingPage);
