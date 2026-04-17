import "./index.scss";

import { Link } from "react-router-dom";
import Cabeçalho from "../../components/cabeçalho";

export default function Contato() {

    return (
        <div className="pagina-contato">
            <Cabeçalho
            titulo="Pagina Nerd"
            />

            <Link to={"/"}>
                <h1>🤓</h1>
            </Link>


        </div>
    )
}