
import './index.scss';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1>oii</h1>

      <ul>
        <li>
          <Link to={'/contato'}>ir para os nerds </Link>
        </li>
      </ul>
    </div>
  );
}


