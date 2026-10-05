function Aluno({ nome, turma }) {
  return (
    <div className="aluno">
      <h2>{nome}</h2>
      <p>Turma: {turma}</p>
    </div>
  );
}

export default Aluno;