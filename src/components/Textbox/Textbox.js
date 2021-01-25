import classes from './Textbox.module.css';

const Textbox = props => {
    const addClass = [classes.Textbox];
    let text = props.children;
    switch(props.colour) {
        case 'orange':
            addClass.push(classes.TextboxOrange);
            text += 'kCal';
            break;
        case 'lightBlue':
            addClass.push(classes.TextboxLightBlue);
            text = '$' + props.children;
            break;
        case 'blue':
            addClass.push(classes.TextboxBlue);
            text += 'mg';
            break;
        case 'green':
            addClass.push(classes.TextboxGreen);
            text = '$ ' + props.children;
            break;
        default:
            addClass.push(classes.TextboxGreen);
    }

    return (
        <div className={addClass.join(' ')}>{text}</div>
    );
}

export default Textbox;