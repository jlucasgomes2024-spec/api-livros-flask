# API de Livros com Python e Flask

## Objetivo
Disponibilizar três livros por meio de uma rota HTTP GET, retornando os dados em JSON.

## Requisitos
Python 3 e pip instalados.

## Instalação

Crie e ative um ambiente virtual.

### Windows
```bash
python -m venv venv
venv\Scripts\activate
```

### Linux, macOS ou Termux
```bash
python -m venv venv
source venv/bin/activate
```

Instale o Flask:
```bash
pip install -r requirements.txt
```

## Execução
```bash
python app.py
```

## Rota
- Método: GET
- Endereço: http://127.0.0.1:5000/livros

A resposta contém três livros, cada um com id, titulo, autor e ano.

## Integração com React
O frontend pode consultar `/api/livros` usando o proxy do Vite. O proxy encaminha a requisição para `http://127.0.0.1:5000/livros`.
