import '../Form/Form.css'
import Button from '../Button/Button'

const Form = () => {
    return(
        <form className="formLogin">
            <h1>login</h1>
            <label for="inputEmail">E-mail</label> <br/>
            <input type="email" name="inputEmail" id="inputEmail" placeholder="Digite o seu e-mail" required /> <br/>
            <label for="inputPassword">Senha</label> <br/>
            <input type="password" name="inputPassword" id="inputPassword" placeholder="Digite a sua senha" required />
            <Button Label="Entrar"/>
        </form>
    )
}

export default Form