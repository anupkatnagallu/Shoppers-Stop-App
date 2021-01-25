import * as actions from '../actions/actions';

const initialState = {
    items: [],
    totalCost: 0,
    totalCalories: 0,
    totalWeight: 0,
    pocketMoney: 50
};

const buyItem = (state, action) => {
    const dupState = {...state};
    const items = [...dupState.items];
    let cost, calories, weight;
    items.forEach((item, index) => {
        if(item.id === action.id) {
            items[index].isBought = true;
            cost = item.cost;
            calories = item.calories;
            weight = item.weight;
        }
    });
    dupState.totalCost += cost;
    dupState.totalCalories += calories;
    dupState.totalWeight += weight;
    dupState.pocketMoney -= cost;
    return {
        dupState,
        items
    }
}

const notBuyItem = (state, action) => {
    const dupState = {...state};
    const items = [...dupState.items];
    let cost, calories, weight;
    items.forEach((item, index) => {
        if(item.id === action.id) {
            items[index].isBought = false;
            cost = item.cost;
            calories = item.calories;
            weight = item.weight;
        }
    });
    dupState.totalCost -= cost;
    dupState.totalCalories -= calories;
    dupState.totalWeight -= weight;
    dupState.pocketMoney += cost;
    return {
        dupState,
        items
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.LOAD_ITEMS:
            const items = action.response.data.slice(1);
            console.log(items);
            return {
                ...state,
                items: items
            }
        case actions.BUY_ITEM:
            let returnedItems = buyItem(state, action);
            return {
                ...state,
                items: returnedItems.items,
                totalCost: returnedItems.dupState.totalCost,
                totalCalories: returnedItems.dupState.totalCalories,
                totalWeight: returnedItems.dupState.totalWeight,
                pocketMoney: returnedItems.dupState.pocketMoney,
            };
        case actions.NOT_BUY_ITEM:
            let returnedItemsN = notBuyItem(state, action);
            return {
                ...state,
                items: returnedItemsN.items,
                totalCost: returnedItemsN.dupState.totalCost,
                totalCalories: returnedItemsN.dupState.totalCalories,
                totalWeight: returnedItemsN.dupState.totalWeight,
                pocketMoney: returnedItemsN.dupState.pocketMoney,
            };
        default:
            return state;
    }
}

export default reducer;