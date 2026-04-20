import "./index.scss"

export default function ItemMeta(p) {

    return (
        
            <li className="comp-item-meta">

                {p.item}
                &nbsp;
                <i onClick={() => p.removerMetas(p.pos)}>❌</i>
                &nbsp;
                <i onClick={() => p.editarMetas(p.pos)}>✍</i>


            </li>

       
    )
}