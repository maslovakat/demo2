import { ProductListView } from './ProductListView.js';
import { ProductListModel } from './ProductListModel.js';


export class ProductListController {
    constructor() {
        this.view = new ProductListView();
        this.model = new ProductListModel();

        this.handleLoadMessages();
    }

    
    handleLoadMessages() {
        this.data = this.model.getProductList();
        this.view.renderMessage(this.data);
    }
}