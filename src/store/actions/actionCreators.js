import * as actions from './actions';

export const getItems = () => {
    return {
        type: actions.GET_ITEMS
    }
}

export const loadItems = (response) => {
    return {
        type: actions.LOAD_ITEMS,
        response: response
    }
}