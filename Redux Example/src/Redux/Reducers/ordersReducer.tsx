import { ADD_ITEM, DELETE_ITEM, INITITIAL } from "../Actions/totalActions";

interface itemObj {
  type: string;
  item: string;
  price: number;
}
const initialState = {
  totalPrice: 0,
  counts: new Map(),
  priceEach: new Map(),
};
const ordersReducer = (state = initialState, action: itemObj) => {
  switch (action.type) {
    case ADD_ITEM:
      let newMap = state.counts;
      let priceMap = state.priceEach;
      if (newMap.has(action.item)) {
        newMap.set(action.item, newMap.get(action.item) + 1);
        priceMap.set(action.item, priceMap.get(action.item) + action.price);
      } else {
        newMap.set(action.item, 1);
        priceMap.set(action.item, action.price);
      }
      return {
        ...state,
        totalPrice: state.totalPrice + action.price,
        counts: newMap,
        priceEach: priceMap,
      };
    case DELETE_ITEM:
      let newDeleteMap = state.counts;
      let priceDeleteMap = state.priceEach;
      if (newDeleteMap.has(action.item)) {
        if (newDeleteMap.get(action.item) > 1) {
          newDeleteMap.set(action.item, newDeleteMap.get(action.item) - 1);
          priceDeleteMap.set(
            action.item,
            priceDeleteMap.get(action.item) - action.price
          );
        } else {
          newDeleteMap.delete(action.item);
          priceDeleteMap.delete(action.item);
        }
        return {
          ...state,
          totalPrice: state.totalPrice - action.price,
          counts: newDeleteMap,
        };
      }
      return state;
    case INITITIAL:
      return {
        totalPrice: 0,
        counts: new Map(),
        priceEach: new Map(),
      };
    default:
      return state;
  }
};
export default ordersReducer;
