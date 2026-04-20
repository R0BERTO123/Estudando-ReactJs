import Cabeçalho from "../../components/cabeçalho"
import Contador from "../../components/comtador"
import ItemMeta from "../../components/itemMeta"
import PlanosAtuais from "../../components/planosAtuais"
import "./index.scss"
import { useState } from "react"

export default function Component() {

    const [novaMeta, setNovaMeta] = useState("")
    const [listaMeta, setListaMeta] = useState([])

    const [editando, setEditando] = useState(-1)


    const [meuPlano, setMeuPlano] = useState("")
    const [situaçao, setSituaçao] = useState("")
    const [corIdentificaçao, setCorIdentificaçao] = useState("")
    const [listaPlanos, setListaPlanos] = useState([])

    const [editandoPlanos, setEditandoPlanos] = useState(-1)


    function adicionarMetas() {
       
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

    function adicionarPlanos(pos) {

        if(meuPlano!=="" && situaçao !=='' && corIdentificaçao!==""){

       if (editandoPlanos === -1) {

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
       



       else {
           let novosPlanos = [...listaPlanos]

           novosPlanos[editandoPlanos] = {
               plano: meuPlano,
               situaçao: situaçao,
               cor: corIdentificaçao
           }

           setListaPlanos(novosPlanos)
           setEditandoPlanos(-1)

           setMeuPlano("")
           setSituaçao("")
           setCorIdentificaçao("")
       }
   }





   }

   function exluirPlano(pos) {
       listaPlanos.splice(pos, 1)
       alert("Você excluiu o item na posiçao " + pos)
       setListaPlanos([...listaPlanos])

   }

   function editarPlano(pos) {
       setMeuPlano(listaPlanos[pos].plano)
       setSituaçao(listaPlanos[pos].situaçao)
       setCorIdentificaçao(listaPlanos[pos].cor)
       setEditandoPlanos(pos)

   }

    

    return (
        <div className="page-Component pagina">

            <Cabeçalho
                titulo="ReactJS | Components"
            />

            <div className="seçao">
                <h1>Trasformando o contador em component</h1>
                
                <Contador/>
                <Contador
                titulo="contador2"
                inicio = {0}
                fim ={15}
                />
            </div>


            <div className='seçao metas'>
                <h1>Trasformando os items da lista de metas em components</h1>

                <div>
                    <input type="text" placeholder='Digite suas metas' onKeyUp={teclaApertada} value={novaMeta} onChange={e => setNovaMeta(e.target.value)} />
                    <button onClick={adicionarMetas} onKeyUp={teclaApertada}>Adicionar Metas</button>
                </div>

                <ul>
                    {listaMeta.map((item, pos) =>
                       <ItemMeta
                       item = {item}
                       editarMetas ={editarMetas}
                       removerMetas={removerMetas}
                       pos={pos}
                       />
                    )}
                </ul>

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

                    <PlanosAtuais
                    pos= {pos}
                    item ={item}
                    exluirPlano = {exluirPlano}
                    editarPlano ={editarPlano}
                    />

                    )}


                </div>

            </div>


        </div>

    )
}