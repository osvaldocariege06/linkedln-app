# 📱 Social Network App

Um aplicativo de rede social inspirado no LinkedIn, desenvolvido com **React Native** para o frontend e **Node.js + Fastify + Prisma + PostgreSQL** no backend.

## 🚀 Tecnologias Utilizadas

### **Frontend:**
- React Native (Expo)
- Zustand (Gerenciamento de Estado)
- React Navigation (Navegação)

### **Backend:**
- Node.js + Fastify (API Rápida e Escalável)
- Prisma (ORM para Banco de Dados)
- PostgreSQL (Banco de Dados Relacional)
- Docker (Gerenciamento de Banco de Dados)
- JWT (Autenticação Segura)

## 🎯 Funcionalidades Implementadas
✅ Autenticação JWT (Cadastro e Login)  
✅ Perfil de Usuário  
✅ Feed de Postagens (Texto e Imagem)  
✅ Mensagens Diretas (Chat em Tempo Real)  

## 📂 Estrutura do Projeto

### **Backend:**
```
backend/
│── src/
│   ├── modules/
│   │   ├── auth/         # Autenticação JWT
│   │   ├── users/        # Gerenciamento de usuários e perfis
│   │   ├── posts/        # CRUD de postagens (feed)
│   │   ├── messages/     # Chat em tempo real (WebSockets)
│   ├── config/           # Configuração de banco, JWT
│   ├── server.ts         # Inicialização do Fastify
│── prisma/
│   ├── schema.prisma     # Modelos do banco de dados
│── docker-compose.yml    # Configuração do PostgreSQL com Docker
│── .env                  # Variáveis de ambiente (DB_URL, JWT_SECRET)
│── package.json          # Dependências
```

## ⚙️ Instalação e Configuração

### **1️⃣ Clone o Repositório**
```sh
git clone https://github.com/seu-usuario/social-network-app.git
cd social-network-app
```

### **2️⃣ Configure o Banco de Dados com Docker**
```sh
pnpm docker:up
```

### **3️⃣ Instale as Dependências**
```sh
pnpm install
```

### **4️⃣ Configure as Variáveis de Ambiente**
Crie um arquivo `.env` e adicione:
```env
DATABASE_URL=postgresql://admin:secret@localhost:5432/social_network
JWT_SECRET=supersecretkey
```

### **5️⃣ Execute as Migrations do Prisma**
```sh
pnpm prisma:migrate
```

### **6️⃣ Inicie o Servidor**
```sh
pnpm dev
```
O backend estará rodando em **http://localhost:3000** 🚀

## 🔥 Próximas Melhorias
- 🔄 Melhorar o Design do Feed
- 📢 Notificações Push para Mensagens
- 📍 Geolocalização e Conexões Próximas
- 📸 Upload de Imagens no Perfil

💡 Contribuições são bem-vindas! Sinta-se à vontade para abrir um **Pull Request** ou **Issue** no repositório. 🚀

