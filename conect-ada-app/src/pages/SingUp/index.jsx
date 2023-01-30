import './style.css';
import Logo from "../../assets/logo-ada+connect.svg";
import Input from '../../components/Input';
import Arroba from "../../assets/icon-arroba.svg"
import Button from '../../components/Button';

import { FaUser } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
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
      <h2>Cadastrar na Connect Ada</h2>

      <div style={{borderRadius: '12px 12px 0px 0px'}} className='inputContainer '>
        <FaUser/>
        <Input placeholder="Nome" type="text" />
      </div>

      <div className='inputContainer '>
        <FaUser/>
        <Input placeholder="Sobrenome" type="text"  />
      </div>

      <div className='inputContainer'>
        <img src={Arroba} />
        <Input placeholder="Nome de Usuário" type="text" />
      </div>

      <div className='inputContainer'>
        <MdEmail/>
        <Input placeholder="Email" type="email"  />
      </div>

      <div className='inputContainer'>
        <ImKey/>
        <Input placeholder="Senha" type="password"  />
      </div>

      <div style={{borderRadius: '0px 0px 12px 12px'}} className='inputContainer'>
        <ImKey/>
        <Input placeholder="Confirmar Senha" type="password"  />
      </div>

      <Button text="Entrar" />
      <p>Já possui uma conta? <a href="/" >Entrar</a></p>

      </form>
    </main>
    </>
  )

}

export default App;