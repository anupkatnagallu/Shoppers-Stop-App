import ItemDetail from '../../components/ItemDetail/ItemDetail';
import classes from './ShoppingBag.module.css';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/actions';

const ShoppingBag = props => {
    const dispatch = useDispatch();

    const notBuyItem = id => dispatch({type: actions.NOT_BUY_ITEM, id: id});

    const items = useSelector(state => {
        return state.items;
    });

    const details = [];

    if(items) {
        items.forEach(item => {
            if(item.isBought){
                details.push(<ItemDetail key={item.id} click={() => notBuyItem(item.id)} name={item.name} cost={item.cost} calories={item.calories} weight={item.weight} />)
            }
        });
    }
    
    return (
        <div className={classes.ShoppingBag}>
            <h1>Shopping Bag</h1>
            {details}
        </div>
    );

}

export default ShoppingBag;