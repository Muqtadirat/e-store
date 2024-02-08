import styles from "./Button.module.css"

const Button = ({ variant, children }) => {
    return (
        <button data-variant={variant} className={styles.btn}>
            {children}
        </button>
    )
}

export default Button