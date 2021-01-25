import classes from './ItemDetail.module.css';
import Textbox from '../Textbox/Textbox';

const ItemDetail = props => {
    return (
        <div className={classes.ItemDetail} onClick={props.click}>
            <p>{props.name} - </p>
            <Textbox colour='lightBlue'>{props.cost}</Textbox>
            <p> - </p>
            <Textbox colour='orange'>{props.calories}</Textbox>
            <p> - </p>
            <Textbox colour='blue'>{props.weight}</Textbox>
        </div>
    );
}

export default ItemDetail;