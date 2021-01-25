import ItemDetail from '../../components/ItemDetail/ItemDetail';
import classes from './GroceryItems.module.css';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../../store/actions/actions';

const GroceryItems = props => {
    const dispatch = useDispatch();

    const buyItem = id => dispatch({type: actions.BUY_ITEM, id: id});

    const items = useSelector(state => {
        return state.items;
    });

    const details = [<h3>Loading...</h3>];

    if(items.length > 0){
        details.shift();
        items.forEach(item => {
            if(!item.isBought){
                details.push(<ItemDetail key={item.id} click={() => buyItem(item.id)} name={item.name} cost={item.cost} calories={item.calories} weight={item.weight} />)
            }
        });
    }
    

    return (
        <div className={classes.GroceryItems}>
            <h1>Grocery Items</h1>
            {details}
        </div>
    );

}

export default GroceryItems;