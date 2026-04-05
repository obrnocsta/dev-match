# 💘 DevMatch - A Dating App for Developers

Um aplicativo inovador que conecta desenvolvedores através de perfis criativos e compatibilidade técnica. **DevMatch** é um projeto educacional construído com **NestJS** para demonstrar as melhores práticas de arquitetura backend moderna.

## 📚 Sobre o Projeto

DevMatch é uma API REST que simula uma plataforma de encontros especializada para programadores. O projeto foi desenvolvido com o objetivo de aprender e explorar os conceitos fundamentais do **NestJS**, como:

- **Módulos** - Organização da aplicação em módulos reutilizáveis
- **Controllers** - Roteamento e manipulação de requisições HTTP
- **Services** - Lógica de negócio encapsulada e reutilizável
- **DTOs** - Data Transfer Objects para validação de dados
- **Guards** - Proteção de rotas com lógica customizada
- **Pipes** - Transformação e validação de dados
- **Testes** - Testes unitários e end-to-end com Jest

## 🚀 Características Principais

### ✨ Funcionalidades

- **Listar Perfis** - Explore todos os perfis de desenvolvedores
- **Visualizar Perfil** - Consulte detalhes específicos de um perfil
- **Criar Perfil** - Registre-se com seu nome e descrição
- **Atualizar Perfil** - Edite informações do seu perfil
- **Deletar Perfil** - Remova seu perfil com proteção por guard

### 🔐 Segurança

- Validação de UUIDs em rotas parametrizadas
- Guards customizados para operações sensíveis (DELETE)
- Validação automática de DTOs com `class-validator`
- Tratamento de erros estruturado com exceções HTTP

### 👥 Perfis de Exemplo

O projeto inclui 10 perfis de desenvolvedores diversos:

- **Kai** - JavaScript/TypeScript specialist
- **Brianna Watts** - Full-Stack Developer
- **Arjun** - Python Data Pipeline Engineer
- **Elena** - Frontend/UX Engineer
- **Marcus** - DevOps Engineer
- **Sofia** - Mobile Developer
- **Liam** - Go Backend Specialist
- **Nina** - Security Engineer
- **Diego** - Full-Stack Developer
- **Yuki** - AI/ML Engineer

## 🛠️ Stack Tecnológico

```
TypeScript   83.5%  ████████████████████
Shell         9.4%  ██
JavaScript    7.1%  █
```

### Dependências Principais

```json
{
  "@nestjs/common": "^11.0.1",
  "@nestjs/core": "^11.0.1",
  "@nestjs/platform-express": "^11.0.1",
  "class-transformer": "^0.5.1",
  "class-validator": "^0.15.1",
  "rxjs": "^7.8.1"
}
```

### Ferramentas de Desenvolvimento

- **TypeScript** 5.7.3 - Tipagem estática
- **Jest** 30.0.0 - Framework de testes
- **ESLint** 9.18.0 - Análise de código
- **Prettier** 3.4.2 - Formatação de código

## 📁 Estrutura do Projeto

```
dev-match/
├── src/
│   ├── profiles/                # Módulo de Perfis
│   │   ├── dto/
│   │   │   ├── create-profile.dto.ts
│   │   │   └── update-profile.dto.ts
│   │   ├── profiles.controller.ts
│   │   ├── profiles.service.ts
│   │   ├── profiles.guard.ts
│   │   ├── profiles.module.ts
│   │   ├── profiles.controller.spec.ts
│   │   ├── profiles.service.spec.ts
│   │   └── profiles.guard.spec.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   ├── app.module.ts
│   └── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── package.json
├── tsconfig.json
├── tsconfig.build.json
├── eslint.config.mjs
├── .prettierrc
├── nest-cli.json
└── httpie.sh               # Exemplos de requisições HTTP
```

## 🚀 Como Usar

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/obrnocsta/dev-match.git
cd dev-match

# Instale as dependências
npm install
```

### Executar a Aplicação

```bash
# Modo desenvolvimento (com hot-reload)
npm run start:dev

# Modo produção
npm run build
npm run start:prod

# Modo debug
npm run start:debug
```

A aplicação estará disponível em `http://localhost:3000`

## 📡 Endpoints da API

### Listar Todos os Perfis

```bash
GET /profiles
```

**Resposta (200 OK):**
```json
[
  {
    "id": "80c2acb5-ac9d-4a0b-95af-26c5ec8e94a4",
    "name": "Marcus",
    "description": "DevOps engineer focused on reliability..."
  },
  ...
]
```

### Obter um Perfil Específico

```bash
GET /profiles/:id
```

**Exemplo:**
```bash
GET /profiles/80c2acb5-ac9d-4a0b-95af-26c5ec8e94a4
```

**Resposta (200 OK):**
```json
{
  "id": "80c2acb5-ac9d-4a0b-95af-26c5ec8e94a4",
  "name": "Marcus",
  "description": "DevOps engineer focused on reliability, observability, and infrastructure..."
}
```

### Criar um Novo Perfil

```bash
POST /profiles
Content-Type: application/json

{
  "name": "Bruno",
  "description": "Node.js developer who thrives on async flows and event loops..."
}
```

**Resposta (201 Created):**
```json
{
  "id": "a1b2c3d4-e5f6-47a8-b9c0-d1e2f3a4b5c6",
  "name": "Bruno",
  "description": "Node.js developer who thrives on async flows and event loops..."
}
```

### Atualizar um Perfil

```bash
PUT /profiles/:id
Content-Type: application/json

{
  "name": "Jessica",
  "description": "Java developer who loves robust architectures..."
}
```

