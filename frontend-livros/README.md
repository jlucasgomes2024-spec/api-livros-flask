# Catálogo de Livros — React + Vite

Frontend da atividade prática de Programação Web Coding.

## Como executar

1. Deixe a API Flask da primeira atividade em execução na porta 5000.
2. Abra um terminal nesta pasta.
3. Execute:

   ```bash
   npm install
   npm run dev
   ```

4. Abra o endereço indicado pelo Vite, normalmente `http://localhost:5173`.

## Integração

O botão **Buscar Livros** faz uma requisição GET para `/api/livros`.
O proxy configurado em `vite.config.js` encaminha a chamada para
`http://127.0.0.1:5000/livros`.

A API deve retornar um JSON em formato de lista, com objetos que contenham
os campos `id`, `titulo`, `autor` e `ano`. Exemplo de formato esperado:

```json
[
  {
    "id": 1,
    "titulo": "Dom Casmurro",
    "autor": "Machado de Assis",
    "ano": 1899
  }
]
```

Os livros acima são apenas um exemplo de estrutura. O frontend não possui
livros cadastrados: ele exibe os dados efetivamente recebidos da API.

Se a sua API usar nomes de campos diferentes, ajuste as propriedades
acessadas em `src/App.jsx` para corresponder ao JSON real.
