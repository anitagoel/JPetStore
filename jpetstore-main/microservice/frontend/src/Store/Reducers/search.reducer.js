import * as SearchActions from "../Actions/search.actions";

const initialState = {
  products: [],
  searchProducts: false,
  errorSearch: null,
  keyword: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SearchActions.SEARCH_KEYWORD.REQUEST:
      return {
        ...state,
        searchProducts: true,
        keyword: action.payload,
      };
    case SearchActions.SEARCH_KEYWORD.SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        searchProducts: false,
      };
    case SearchActions.SEARCH_KEYWORD.FAILURE:
      return {
        ...state,
        loadingProducts: false,
        errorSearch: action.payload,
      };
    default:
      return state;
  }
}
