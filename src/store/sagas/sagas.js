import axios from '../../axios-order';
import * as actionCreators from '../actions/actionCreators';
import * as actions from '../actions/actions';
import {put, takeEvery} from 'redux-saga/effects';

export function* getItems() {
    try{
        const response = yield axios.get('items.json');
        yield put(actionCreators.loadItems(response));
    }catch(err) {
        console.log(err);
    }
}

export function* watchItems() {
    yield takeEvery(actions.GET_ITEMS ,getItems);
}