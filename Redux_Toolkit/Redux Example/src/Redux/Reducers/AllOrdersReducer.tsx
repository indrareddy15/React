import { ADD_ORDER, EMPTY_ORDER } from "../Actions/totalActions";

const initialState = {
  itemsMap: new Map(),
};
const AllOrdersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_ORDER:
      let newMap = state.itemsMap;
      if (newMap.get(action.order.date) !== undefined) {
        var items = new Map(JSON.parse(action.order.items));
        const tempObj = {
          order: items,
          price: action.order.total,
        };
       const newObj=[...newMap.get(action.order.date),tempObj]
        newMap.set(action.order.date, newObj);
      } else {
        items = new Map(JSON.parse(action.order.items));
        const tempObj: any = [
          {
            order: items,
            price: action.order.total,
          }
        ];
        newMap.set(action.order.date, tempObj);
      }
      return {
        itemsMap:newMap
      };
      case EMPTY_ORDER:
        return{
            itemsMap: new Map(),
        }
    default:
      return state;
  }
};
export default AllOrdersReducer;
