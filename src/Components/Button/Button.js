import '../Button/Button.css'

const Button = ({Label}) => {
    return(
        <button id="btn-login">{Label}</button>
    )
}

Button.defaultProps = {
    Label: "Fazer login"
}

export default Button