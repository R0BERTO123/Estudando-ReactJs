import { useState, useEffect} from "react"
import Cabeçalho from "../../components/cabeçalho"
import "./index.scss"
import lerNumber from "../utils/convesao"

export default function Efeitos(){

    const[mençao,setMençao]=useState("")
    const[situaçao,setSituaçao]=useState("-")

    const[n1,setN1]=useState("0")
    const[n2,setN2]=useState("0")
    const[n3,setN3]=useState("0")
    const[media,setMedia]=useState("0")
    const[Msituacao,setMsituacao]=useState("")



    useEffect(()=>{
        avaliarMençao()

    },[mençao])

    useEffect(()=>{
        calcularMedia()
    },[n1,n2,n3])

    useEffect(()=>{
        meidiaSit()
    },[media])

    function avaliarMençao(){
        if(mençao === "P"){
            setSituaçao("Planejamento Satisfatório")
        }
       else if(mençao === "S"){
            setSituaçao("Satisfatório")
        }
       else if(mençao === "NS"){
            setSituaçao("Não Satisfatório")
        }
        else{
            setSituaçao("Invalido")
        }
    }

    function calcularMedia(){
        let media = (lerNumber(n1)+lerNumber(n2)+lerNumber(n3))/3
        setMedia(media.toFixed(1))
    }

    function meidiaSit(){
        if(media>=6.0){
            setMsituacao("Aprovado")
        }
        else if(media<6.0){
            setMsituacao("Reprovado")
        }
    }

    return(
        <div className="page-efeito pagina">
            <Cabeçalho
            titulo = "Efeitos"
            />

            <div className="seçao">
                <h1>Situação Aluno</h1>

                <div className="sit-aluno">
                    <div>{situaçao}</div>
                    <div>
                    <label htmlFor="">Menção = </label>
                    <input type="text" value={mençao}  onChange={e=>setMençao(e.target.value)}/>
                    </div>
                   
                </div>


            </div>

            <div className="seçao">
                <h1>Notas Aluno</h1>
                <div className="notas-aluno">
                    <div className="entradas">
                        <input type="text"  value={n1} onChange={e=>setN1(e.target.value)}/>
                        <input type="text" value={n2} onChange={e=>setN2(e.target.value)}/>
                        <input type="text" value={n3} onChange={e=>setN3(e.target.value)}/>

                    </div>
                    <div>
                        <label htmlFor="" className="media">Media</label>
                        <div>{media}</div>
                    </div>
                    <div>
                        <label htmlFor="" className="media-situaçao">Sit.</label>
                        <div>{Msituacao}</div>
                    </div>
                     
                </div>

            </div>

        </div>
    )
}