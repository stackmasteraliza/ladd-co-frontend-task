# Ladd & Co. — Frontend Test Task

Pixel-accurate implementation of the Ladd & Co. home page, built from the provided Figma design.

**Live Preview:** [View on Vercel](#) <!-- Replace with your deployed URL -->

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 4 |
| Components | shadcn/ui (New York style) |
| Icons | Lucide React |
| Package Manager | pnpm |

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

```bash
npm install -g pnpm
```

### Installation

```bash
# Clone the repository
git clone https://github.com/stackmasteraliza/ladd-co-frontend-task.git
cd ladd-co-frontend-task

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## Project Structure

```
├── app/
│   ├── globals.css        # Global styles & Tailwind imports
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── navbar/            # Navigation bar
│   ├── hero-section.tsx
│   ├── mission-section.tsx
│   ├── services-section.tsx
│   ├── clients-section.tsx
│   ├── footer.tsx
│   └── ...                # Other page sections
├── dummydata/             # Static content / mock data
├── public/assets/         # Images and static assets
└── types/                 # TypeScript type definitions
```

---

## Design Reference

Figma: [Ladd & Co. Test Task](https://www.figma.com/design/gLI4D1hBqg89CnjhgaY56A/Ladd---Co.-%7C-Test-task)

---

## Deployment

Deployed on Vercel. To deploy your own instance:

1. Push the repository to GitHub.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no additional configuration required.
4. Click **Deploy**.
