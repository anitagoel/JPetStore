import * as CatalogueActions from "../Actions/catalogue.actions";

const initialState = {
  product: {},
  loadingProduct: false,
  errorProduct: null,
  products: [],
  loadingProducts: false,
  errorProducts: null,
  id: null,
  items: [],
  item: {},
  loadingItem: false,
  errorItem: null,
  stock: 0,
  loadingInventory: false,
  errorInventory: null,
};

export default function (state = initialState, action) {
  //   console.log(action.payload);
  switch (action.type) {
    case CatalogueActions.FETCH_PRODUCTS.REQUEST:
      return {
        ...state,
        loadingProducts: true,
        id: action.payload,
      };
    case CatalogueActions.FETCH_PRODUCTS.SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        products: action.payload.data,
        loadingProducts: false,
      };
    case CatalogueActions.FETCH_PRODUCTS.FAILURE:
      return {
        ...state,
        loadingProducts: false,
        errorProducts: action.payload,
      };
    case CatalogueActions.FETCH_ITEM.REQUEST:
      return {
        ...state,
        loadingItem: true,
        id: action.payload,
      };
    case CatalogueActions.FETCH_ITEM.SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        item: action.payload.data,
        loadingItem: false,
      };
    case CatalogueActions.FETCH_ITEM.FAILURE:
      return {
        ...state,
        loadingItem: false,
        errorItem: action.payload,
      };
    case CatalogueActions.FETCH_ITEM_BY_PRODUCTID.REQUEST:
      return {
        ...state,
        loadingItem: true,
        id: action.payload,
      };
    case CatalogueActions.FETCH_ITEM_BY_PRODUCTID.SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        items: action.payload.data,
        loadingItem: false,
      };
    case CatalogueActions.FETCH_ITEM_BY_PRODUCTID.FAILURE:
      console.log(action);
      return {
        ...state,
        loadingItem: false,
        errorItem: action.payload,
      };
    case CatalogueActions.FETCH_INVENTORY_OF_ITEM.REQUEST:
      return {
        ...state,
        loadingInventory: true,
      };
    case CatalogueActions.FETCH_INVENTORY_OF_ITEM.SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        stock: action.payload.data,
        loadingInventory: false,
      };
    case CatalogueActions.FETCH_INVENTORY_OF_ITEM.FAILURE:
      console.log(action);
      return {
        ...state,
        loadingInventory: false,
        errorInventory: action.payload,
      };
    case CatalogueActions.FETCH_PRODUCT_BY_PRODUCTID.REQUEST:
      return {
        ...state,
        loadingProduct: true,
      };
    case CatalogueActions.FETCH_PRODUCT_BY_PRODUCTID.SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        product: action.payload.data,
        loadingProduct: false,
      };
    case CatalogueActions.FETCH_PRODUCT_BY_PRODUCTID.FAILURE:
      console.log(action);
      return {
        ...state,
        loadingProduct: false,
        errorProduct: action.payload,
      };
    default:
      return state;
  }
}
