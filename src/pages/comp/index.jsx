import Cabeçalho from "../../components/cabeçalho"
import Contador from "../../components/comtador"
import "./index.scss"

export default function Component() {

    return (
        <div className="page-Component">

            <Cabeçalho
                titulo="ReactJS | Components"
            />

            <div className="seçao">
                
                <Contador/>
                <Contador
                titulo="contador2"
                inicio = {0}
                fim ={15}
                />
            </div>
        </div>

    )
}