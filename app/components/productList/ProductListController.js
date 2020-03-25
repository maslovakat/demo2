import { ProductListView } from './ProductListView.js';
import { ProductListModel } from './ProductListModel.js';

export class ProductListController {
    
    constructor({subscribe, notify}) {
        this.view = new ProductListView(this.handleAddToCartBtn, this.handleClickDetails);
        this.model = new ProductListModel(this.handleLoadList.bind(this), this.handleLoadNavList.bind(this), this.handleCardList);
        
        this.model.getProductList();
        this.subscribe = subscribe;
        this.notify = notify;
        this.subscribe('search', this.handleSearch);
        this.subscribe('filter', this.handleFilter);
        this.subscribe('sort', this.handleSort);
        this.subscribe('all', this.handleAll);
        this.subscribe('pagination', this.handlePagination);

    }
    
    handleAll = () => {
        this.view.renderList(this.model.renderAll());
    }

    handleLoadList(arr) {
        this.view.renderList(arr);
    }

    handleCardList = () => {
        let prodList = this.model.getCardList();
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
        this.model.lastFilter = id;
        this.view.renderList(this.model.searchAndFiltered());
    }

    handleSearch = (str) => {
        this.model.lastSearch = str;
        this.view.renderList(this.model.searchAndFiltered());
    }

    handleSort = (e) => {
        this.model.lastSort= str;
        this.view.renderList(this.model.searchAndFiltered());
    }

    handlePagination = (where = 'next') => {
        this.view.renderList(this.model.getPaginationData(where));
    }

    handleClickDetails = (ev) => {
        const card = this.model.getCard(ev.target.dataset.id);
        this.notify('show-details', card);
    }
}