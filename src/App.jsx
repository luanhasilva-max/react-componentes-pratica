import Titulo from "./components/Titulo";
import Aluno from "./components/Aluno";
import Nota from "./components/Nota";
import Produto from "./components/Produto";
import "./App.css";

function App() {
  return (
    <main className="container">

      <Titulo />

      <section>
        <h2>Alunos</h2>

        <Aluno
          nome="Carlos"
          turma="Desenvolvimento de Sistemas"
        />

        <Aluno
          nome="Ana"
          turma="Desenvolvimento de Sistemas"
        />

        <Aluno
          nome="Pedro"
          turma="Desenvolvimento de Sistemas"
        />
      </section>

      <section>
        <h2>Notas</h2>

        <Nota disciplina="React" nota={8.5} />
        <Nota disciplina="JavaScript" nota={9} />
        <Nota disciplina="HTML e CSS" nota={7.5} />
      </section>

      <section>
        <h2>Produtos</h2>

        <div className="produtos">

          <Produto
            nome="Teclado Mecânico"
            descricao="Teclado com iluminação RGB"
            preco={250}
            disponivel={true}
          />

          <Produto
            nome="Mouse"
            descricao="Mouse sem fio"
            preco={120}
            disponivel={true}
          />

          <Produto
            nome="Headset"
            descricao="Headset gamer com microfone"
            preco={180}
            disponivel={false}
          />

          <Produto
            nome="Monitor"
            descricao="Monitor Full HD de 24 polegadas"
            preco={850}
            disponivel={true}
          />

        </div>
      </section>

    </main>
  );
}

export default App;