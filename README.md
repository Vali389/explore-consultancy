# Gamut Gurus - IT Training Institute Website

A modern, responsive multi-page website for Gamut Gurus, an IT training institute offering industry-focused courses with 100% placement support.

## Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-friendly navigation
- 🎯 Multi-page React application with React Router
- 📚 Course catalog with detailed course pages
- 💬 Testimonials carousel
- 📧 Contact form with Google Maps integration
- ✨ Smooth animations and transitions

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Vali389/explore-consultancy.git
cd explore-consultancy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
gamut-gurus-replica/
├── src/
│   ├── components/      # Reusable components (Navbar, Footer)
│   ├── pages/          # Page components (Home, Courses, About, Contact)
│   ├── data/           # Data files (courses.js)
│   ├── assets/         # Static assets
│   ├── App.jsx         # Main app component with routes
│   └── main.jsx        # Entry point
├── public/             # Public assets
└── package.json        # Dependencies and scripts
```

## Pages

- **Home** (`/`) - Landing page with hero section, featured courses, and testimonials
- **Courses** (`/courses`) - Complete course catalog
- **Course Detail** (`/course/:id`) - Individual course details with curriculum
- **About** (`/about`) - About the institute, mission, vision, and values
- **Contact** (`/contact`) - Contact form, location, and FAQ

## License

This project is private and proprietary.
