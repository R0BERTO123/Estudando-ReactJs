import "./index.scss"
import { useState, useEffect } from "react";

export default function Task() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem("tarrefas"));
    if (dados) setTarefas(dados);
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  function adicionar() {
    if (!input) return;

    const nova = {
      id: Date.now(),
      texto: input,
      concluida: false
    };

    setTarefas([...tarefas, nova]);
    setInput("");
  }

  function excluir(id) {
    setTarefas(tarefas.filter(t => t.id !== id));
  }

  function toggle(id) {
    setTarefas(
      tarefas.map(t =>
        t.id === id ? { ...t, concluida: !t.concluida } : t
      )
    );
  }

  return (
    <div className="Task-Maneger">

      <div className="TaskAdd">

        <h1>Task Manager</h1>

        <input value={input}onChange={e => setInput(e.target.value)}/>
        <button onClick={adicionar}>Adicionar</button>

        {tarefas.map(t => (
          <div  className="Task-box" key={t.id}>
            <span
              style={{
                textDecoration: t.concluida ? "line-through" : "none"
              }}
            >
              {t.texto}
            </span>

            <button onClick={() => toggle(t.id)}>✔</button>
            <button onClick={() => excluir(t.id)}>❌</button>
            <button >✍</button>
          </div>
        ))}

      </div>

    </div>
  );
}