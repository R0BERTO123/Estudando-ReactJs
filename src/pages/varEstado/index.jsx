import './index.scss'
import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import lerNumber from '../utils/convesao';

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

    const [num1D,setNum1D]=useState(0)
    const [num2D,setNum2D]=useState(0)
    const [resD,setResD]=useState(0)

    




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

    function subtrair(){
        let divide = lerNumber(num1D) - lerNumber(num2D)
        setResD(divide)
    }





    return (
        <div className='pagina-varEstado pagina'>
            <div className='cabeçalho'>
                <h1>Variavel de Estado</h1>

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
                    <input type="text" value={num1D} onChange={e=> setNum1D(e.target.value)} />
                    <div>-</div>
                    <input type="text"value={num2D} onChange={e=> setNum2D(e.target.value)} />
                    <div>=</div>
                    <div>{resD}</div>
                    <button onClick={subtrair}>Subtrair</button>
                </div>

                
            </div>


        </div>

    )
}