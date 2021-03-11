import ITEMS from "api/claimTable";

// const SET_TABLE_ITEM = "SET_TABLE_ITEM";
// const GET_TABLE_ITEMS = "GET_TABLE_ITEMS";
// const REMOVE_TABLE_ITEM = "REMOVE_TABLE_ITEM";
const SET_CURRENT_CLAIM = "SET_CURRENT_CLAIM";
const SET_TABLE_ITEMS = "SET_TABLE_ITEMS";

let initialState = {
  items: [],
  filterItems: {},
  currentClaim: null,
};

let tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CLAIM:
      return {
        ...state,
        currentClaim: state.items.find(
          (item) => item.claimId === action.claimId
        ),
      };
    case SET_TABLE_ITEMS:
      return {
        ...state,
        items: [...ITEMS],
      };
    // case SET_TABLE_ITEM:
    //   return {
    //     ...state,
    //     filterItems: { ...state.filterItems, ...action.itemKey },
    //   };
    // case GET_TABLE_ITEMS:
    //   return {
    //     ...state,
    //     filterItems: { ...localStorage },
    //   };
    // case REMOVE_TABLE_ITEM:
    //   return {
    //     ...state,
    //   };

    default:
      return state;
  }
};

export const setTableClaim = (claimId) => ({
  type: SET_CURRENT_CLAIM,
  claimId,
});
export const setTableItems = () => ({
  type: SET_TABLE_ITEMS,
});
// export const setTableItem = (itemKey) => ({
//   type: SET_TABLE_ITEM,
//   itemKey,
// });
// export const getTableItems = () => ({
//   type: GET_TABLE_ITEMS,
// });
// export const removeTableItem = (itemKey) => ({
//   type: REMOVE_TABLE_ITEM,
//   itemKey,
// });

// export const removeTableItems = (itemKey) => (dispatch) => {
//   localStorageAPI.removeTableItem(itemKey);
//   dispatch(getTableItems());
// };
//
// export const setTableItems = (itemKey) => (dispatch) => {
//   localStorageAPI.setTableItems(itemKey);
//   dispatch(getTableItems());
// };

export { tableReducer };
