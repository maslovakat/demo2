import { ProductListController } from './components/productList/ProductListController.js';
import { FilterSearchController } from './components/filterAndSearch/FilterSearchController.js';
import { SortController } from './components/sortProducts/SortController.js';

const productList = new ProductListController();
const filterAndSearch = new FilterSearchController(
    productList.handleFilter.bind(productList), 
    productList.handleSearch.bind(productList), 
    productList.handleGetList.bind(productList));
const sortList = new SortController(productList.handleSort.bind(productList));