# Welcome to BEWEAR👋

Uma plataforma moderna de e-commerce especializada em calçados e moda urbana, desenvolvida com as mais recentes tecnologias web.

## 📋 Sobre o Projeto

O **BEWEAR** é uma aplicação completa de e-commerce que oferece uma experiência de compra fluida e moderna. A plataforma permite aos usuários navegar por produtos, adicionar itens ao carrinho, realizar pagamentos seguros e gerenciar seus pedidos.

### ✨ Principais Funcionalidades

- 🛒 **Carrinho de Compras** - Sistema completo de adição, remoção e atualização de produtos
- 👤 **Autenticação de Usuários** - Login/registro via email/senha e Google OAuth
- 💳 **Pagamentos Seguros** - Integração com Stripe para processamento de pagamentos
- 📦 **Gestão de Pedidos** - Acompanhamento completo do histórico de compras
- 🏠 **Endereços de Entrega** - Cadastro e gestão de múltiplos endereços
- 📱 **Design Responsivo** - Interface otimizada para desktop e dispositivos móveis

## 🛠️ Tecnologias Utilizadas

### Frontend

<img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" width="20"/>**[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para construção da interface
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis e customizáveis
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones

### Backend & Database

- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM type-safe para TypeScript
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Better Auth](https://www.better-auth.com/)** - Sistema de autenticação moderno

### Pagamentos & Integrações

- **[Stripe](https://stripe.com/)** - Processamento de pagamentos
- **Google OAuth** - Autenticação social

### Estado & Formulários

- **[TanStack Query](https://tanstack.com/query)** - Gerenciamento de estado do servidor
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários
- **[Zod](https://zod.dev/)** - Validação de esquemas TypeScript

### UI/UX

- **[Sonner](https://sonner.emilkowal.ski/)** - Notificações toast
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Suporte a temas

## 🏗️ Arquitetura do Projeto

```
src/
├── actions/              # Server Actions para operações do lado servidor
├── app/                  # App Router do Next.js (páginas e rotas)
├── components/           # Componentes React reutilizáveis
│   ├── common/          # Componentes específicos da aplicação
│   └── ui/              # Componentes de interface base (Radix UI)
├── db/                   # Configuração do banco de dados e schemas
├── helpers/              # Funções utilitárias
├── hooks/                # Custom hooks React
│   ├── mutations/       # Hooks para mutações (TanStack Query)
│   └── queries/         # Hooks para consultas (TanStack Query)
├── lib/                  # Configurações e utilitários
└── providers/            # Providers React (Query Client, etc.)
```

### Padrões Arquiteturais

- **Server Actions**: Operações do servidor integradas ao Next.js
- **Custom Hooks**: Abstração da lógica de estado e side effects
- **Component Composition**: Componentização modular e reutilizável
- **Type Safety**: Tipagem completa com TypeScript e Zod
- **Separation of Concerns**: Separação clara entre UI, lógica e dados

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 18 ou superior)
- **PostgreSQL** (versão 12 ou superior)
- **npm** ou **yarn**

### 1. Clone o Repositório

```bash
git clone https://github.com/lucasadsr/bewear.git
cd bewear
```

### 2. Instale as Dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/bewear"

# Auth
BETTER_AUTH_SECRET="your-secret-key"
BETTER_AUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your-stripe-publishable-key"
```

### 4. Configure o Banco de Dados

```bash
# Execute as migrações
npm run db:push

# Popule o banco com dados de exemplo (opcional)
npm run db:seed
```

### 5. Execute o Projeto

```bash
# Modo de desenvolvimento
npm run dev

# Build para produção
npm run build
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## 📁 Scripts Disponíveis

```bash
npm run dev      # Inicia o servidor de desenvolvimento
npm run build    # Cria a build de produção
npm run start    # Inicia o servidor de produção
npm run lint     # Executa o linting do código
npm run db:push  # Aplica mudanças no schema do banco
npm run db:seed  # Popula o banco com dados de exemplo
```

## 🔐 Configuração da Autenticação

### Google OAuth

1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Habilite a Google+ API
4. Configure as credenciais OAuth 2.0
5. Adicione as URLs de callback autorizadas:
   - `http://localhost:3000/api/auth/callback/google` (desenvolvimento)
   - `https://yourdomain.com/api/auth/callback/google` (produção)

## 💳 Configuração do Stripe

1. Crie uma conta no [Stripe](https://stripe.com/)
2. Obtenha suas chaves de API no dashboard
3. Configure os webhooks para processar eventos de pagamento
4. Adicione as variáveis de ambiente correspondentes

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/amazing-feature`)
3. Commit suas mudanças (`git commit -m 'Add some amazing feature'`)
4. Push para a branch (`git push origin feature/amazing-feature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Lucas Ribeiro** - [GitHub](https://github.com/lucasadsr)

---

<p align="center">
  Desenvolvido com ❤️ por Lucas Ribeiro
</p>
