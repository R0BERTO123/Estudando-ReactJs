
import './index.scss';
import Cabeçalho from '../../components/cabeçalho';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App pagina">

     <Cabeçalho titulo="Estudando React!!!!!"/>

      <div className='caixa seçao'>
        <h2>Estudando React</h2>


        <input type="text" />
        <br /> <br />
        <select>

          <option>item 1</option>
          <option>item 2</option>

        </select>
        <br /> <br />
        <button>clique aqui</button>
        

        <ul>
          <li>
            <Link to='/contato'>ir para nerds </Link>
          </li>
          <li>
            <Link to='/gatos'>ir para gatos</Link>
          </li>
          <li>
            <Link to='/eventos'>ir para eventos</Link>
          </li>
          <li>
            <Link to={'/contador'}>ir para variavel de estado</Link>
          </li>
          <li>
            <Link to={"/task"}>ir para Task</Link>
          </li>
          <li>
            <Link to={"/component"}>ir para components</Link>
          </li>
          <li>
            <Link to={"/catalogo"}>Ir para catalogo de filmes</Link>
          </li>
          <li>
          <Link to={"/renderizaçao"}>Ir para renderizaçao</Link>
          </li>
          <li>
            <Link to={"/efeitos"}>Ir para efeito</Link>
          </li>
        </ul>


      </div>



    </div>
  );
}


