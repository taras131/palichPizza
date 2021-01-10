import classNames from "classnames"

const Button = (props) => {
    return (
        <button onClick = {props.onClick} className={classNames(`button`, props.className, {
            "button--cart": props.button_cart
        })}>
            {props.children}
        </button>
    )
}

export default Button
