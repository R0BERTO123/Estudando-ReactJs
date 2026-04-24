import Cabeçalho from "../../components/cabeçalho"
import CartaoFilme from "../../components/cartaoFilme"
import "./index.scss"
import { useState } from "react"

export default function CatalogoDeFilmes() {

    const [nomeFilme, setNomeFilme] = useState("")
    const [classificaçao, setClassificaçao] = useState("")
    const [url, setUrl] = useState("")
    const [listaCatalogo, setListaCatalogo] = useState([])
    const[estreia,setEstreia]=useState("")
    const[destaque,setDestaque]=useState(false)



    function adicionarFilme() {
        if(nomeFilme === "" || classificaçao ==="" || url ===""){
          //  alert("erro")
            return;
        }
        let novoCatalogo = {
            nome: nomeFilme,
            classificaçao: classificaçao,
            url: url,
            estreia: estreia,
            destaque:destaque
        }
        setListaCatalogo([...listaCatalogo, novoCatalogo])
        setNomeFilme("")
        setClassificaçao("")
        setUrl("")
        setEstreia("")
        setDestaque(false)

    }

    function teste(){
        setDestaque(true)
    }
    return (
        <div className="page-catalogoDeFilmes pagina">

            <Cabeçalho
                titulo="Catalogo de Filmes"
            />

            <div className="seçao filmes">

                <h1>Adicionar no Catalogo</h1>

                <input type="text" placeholder="Nome do filme" value={nomeFilme} onChange={e => setNomeFilme(e.target.value)} />
                <input type="text" placeholder="Classificaçao" value={classificaçao} onChange={e => setClassificaçao(e.target.value)} />
                <input type="text" placeholder="Url capa" value={url} onChange={e => setUrl(e.target.value)} />

                <input type="text" placeholder="Filme em estreia?" value={estreia} onChange={e=>setEstreia(e.target.value)}/>

                <div>
                    <input type="checkbox" value={destaque} onClick={teste}/>
                    <label htmlFor="">Destaque?</label>
                </div>

                <button onClick={adicionarFilme}>Adicionar</button>
                
                <div className="lista-filme">
                    {listaCatalogo.map((item, pos) =>

                        <CartaoFilme
                           item={item}
                          
                          
                        />
                    )}
                </div>








            </div>


        </div>
    )
}