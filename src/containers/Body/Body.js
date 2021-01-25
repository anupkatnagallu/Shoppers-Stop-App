import GroceryItems from '../GroceryItems/GroceryItems';
import ShoppingBag from '../ShoppingBag/ShoppingBag';
import ShoppingStats from '../ShoppingStats/ShoppingStats';
import classes from './Body.module.css';
import Textbox from '../../components/Textbox/Textbox';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useCallback} from 'react';
import * as actionCreators from '../../store/actions/actionCreators';

const Body = props => {
    const dispatch = useDispatch();

    const getItems = useCallback(() => dispatch(actionCreators.getItems()), [dispatch]);

    useEffect(() => {
        getItems();
    }, [getItems]);

    const pocketMoney = useSelector(state => {
        return state.pocketMoney
    });

    return (
        <div>
            <p className={classes.Para}>You have <span><Textbox colour='green'>{pocketMoney}</Textbox></span> to spend on Grocery Today!</p>
            <div className={classes.Body}>
                <GroceryItems />
                <ShoppingBag />
                <ShoppingStats />
            </div>
        </div>
    );
}

export default Body;