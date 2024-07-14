import styles from "./Card.module.css";

const Card = ({className, children}) => {
    let classes = `${styles.card} ${className}`;
    return (
        <div className={classes}>{children}</div>
    );
};

export default Card;