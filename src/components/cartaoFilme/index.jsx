import "./index.scss"

export default function CartaoFilme(p){

    function c(){
    if(p.item.classificaçao === "L"){
        return "c-l"
    }
   else if(p.item.classificaçao === "6"){
        return "c-6"
    }
   else if(p.item.classificaçao === "12"){
        return "c-12"
    }
  else  if(p.item.classificaçao === "14"){
        return "c-14"
    }
  else  if(p.item.classificaçao === "16"){
        return "c-16"
    }
   else if(p.item.classificaçao === "18"){
        return "c-18"
    }
}
    return(

        
        <div className="comp-cartaoFilme">
            <img src={p.item.url} alt="" />

            {p.item.estreia !==""&&
            <div className="exibirInfo">
                <p>{p.item.destaque === true && "⭐"}Estreia {p.item.estreia}</p>
            </div>
            }
            

            <p>{p.item.nome}</p>
            <div className={"classsificaçao "+c()}> {p.item.classificaçao} </div>

         {p.exibirInfo === true}
            

            
            
        </div>
    )
}