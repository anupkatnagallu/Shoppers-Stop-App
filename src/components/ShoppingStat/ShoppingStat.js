import classes from './ShoppingStat.module.css';

const ShoppingStat = props => {
    let text = props.text;
    switch(props.type) {
        case 'cost':
            text = '$ ' + props.text;
            break;
        case 'calories':
            text += ' kCal'; 
            break;
        case 'weight':
            text += ' mg';
            break;
        default:

    }
    return (
        <div className={classes.ShoppingStat}>
            <p>{props.title} - {text}</p>
        </div>
    );
}

export default ShoppingStat;