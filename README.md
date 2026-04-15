# Ultima3D Store

Loja online de produtos únicos impressos em 3D. Decoração, acessórios, organizadores e presentes personalizados — todos feitos sob medida com tecnologia de última geração.

## Sobre

**Ultima3D Store** é uma marca premium de produtos personalizados em impressão 3D. Transformamos ideias em peças reais, com qualidade profissional e acabamento impecável.

### Nossa Identidade

- **Posicionamento**: Marca premium de criação personalizada em 3D
- **Mensagem**: "Sua ideia, agora em forma real"
- **Paleta**: Roxo neon (#7B3FE4) e preto (#0D0D0D)
- **Arquétipo**: Criador + Artesão Tecnológico

## Tecnologias

- **Framework**: [Next.js 16](https://nextjs.org) com App Router
- **Linguagem**: TypeScript 5
- **Estilização**: Tailwind CSS v4
- **Linting**: Biome
- **Implantação**: Vercel

## Scripts

```bash
npm run dev      # Servidor de desenvolvimento (http://localhost:3000)
npm run build    # Build de produção
npm run start    # Servidor de produção
npm run lint     # Verificar erros de código
npm run format   # Formatar código automaticamente
```

## Estrutura

```
src/
├── app/
│   ├── layout.tsx      # Layout raiz
│   ├── page.tsx       # Página inicial
│   └── products/
│       └── page.tsx   # Página de produtos (em construção)
├── components/
│   ├── header.tsx     # Cabeçalho com navegação
│   ├── hero.tsx       # Seção hero
│   ├── categories.tsx  # Categorias de produtos
│   ├── products.tsx    # Grid de produtos
│   ├── why-us.tsx     # Diferenciais da marca
│   └── footer.tsx     # Rodapé
└── styles/
    └── globals.css    # Estilos globais
```

## Desenvolvimento

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Inicie o servidor: `npm run dev`
4. Acesse [http://localhost:3000](http://localhost:3000)

## Recursos

- Design responsivo para desktop e mobile
- SEO otimizado com Metadata API
- Componentes reutilizáveis
- Código formatado com Biome
- Acessibilidade com ARIA labels

---

© 2026 Ultima3D Store — Peças personalizadas em impressão 3D
