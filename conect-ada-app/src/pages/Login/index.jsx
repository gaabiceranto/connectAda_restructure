import './style.css';
import Logo from "../../assets/logo-ada+connect.svg";
import Input from '../../components/Input';
import Button from '../../components/Button';

import { FaUser } from 'react-icons/fa';
import { ImKey } from 'react-icons/im';


const App = () => {


  return (
    <>
    <header>
      <img src={Logo} />
      <p>A rede social ada by let's code.</p>
    </header>
    <main>
      <form >
      <h2>Entar na Connect Ada</h2>

      <div style={{borderRadius: '12px 12px 0px 0px'}} className='inputContainer first'>
        <FaUser/>
        <Input placeholder="Nome de Usuário" type="text" />
      </div>
      
      <div style={{borderRadius: '0px 0px 12px 12px'}}className='inputContainer'>
        <ImKey/>
        <Input placeholder="Senha" type="password"  />
      </div>
      <Button text="Entrar" />
      <p>Nãp possui uma conta? <a href="/singup" >Cadastre-se!</a></p>

      </form>
    </main>
    </>
  )

}

export default App;