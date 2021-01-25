import classes from './Header.module.css';

const Header = props => {
    return (
        <div className={classes.Header}>
            <h1>Shoppers Stop!</h1>
            <p>Welcome to the best online shopping website</p>
        </div>
    );
}

export default Header;