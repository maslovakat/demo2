import { ProductListController } from './components/productList/ProductListController.js';
import { FilterSearchController } from './components/filterAndSearch/FilterSearchController.js';
import { SortController } from './components/sortProducts/SortController.js';
import { CartController } from './components/cart/CartController.js';
import { PaginationController } from './components/pagination/PaginationController.js';
import { DetailsController } from './components/details/DetailsController.js';
import { MakeOrderController } from './components/makeOrder/MakeOrderController.js';
import { HistoryOrdersController } from './components/historyOrders/HistoryOrdersController.js';
import { Publisher } from "./helper/Publisher.js";

const publisher = new Publisher();
const productList = new ProductListController(publisher.methods);
const filterAndSearch = new FilterSearchController(publisher.methods);
const sortList = new SortController(publisher.methods);
const cart = new CartController(publisher.methods);
const pagination = new PaginationController(publisher.methods);
const details = new DetailsController(publisher.methods);
const makeOrder = new MakeOrderController(publisher.methods);
const historyOrders = new HistoryOrdersController(publisher.methods);