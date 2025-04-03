# API de Gestão de Estoque

## Descrição

Esta é uma API desenvolvida em **Node.js** com **Express.js** e **MongoDB** para o gerenciamento de estoque de produtos. Ela permite o cadastro de produtos, fornecedores e movimentação de estoque.

## Funcionalidades

- **Gerenciamento de Produtos**: Criar, listar, atualizar e excluir produtos.
- **Gerenciamento de Fornecedores**: Criar, listar, atualizar e excluir fornecedores.
- **Movimentação de Estoque**: Registrar entrada e saída de produtos.
- **Autenticação de Usuários**: Controle de acesso com **JWT** (futuro desenvolvimento).

## Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **dotenv** (variáveis de ambiente)
- **JWT** (para autenticação futura)

## Instalação

1. Clone este repositório:
   ```sh
   git clone https://github.com/seu-usuario/inventory-api.git
   cd inventory-api
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Crie um arquivo `.env` e defina a string de conexão do MongoDB:
   ```env
   MONGO_URI=sua-string-de-conexao
   PORT=5000
   ```
4. Inicie o servidor:
   ```sh
   npm start
   ```

## Estrutura do Projeto

```
inventory-api/
│── models/         # Modelos do MongoDB (Mongoose)
│── routes/         # Rotas da API
│── controllers/    # Lógica de cada rota
│── middlewares/    # Middleware de autenticação, validação, etc.
│── config/         # Configurações da aplicação
│── server.js       # Arquivo principal
│── .env            # Variáveis de ambiente
```

## Endpoints

### Produtos (`/api/produtos`)

- `POST /` - Criar produto
- `GET /` - Listar todos os produtos
- `PATCH /:id` - Atualizar produto
- `DELETE /:id` - Excluir produto

### Fornecedores (`/api/fornecedores`)

- `POST /supplier` - Criar fornecedor

- `GET /supplier` - Listar todos os fornecedores 

- `GET /supplier/:id` - Listar todos os fornecedores pelo ID

- `PATCH /supplier/:id` - Atualizar fornecedor

- `DELETE /supplier/:id` - Excluir fornecedor



## Melhorias Futuras

- Implementação de autenticação JWT.
- Criação de um histórico de movimentação de estoque.
- Dashboard com relatórios.

---

Desenvolvido por  Anderson Freire 🚀

