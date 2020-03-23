import { ProductListView } from './ProductListView.js';
import { ProductListModel } from './ProductListModel.js';

export class ProductListController {
    
    constructor({subscribe, notify}) {
        this.view = new ProductListView(this.handleAddToCartBtn, this.handleClickDetails, this.handleAll.bind(this));
        this.model = new ProductListModel(this.handleLoadList.bind(this), this.handleLoadNavList.bind(this), this.handleCardList);
        
        this.model.getProductList();
        this.subscribe = subscribe;
        this.notify = notify;
        this.subscribe('search', this.handleSearch);
        this.subscribe('filter', this.handleFilter);
        this.subscribe('sort', this.handleSort);
        this.subscribe('pagination', this.handlePagination);
    }
    
    handleAll(arr) {
        const wholeList = this.model.renderAll();
        this.view.renderList(wholeList);
    }

    handleLoadList(arr) {
        this.view.renderList(arr);
    }

    handleCardList = () => {
        let prodList = this.model.getCartList();
        this.notify('prodList', prodList);
    }
    
    handleAddToCartBtn = () => {
        let cards = this.view.getList();
        this.notify('cart', cards);
    }

    handleLoadNavList(obj) {
        this.model.otherAnimals = this.view.renderNavigationList(obj);
    }

    handleFilter = (id) => {
        const filteredList = this.model.filterAndSearch(id, null, true);
        this.view.renderList(filteredList);
    }

    handleSearch = (str) => {
        const searchList = this.model.filterAndSearch(null, str);
        this.view.renderList(searchList);
    }

    handleSort = (e) => {
        const sortedList = this.model.sortedBy(e);
        this.view.renderList(sortedList);
    }

    handlePagination = (where = 'next') => {
        const data = this.model.getPaginationData(where);
        this.view.renderList(data);
    }

    handleClickDetails = (ev) => {
        console.log('ev.target ==', ev.target.dataset.id);
        const card = this.model.getCard(ev.target.dataset.id);
        console.log('card =  ==', card);
        this.notify('show-details', card);
        console.log('this.notify =  ==', this.notify('show-details', card));
    }
}