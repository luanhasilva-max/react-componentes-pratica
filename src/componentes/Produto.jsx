function Produto({ nome, descricao, preco, disponivel }) {
  return (
    <div className="produto">
      <h3>{nome}</h3>

      <p>{descricao}</p>

      <strong>R$ {preco.toFixed(2)}</strong>

      <p className={disponivel ? "disponivel" : "indisponivel"}>
        {disponivel ? "Disponível" : "Indisponível"}
      </p>

      <button>Comprar</button>
    </div>
  );
}

export default Produto;