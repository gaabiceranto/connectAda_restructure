import './style.css';
import Logo from "../../assets/logo-ada+connect.svg";
import Input from '../../components/Input';
import Arroba from "../../assets/icon-arroba.svg"

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
      <FaUser/>
      <Input placeholder="Nome" type="text" />
      <FaUser/>
      <Input placeholder="Sobrenome" type="text"  />
      <img src={Arroba} />
      <Input placeholder="Nome de Usuário" type="text" />
      <MdEmail/>
      <Input placeholder="Email" type="email"  />
      <ImKey/>
      <Input placeholder="Senha" type="password"  />
      <ImKey/>
      <Input placeholder="Confirmar Senha" type="password"  />
      </form>
    </main>
    </>
  )

}

export default App;