**Resposta (200 OK):**
```json
{
  "id": "09263fdd-f702-4075-9df6-e4bf5642509e",
  "name": "Jessica",
  "description": "Java developer who loves robust architectures..."
}
```

### Deletar um Perfil

```bash
DELETE /profiles/:id
```

**Resposta (204 No Content)** - Sem corpo de resposta

### Exemplos com HTTPie

O arquivo `httpie.sh` contém exemplos de requisições:

```bash
# Listar perfis
http GET http://localhost:3000/profiles

# Buscar perfil específico
http GET http://localhost:3000/profiles/80c2acb5-ac9d-4a0b-95af-26c5ec8e94a4

# Criar novo perfil
http POST http://localhost:3000/profiles name="Bruno" description="..."

# Atualizar perfil
http PUT http://localhost:3000/profiles/09263fdd-f702-4075-9df6-e4bf5642509e name="Jessica" description="..."

# Deletar perfil
http DELETE http://localhost:3000/profiles/5d10c608-96d1-444d-b49a-5da162426bd4
```

## 🧪 Testes

### Executar Todos os Testes

```bash
npm test
```

### Modo Watch (Executa testes ao salvar arquivos)

```bash
npm run test:watch
```

### Cobertura de Testes

```bash
npm run test:cov
```

### Testes End-to-End

```bash
npm run test:e2e
```

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run build` | Compila o projeto TypeScript |
| `npm run format` | Formata código com Prettier |
| `npm start` | Inicia a aplicação |
| `npm run start:dev` | Inicia em modo desenvolvimento (com watch) |
| `npm run start:debug` | Inicia em modo debug com inspector ativo |
| `npm run start:prod` | Inicia a versão compilada |
| `npm run lint` | Executa ESLint e corrige problemas |
| `npm test` | Executa testes unitários |
| `npm run test:watch` | Executa testes em modo watch |
| `npm run test:cov` | Gera relatório de cobertura |
| `npm run test:debug` | Executa testes em modo debug |
| `npm run test:e2e` | Executa testes end-to-end |

## 🎓 Conceitos de Aprendizado

Este projeto demonstra:

### Arquitetura Modular

- Separação clara de responsabilidades
- Módulo de Perfis encapsulado e reutilizável
- Padrão MVC adaptado para NestJS

### Validação de Dados

```typescript
// DTOs com validadores
export class CreateProfileDto {
  @IsString()
  @Length(3, 100)
  name: string;

  @IsString()
  description: string;
}
```

### Guards e Segurança

```typescript
@Delete(':id')
@UseGuards(ProfilesGuard)  // Proteção customizada
@HttpCode(HttpStatus.NO_CONTENT)
remove(@Param('id', ParseUUIDPipe) id: UUID) { ... }
```

### Pipes e Transformação

```typescript
@Get(':id')
findOne(@Param('id', ParseUUIDPipe) id: UUID) { ... }
// ParseUUIDPipe valida e transforma o UUID
```

## 📈 Próximas Evoluções

### Phase 1️⃣ - Persistência de Dados

- [ ] Integrar banco de dados PostgreSQL com TypeORM
- [ ] Criar entidades para Profile, User, Match
- [ ] Implementar migrations para evolução do schema
- [ ] Adicionar índices para otimizar queries

### Phase 2️⃣ - Autenticação e Autorização

- [ ] Implementar JWT para autenticação
- [ ] Criar módulo de usuários com hash de senha
- [ ] Adicionar roles e permissões (Admin, User)
- [ ] Proteger endpoints sensíveis com @UseGuards(JwtAuthGuard)

### Phase 3️⃣ - Features de Encontros

- [ ] Criar sistema de "likes" e "matches"
- [ ] Implementar algoritmo de compatibilidade
- [ ] Adicionar chat em tempo real com WebSockets
- [ ] Notificações push para novos matches

### Phase 4️⃣ - Frontend

- [ ] Desenvolver SPA com React/Vue.js
- [ ] Criar páginas: Home, Perfil, Descoberta, Mensagens
- [ ] Integração com API REST do backend
- [ ] UI responsiva e mobile-first

### Phase 5️⃣ - Melhorias e DevOps

- [ ] Documentação OpenAPI/Swagger
- [ ] Containerização com Docker
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Deploy na cloud (AWS, Heroku, etc.)
- [ ] Monitoring e logging (Winston, DataDog)
- [ ] Rate limiting e throttling
- [ ] Testes de carga com K6

### Phase 6️⃣ - Features Avançadas

- [ ] Busca e filtros avançados
- [ ] Recomendações baseadas em IA
- [ ] Sistema de badges e gamificação
- [ ] Analytics e dashboard admin
- [ ] Relatórios de segurança

## 📚 Recursos Úteis

### Documentação Oficial

- [NestJS Documentation](https://docs.nestjs.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Jest Testing Framework](https://jestjs.io/)
- [Class Validator](https://github.com/typestack/class-validator)

### Tutoriais Relacionados

- [NestJS Course - Beginner](https://docs.nestjs.com/first-steps)
- [Building REST APIs with NestJS](https://docs.nestjs.com/techniques/routing)
- [Testing in NestJS](https://docs.nestjs.com/fundamentals/testing)

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se livre para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

## 📝 Licença

Este projeto está licenciado sob a licença UNLICENSED - veja o arquivo `package.json` para detalhes.

## 👤 Autor

**obrnocsta**

- GitHub: [@obrnocsta](https://github.com/obrnocsta)
- Projeto: [dev-match](https://github.com/obrnocsta/dev-match)

## 💬 Suporte

Se tiver dúvidas ou sugestões, abra uma [issue](https://github.com/obrnocsta/dev-match/issues) ou entre em contato!

---

**Desenvolvido com ❤️ para aprender NestJS**
