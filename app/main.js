import { ProductListController } from './components/productList/ProductListController.js';
import { FilterSearchController } from './components/filterAndSearch/FilterSearchController.js';
import { SortController } from './components/sortProducts/SortController.js';
import { CartController } from './components/cart/CartController.js';
import { PaginationController } from './components/pagination/PaginationController.js';
import { Publisher } from "./helper/Publisher.js";

const publisher = new Publisher();
const productList = new ProductListController(publisher.methods);
const filterAndSearch = new FilterSearchController(publisher.methods);
const sortList = new SortController(publisher.methods);
const cart = new CartController(publisher.methods);
const pagination = new PaginationController(publisher.methods);
