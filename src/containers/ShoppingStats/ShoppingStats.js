import classes from './ShoppingStats.module.css';
import ShoppingStat from '../../components/ShoppingStat/ShoppingStat';
import {useSelector} from 'react-redux';

const ShoppingStats = props => {
    const [totalCost, totalCalories, totalWeight] = useSelector(state => {
        return [state.totalCost, state.totalCalories, state.totalWeight];
    });

    return (
        <div className={classes.ShoppingStats}>
            <h1>Shopping Stats</h1>
            <ShoppingStat title='Cost' type='cost' text={totalCost}/>
            <ShoppingStat title='Calories' type='calories' text={totalCalories}/>
            <ShoppingStat title='Weight' type='weight' text={totalWeight}/>
        </div>
    );

}

export default ShoppingStats;