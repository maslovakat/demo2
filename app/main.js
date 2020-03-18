import { ProductListController } from './components/productList/ProductListController.js';
import { FilterSearchController } from './components/filterAndSearch/FilterSearchController.js';
import { SortController } from './components/sortProducts/SortController.js';
import { Publisher } from "./helper/Publisher.js";

const publisher = new Publisher();
const productList = new ProductListController(publisher.methods);
const filterAndSearch = new FilterSearchController(publisher.methods);
const sortList = new SortController(publisher.methods);