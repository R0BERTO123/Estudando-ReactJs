import './index.scss'
import Cabeçalho from '../../components/cabeçalho'

import axios from 'axios'
import { useState } from 'react'

export default function ChamadaAPI() {

    const [cep, setCep] = useState("")
    const [L, setL] = useState("")

    const[nomeFilme,setNomeFilme]=useState("")
    const[listaFilme,setListaFilme]=useState([])

    async function consultarCep() {
        let url = "http://viacep.com.br/ws/" + cep + "/json/"

        let resp = await (axios.get(url))
        let dados = resp.data
        let msg = dados.logradouro + ", " + dados.bairro + ", " + dados.uf
        setL(msg)
    }

    async function buscarFilme(){
        let url = "http://www.omdbapi.com?apikey=9bd6428c&s="+nomeFilme

        let resposta = await(axios.get(url))
       let  dados = resposta.data
       if(dados.Response ==="False"){
        alert("Nao achou")
       
        return
       }
        let mensagem = dados.Search
        setListaFilme(mensagem)
        
    }

    return (
        <div className='page-chamadaAPI pagina'>
            <Cabeçalho
                titulo="Chamando API"
            />
            <div className='seçao'>
                <h1>API correio</h1>

                <div>
                    <input type="text" placeholder='digite o Cep' value={cep} onChange={e => setCep(e.target.value)} />
                    <button onClick={consultarCep}>Buscar</button>
                </div>
                <p>
                    {L}
                </p>
            </div>
            <div className='seçao filme'>
                <h1>API OMDB</h1>

                <div className='emtradas'>
                    <input type="text" placeholder='nome do filme' value={nomeFilme} onChange={e=>setNomeFilme(e.target.value)}/>
                    <button onClick={buscarFilme}>Buscar</button>

                </div>

                
                    <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Filme</th>
                            <th>Ano</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listaFilme.map((item,pos)=>
                        <tr key={pos}>
                        <th>{item.imdbID}</th>
                        <th>{item.Title}</th>
                        <th>{item.Year}</th>

                        </tr>
                        )}
                        
                    </tbody>
                </table>
                    
                

            </div>

        </div>
    )
}