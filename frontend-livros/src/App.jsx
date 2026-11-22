import { useState } from 'react';
import './App.css';

function App() {
  const [livros, setLivros] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState('');
  const [consultou, setConsultou] = useState(false);

  async function buscarLivros() {
    setCarregando(true);
    setErro('');
    setConsultou(true);

    try {
      const resposta = await fetch('/api/livros');

      if (!resposta.ok) {
        throw new Error(`A API respondeu com o status ${resposta.status}`);
      }

      const dados = await resposta.json();

      if (!Array.isArray(dados)) {
        throw new Error('O formato recebido da API não é uma lista de livros.');
      }

      setLivros(dados);
    } catch (error) {
      setLivros([]);
      setErro(
        'Não foi possível buscar os livros. Confira se a API Flask está em execução e se a rota GET /livros está funcionando.'
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <main className="container">
      <header className="cabecalho">
        <span className="etiqueta">LIVRARIA</span>
        <h1>Catálogo de Livros</h1>
        <p>Consulte os livros disponíveis no catálogo.</p>
      </header>

      <button
        className="botao-buscar"
        onClick={buscarLivros}
        disabled={carregando}
      >
        {carregando ? 'Buscando...' : 'Buscar Livros'}
      </button>

      {carregando && (
        <p className="mensagem carregando" role="status">
          Carregando livros...
        </p>
      )}

      {erro && (
        <p className="mensagem erro" role="alert">
          {erro}
        </p>
      )}

      {!carregando && !erro && consultou && livros.length === 0 && (
        <p className="mensagem">A API não retornou livros.</p>
      )}

      {livros.length > 0 && (
        <section className="lista-livros" aria-label="Livros encontrados">
          {livros.map((livro, indice) => (
            <article className="livro" key={livro.id ?? indice}>
              <div className="livro-topo">
                <span className="livro-id">ID: {livro.id}</span>
                <span className="ano">{livro.ano}</span>
              </div>
              <h2>{livro.titulo}</h2>
              <p><strong>Autor:</strong> {livro.autor}</p>
              <p><strong>Ano de publicação:</strong> {livro.ano}</p>
            </article>
          ))}
        </section>
      )}

      <footer>Atividade prática — Programação Web Coding</footer>
    </main>
  );
}

export default App;
