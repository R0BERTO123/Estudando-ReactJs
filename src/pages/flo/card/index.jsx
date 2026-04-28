import "./"

export default function Cards() {
    return (
      <section className="cards">
        <h3>Descubra tudo sobre ela</h3>
  
        <div className="card-list">
          <div className="card blue">
            <span className="tag">Ela</span>
            <h2>O dia dela</h2>
            <p>26 de abril</p>
          </div>
  
          <div className="card light">
            <h2>Chance de engravidar</h2>
          </div>
  
          <div className="card purple">
            <span className="tag">Você</span>
            <h2>Momento conexão</h2>
          </div>
  
          <div className="card dark">
            <span className="tag">Flo+</span>
            <h2>QUIZ</h2>
          </div>
        </div>
      </section>
    )
  }