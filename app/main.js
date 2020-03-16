import { ProductListController } from './components/productList/ProductListController.js';
import { FilterSearchController } from './components/filterAndSearch/FilterSearchController.js';

const productList = new ProductListController();
const filterAndSearch = new FilterSearchController(productList.handleFilter.bind(productList));