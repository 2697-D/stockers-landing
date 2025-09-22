# shadcn/ui Demo Website

A comprehensive showcase of shadcn/ui components built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Beautiful, responsive design with gradient backgrounds and smooth animations
- 🧩 **shadcn/ui Components**: Showcase of Button, Card, Input, Badge, Calendar, and Separator components
- 📱 **Responsive**: Fully responsive design that works on all devices
- 🌙 **Dark Mode**: Built-in dark mode support with proper color schemes
- ⚡ **Interactive**: Interactive calendar and form components
- 🎯 **Accessible**: Built with accessibility in mind using Radix UI primitives

## Components Used

- **Button**: Various button styles and sizes
- **Card**: Feature cards with headers, content, and footers
- **Input**: Form inputs with proper styling
- **Badge**: Status badges and labels
- **Calendar**: Interactive date picker
- **Separator**: Visual dividers
- **Icons**: Lucide React icons throughout

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
my-app/
├── app/
│   ├── globals.css          # Global styles with shadcn/ui CSS variables
│   └── page.tsx            # Main homepage component
├── components/
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── badge.tsx
│       ├── separator.tsx
│       └── calendar.tsx
├── lib/
│   └── utils.ts            # Utility functions for shadcn/ui
└── package.json
```

## Customization

### Adding More Components

To add more shadcn/ui components:

1. Install the component using the shadcn/ui CLI:
```bash
npx shadcn@latest add [component-name]
```

2. Or manually create the component file in `components/ui/`

### Styling

The project uses Tailwind CSS with shadcn/ui's design system. Key files:

- `app/globals.css`: Contains CSS variables for theming
- `components/ui/*.tsx`: Individual component styles
- `lib/utils.ts`: Utility functions for class merging

### Color Scheme

The project supports both light and dark modes with CSS variables defined in `globals.css`. You can customize colors by modifying these variables.

## Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Re-usable components built with Radix UI
- **Lucide React**: Beautiful icon library
- **Radix UI**: Unstyled, accessible UI primitives

## Learn More

- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)

## License

MIT License - feel free to use this project as a starting point for your own applications!