# Prompt: Landing Page Homenagem Dia das Mulheres - Maria Larissa

Atue como um Especialista em Frontend (React/Next.js). Desenvolva uma landing page de página única (SPA) comemorativa para o Dia Internacional das Mulheres, dedicada a **Maria Larissa**.

## Stack Técnica:
- **Framework:** Next.js 14+ (App Router)
- **Estilização:** Tailwind CSS
- **Componentes:** shadcn/ui
- **Animações:** Framer Motion
- **Ícones:** Lucide React

## Identidade Visual (Configuração Obrigatória):
- **Cores (Tailwind Config):**
  - background: `#E1CEBB`
  - primary (títulos): `#B96A80`
  - text (corpo): `#213445`
- **Tipografia (Google Fonts via next/font):**
  - Títulos: 'Fleur De Leah' (cursive)
  - Corpo: 'Caveat' (handwriting)

## Estrutura e Conteúdo do Site:

### 1. Hero Section (Impacto Animado)
- **Texto Principal:** "Maria Larissa: A essência de toda força e delicadeza."
- **Subtexto:** "Neste Dia Internacional das Mulheres, celebro a mulher extraordinária que você é."
- **Animação:** O título deve surgir com um `layoutId` ou um `spring` suave. O fundo deve ter elementos flutuantes (como pétalas ou formas orgânicas) usando Framer Motion.

### 2. Galeria de Momentos (Seção de Imagens)
- Crie um grid responsivo ou um carrossel elegante usando os cards do shadcn.
- Aplique um efeito de `hover` com `scale` e `fade-in` quando as imagens entrarem no viewport (`whileInView`).

### 3. Manifesto/Homenagem (Texto Bacana)
- Use o componente `TextGenerateEffect` ou apenas `motion.p` com `staggerChildren`.
- **Conteúdo Sugerido:** "Larissa, sua presença transforma o cotidiano em poesia. Sua força não precisa de gritos; ela se manifesta na sua resiliência, no seu sorriso e na forma como você ilumina quem está ao seu redor. Hoje o mundo celebra as mulheres, mas meu coração celebra você todos os dias."

### 4. Rodapé
- Um detalhe simples: "Com amor, para a minha mulher incrível."

## Requisitos de Código:
1. Configure o arquivo `tailwind.config.js` com as cores personalizadas.
2. Utilize `framer-motion` para:
   - **Fade-in** nas seções ao rolar a página.
   - **Slide-up** nos textos da Hero.
   - Um botão de "Saiba mais" ou "Surpresa" com efeito de **Spring bounce**.
3. Garanta que as fontes sejam importadas corretamente no `layout.tsx`.
4. O design deve ser minimalista, clean e focado na leitura.