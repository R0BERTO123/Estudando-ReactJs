import './index.scss'
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import lerNumber from '../utils/convesao';

import CalcularValorIngresso from '../service/ingresso';

export default function VarEstado() {
    const [contador, setContador] = useState(0);
    const [tituloS2, setTituloS2] = useState("Oi")
    const [tituloS3, setTituloS3] = useState("Escolha um item")
    const [tituloS4, setTituloS4] = useState(false)
    const [tituloS5, setTituloS5] = useState('oi')
    const [descricaoS5, setDescricaoS5] = useState('')

    const [num1S, setNum1S] = useState(0)
    const [num2S, setNum2S] = useState(0)
    const [resS, setResS] = useState(0)

    const [num1D, setNum1D] = useState(0)
    const [num2D, setNum2D] = useState(0)
    const [resD, setResD] = useState(0)

    const [quantidade, setQuantidade] = useState(0)
    const [meia, setMeia] = useState(false)
    const [cupom, setCupom] = useState(0)
    const [totalIngresso, setTotalIngresso] = useState(0)


    const [novaMeta, setNovaMeta] = useState("")
    const [listaMeta, setListaMeta] = useState([])

    const [editando, setEditando] = useState(-1)


    const [meuPlano, setMeuPlano] = useState("")
    const [situaçao, setSituaçao] = useState("")
    const [corIdentificaçao, setCorIdentificaçao] = useState("")
    const [listaPlanos, setListaPlanos] = useState([])

    const[editandoPlanos,setEditandoPlanos]=useState(-1)



    const sixseven = new Audio('/assets/audio/67.mp3')


    useEffect(() => {
        if (contador === 67) {
            confetti({
                particleCount: 150,
                spread: 100,
                origin: { y: 0.6 }
            });

            const audio = new Audio('/assets/audio/67.mp3');
            audio.play();
        }
    }, [contador]);

    //let contador = 0;

    function Mais() {

        if (contador < 100) {
            setContador(contador + 1)

        }

        //contador =  contador+1
    }

    function Menos() {

        if (contador > 0) {
            setContador(contador - 1)
        }

        // contador = contador-1

    }

    function alterarTituloS2(e) {
        let novoValor = e.target.value
        setTituloS2(novoValor)
    }

    function alterarTituloS3(e) {
        let novoValor = e.target.value
        setTituloS3(novoValor)
    }

    function alterarTituloS4(e) {
        let novoValor = e.target.checked
        setTituloS4(novoValor)
    }

    function somar() {
        let soma = lerNumber(num1S) + lerNumber(num2S)
        setResS(soma)
    }

    function subtrair() {
        let divide = lerNumber(num1D) - lerNumber(num2D)
        setResD(divide)
    }


    function calcularIngresso() {
        setTotalIngresso(CalcularValorIngresso())

    }


    function adicionarMetas() {
        //listaMeta.push(novaMeta)

        if (novaMeta !== "") {

            if (editando === -1) {

                setListaMeta([...listaMeta, novaMeta])
                setNovaMeta("")
            }
            else {
                listaMeta[editando] = novaMeta
                setListaMeta([...listaMeta])
                setNovaMeta("")
                setEditando(-1)
            }
        }

    }

    function teclaApertada(e) {
        if (e.key === "Enter") {
            adicionarMetas()
        }
    }

    function removerMetas(pos) {
        listaMeta.splice(pos, 1)
        alert("Você removeu o item na posiçao " + pos,)
        setListaMeta([...listaMeta])
    }

    function editarMetas(pos) {
        setNovaMeta(listaMeta[pos])
        setEditando(pos)
    }

    function adicionarPlanos() {

        if(editandoPlanos === -1){
        let novoPlano = {
            plano: meuPlano,
            situaçao: situaçao,
            cor: corIdentificaçao
        }
        setListaPlanos([...listaPlanos, novoPlano])

        setMeuPlano("")
        setSituaçao("")
        setCorIdentificaçao("")
        }

        //else{

       // }

       

        


    }

    function exluirPlano(pos) {
        listaPlanos.splice(pos, 1)
        alert("Você excluiu o item na posiçao " + pos)
        setListaPlanos([...listaPlanos])

    }

   // function editarPlano(pos){
        

    //}


    return (
        <div className='pagina-varEstado pagina'>
            <div className='cabeçalho'>
                <h1>Variavel de Estado</h1>

            </div>

            <div className='seçao planos'>
                <h1>Meus planos atuais</h1>

                <div className='entrada'>
                    <input type="text" placeholder='Meu plano aqui' value={meuPlano} onChange={e => setMeuPlano(e.target.value)} />
                    <input type="text" placeholder='Situaçao do plano aqui' value={situaçao} onChange={e => setSituaçao(e.target.value)} />
                    <input type="text" placeholder='Cor de indentificaçao' value={corIdentificaçao} onChange={e => setCorIdentificaçao(e.target.value)} />
                    <button onClick={adicionarPlanos}>Adicionar Plano</button>
                </div>

                <div className="lista">

                    {listaPlanos.map((item, pos) =>

                        <div className='planta' key={pos}>

                            <div className='cor' style={{ backgroundColor: item.cor }}>&nbsp;</div>
                            <h1>{item.plano} </h1>
                            <h2>{item.situaçao}</h2>

                            <div className='editarExcluir'>
                                <div onClick={() => exluirPlano(pos)}>❌</div>
                                <div>✍</div>

                            </div>
                        </div>

                    )}


                </div>

            </div>


            <div className='seçao metas'>
                <h1>Metas para fazer</h1>

                <div>
                    <input type="text" placeholder='Digite suas metas' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)} />
                    <button onClick={adicionarMetas} onKeyUp={teclaApertada}>Adicionar Metas</button>
                </div>

                <ul>
                    {listaMeta.map((item, pos) =>
                        <li key={pos}>

                            {item}
                            &nbsp;
                            <i onClick={() => removerMetas(pos)}>❌</i>
                            &nbsp;
                            <i onClick={() => editarMetas(pos)}>✍</i>


                        </li>
                    )}
                </ul>

            </div>

            <div className='seçao ingresso'>
                <h1>venda de ingresso</h1>
                <div className='entrada'>
                    <div>
                        <label htmlFor="">Quantidade :</label>
                        <input type="text" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Meia entrada:</label>
                        <input type="checkbox" value={meia} onChange={e => setMeia(e.target.checked)} />
                    </div>
                    <div>
                        <label htmlFor="">Cupom:</label>
                        <input type="text" value={cupom} onChange={e => setCupom(e.target.value)} />
                    </div>

                    <div>
                        <button onClick={calcularIngresso}>Calcular</button>
                    </div>

                    <hr />
                    <div>
                        O total é R$ {totalIngresso}
                    </div>


                </div>

            </div>

            <div className='seçao'>
                <h1>contador</h1>

                <div className='cont'>
                    <button onClick={Mais}>+</button>

                    <div className={`numero ${contador === 67 ? 'destaque' : ''}`}>
                        {contador === 67 ? "✋ 67 🤚" : contador}
                    </div>

                    <button onClick={Menos}>-</button>
                </div>

            </div>

            <div className='seçao'>
                <h1>{tituloS2}</h1>
                <input type="text" value={tituloS2} onChange={alterarTituloS2} />
            </div>

            <div className='seçao'>
                <h1>{tituloS3}</h1>
                <select name="" id="" onChange={alterarTituloS3}>
                    <option value="">Selecione</option>
                    <option value="Java">Java</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="C#">C#</option>
                </select>
            </div>

            <div className='seçao'>
                <h1>Programar e lindezinha? {tituloS4 ? "Sim" : "Não"}</h1>
                <input type="checkbox" checked={tituloS4} onChange={alterarTituloS4} /> ⬅
            </div>

            <div className='seçao'>
                <h1>{tituloS5}</h1>
                <input type="text" value={descricaoS5} onChange={e => setDescricaoS5(e.target.value)} />
                <button onClick={() => setTituloS5(descricaoS5)}>Selecione</button>
            </div>

            <div className='seçao'>

                <h1>Calculadora</h1>
                <div className='entrada'>
                    <input type="text" value={num1S} onChange={e => setNum1S(e.target.value)} />
                    <div>+</div>
                    <input type="text" value={num2S} onChange={e => setNum2S(e.target.value)} />
                    <div>=</div>
                    <div>{resS}</div>
                    <button onClick={somar}>Somar</button>
                </div>

                <div className='entrada'>
                    <input type="text" value={num1D} onChange={e => setNum1D(e.target.value)} />
                    <div>-</div>
                    <input type="text" value={num2D} onChange={e => setNum2D(e.target.value)} />
                    <div>=</div>
                    <div>{resD}</div>
                    <button onClick={subtrair}>Subtrair</button>
                </div>


            </div>



        </div>

    )
}