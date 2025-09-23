# 💄 Viviane Studio - Landing Page

Uma landing page moderna e elegante para o estúdio Viviane Studio, especializado em Hair Style e Make Up de alto padrão.

## ✨ Características

- **Design Responsivo**: Mobile-first, adaptável a todas as telas
- **Hero Section**: Carrossel em tela cheia com navegação automática
- **Repositório Central**: Todos os dados em um arquivo JSON único
- **Animações Suaves**: Transições elegantes e efeitos visuais
- **Paleta Sofisticada**: Cores elegantes (rose gold, champagne, preto)
- **Tipografia Premium**: Fontes que transmitem luxo e exclusividade
- **SEO Otimizado**: Metadados e estrutura adequada para mecanismos de busca

## 🗂️ Estrutura do Projeto

```
viviane-makeup/
├── app/
│   ├── layout.tsx          # Layout principal e metadados
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globais e cores customizadas
├── components/
│   ├── hero-carousel.tsx  # Carrossel da hero section
│   ├── services.tsx       # Seção de serviços
│   ├── products.tsx       # Seção de produtos
│   ├── videos.tsx         # Seção de vídeos
│   ├── contact.tsx        # Seção de contatos e redes sociais
│   ├── navigation.tsx     # Navegação fixa
│   ├── footer.tsx         # Rodapé
│   └── page-loader.tsx    # Tela de carregamento
├── data/
│   └── content.json       # 📋 ARQUIVO PRINCIPAL DE CONTEÚDO
├── types/
│   └── content.ts         # Tipos TypeScript
└── public/
    ├── hero/              # Imagens do carrossel
    ├── services/          # Imagens dos serviços
    ├── products/          # Imagens dos produtos
    └── videos/            # Thumbnails dos vídeos
```

## 📋 Como Editar o Conteúdo

### Arquivo Principal: `data/content.json`

Este é o **único arquivo** que você precisa editar para alterar todo o conteúdo da página:

#### 🎭 Hero Section (Carrossel)

```json
"hero": {
  "slides": [
    {
      "id": 1,
      "image": "/hero/slide1.jpg",
      "title": "Viviane Studio",
      "subtitle": "Transformando beleza em arte",
      "description": "Hair Style e Make Up de alto padrão para momentos únicos"
    }
  ]
}
```

#### 💼 Serviços

```json
"services": [
  {
    "id": 1,
    "name": "Hair Style",
    "description": "Cortes, escova, penteados...",
    "image": "/services/hair-style.jpg",
    "features": ["Cortes personalizados", "Coloração profissional"]
  }
]
```

#### 🛍️ Produtos

```json
"products": [
  {
    "id": 1,
    "name": "Base Líquida Premium",
    "description": "Cobertura natural e duradoura",
    "price": "R$ 89,90",
    "image": "/products/base-liquida.jpg",
    "category": "Base"
  }
]
```

#### 🎬 Vídeos

```json
"videos": [
  {
    "id": 1,
    "title": "Transformação Completa - Noiva",
    "thumbnail": "/videos/thumb1.jpg",
    "url": "https://www.youtube.com/embed/VIDEO_ID",
    "description": "Acompanhe uma transformação completa"
  }
]
```

#### 📱 Redes Sociais

```json
"socials": [
  {
    "name": "Instagram",
    "url": "https://instagram.com/vivianestudio",
    "icon": "instagram",
    "followers": "15.2K"
  }
]
```

#### 📞 Contatos

```json
"contacts": {
  "whatsapp": {
    "number": "+5511999999999",
    "message": "Olá! Gostaria de agendar um horário no Viviane Studio."
  },
  "phone": {
    "number": "+5511999999999",
    "display": "(11) 99999-9999"
  },
  "address": {
    "street": "Rua das Flores, 123",
    "neighborhood": "Jardins",
    "city": "São Paulo",
    "state": "SP",
    "zipcode": "01234-567"
  }
}
```

## 🖼️ Como Adicionar Imagens

### 1. Hero Section (Carrossel)

- **Pasta**: `public/hero/`
- **Formato**: JPG ou WebP
- **Tamanho**: 1920x1080 ou superior
- **Orientação**: Landscape (16:9)

### 2. Serviços

- **Pasta**: `public/services/`
- **Formato**: JPG ou WebP
- **Tamanho**: 600x400 ou superior
- **Orientação**: Landscape

### 3. Produtos

- **Pasta**: `public/products/`
- **Formato**: JPG ou WebP
- **Tamanho**: 400x400 ou superior
- **Orientação**: Quadrada (1:1)

### 4. Vídeos (Thumbnails)

- **Pasta**: `public/videos/`
- **Formato**: JPG ou WebP
- **Tamanho**: 480x360 ou superior
- **Orientação**: Landscape (16:9)

## 🚀 Como Executar o Projeto

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

A página estará disponível em: http://localhost:3000

### 3. Build para Produção

```bash
npm run build
npm start
```

## 🎨 Personalização de Cores

As cores podem ser alteradas no arquivo `app/globals.css`:

```css
:root {
  --color-rose-gold: #d4a574;
  --color-champagne: #f7e7ce;
  --color-dusty-rose: #d4a4a4;
  --color-nude: #e6d3c1;
  --color-pearl: #f5f5f0;
}
```

## 📱 Funcionalidades

### ✅ Implementadas

- [x] Carrossel automático com navegação manual
- [x] Navegação fixa com scroll suave
- [x] Seções responsivas para serviços, produtos e vídeos
- [x] Integração com WhatsApp e telefone
- [x] Links para redes sociais
- [x] Animações suaves (Framer Motion)
- [x] Botão flutuante do WhatsApp
- [x] Modal para visualização de vídeos
- [x] Footer completo com informações
- [x] Tela de carregamento elegante

### 🎯 Destaques

- **Alto Impacto Visual**: Design que transmite sofisticação e luxo
- **Facilidade de Edição**: Um arquivo JSON para todo o conteúdo
- **Performance**: Otimizado para carregamento rápido
- **SEO**: Estrutura adequada para mecanismos de busca
- **Conversão**: CTAs estratégicos para WhatsApp e telefone

## 📞 Suporte

Para dúvidas sobre edição de conteúdo ou customizações, consulte este README ou entre em contato com o desenvolvedor.

---

**Desenvolvido com ❤️ usando Next.js, TypeScript, Tailwind CSS e Shadcn UI**
