import './index.scss'
import Cabeçalho from '../../components/cabeçalho';
export default function Eventos() {


    function clicou() {
        alert("CLICOU CLICOU")
    }

    function Moveu() {
        alert("MOVEU MOVEU")
    }

    function Aletrou(e) {
        let novoValor = e.target.value;

        if (novoValor == "oxi") {
            alert("Oxi")
        }
        else {
            alert("ALTEROU ALTEROU para " + novoValor)
        }

    }

    function AlteruCheck (e){
        let novoValor = e.target.checked
        alert("ALTEROU ALTEROU para " + novoValor)
    }

    return (
        <div className='pagina-eventos pagina'>

            <Cabeçalho 
            titulo="Eventos"
            />

            <div className='seçao'>

                <h1>Olá seja bem-vindo</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, illum ut amet at exercitationem corrupti doloribus a laudantium ex, doloremque ducimus consectetur tempora repellendus quidem, rem nostrum! Perferendis, maxime tenetur.</p>

                <input onChange={Aletrou} type="text" placeholder='Digite algo' />

                <select>
                    <option value="">Item A </option>
                    <option value="">Item B</option>
                </select>

                <input type="checkbox" /> Opção 1
                <input type="checkbox" /> Opção 2

                <input onChange={AlteruCheck} type="radio" name='gpo' /> Opção 1
                <input type="radio" name='gpo' /> Opção 2

                <button onClick={clicou}>Click</button>


            </div>

        </div>
    )
}