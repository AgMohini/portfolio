# Professional Portfolio Website

## Overview

This is a modern, responsive portfolio website built for Dr. Mohini Agarwal, showcasing her expertise in data science, machine learning, and academic research. The application serves as a professional showcase featuring her experience, projects, publications, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with JSON responses
- **Middleware**: Custom logging and error handling
- **Development**: Hot reload with Vite integration

### Database Architecture
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: Defined in shared/schema.ts with Zod validation
- **Migrations**: Managed through Drizzle Kit

## Key Components

### Frontend Components
1. **Navigation**: Sticky header with smooth scrolling navigation
2. **Hero Section**: Introduction with key metrics and call-to-action
3. **Technical Skills**: Interactive skill visualization
4. **Experience Timeline**: Professional journey with detailed descriptions
5. **Projects Portfolio**: Showcases machine learning projects with GitHub links
6. **Publications Research**: Academic publications with citation counts
7. **Education**: Academic background with visual elements
8. **Contact Form**: Interactive form with validation and submission

### Backend Components
1. **Routes**: Express routes for contact form submission
2. **Storage**: Abstract storage interface with in-memory implementation
3. **Validation**: Zod schema validation for form inputs
4. **Error Handling**: Centralized error handling middleware

### Shared Components
1. **Schema**: Database schema definitions with Zod integration
2. **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

### Contact Form Flow
1. User fills contact form with name, email, and message
2. Client validates input using Zod schema
3. Form data submitted to `/api/contact` endpoint
4. Server validates data and logs contact information
5. Success/error response sent back to client
6. Toast notification displays result to user

### Page Navigation
1. Single-page application with smooth scrolling between sections
2. Navigation component triggers scroll-to-element functionality
3. Responsive mobile menu with hamburger toggle

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Data and State
- **React Query**: Server state management and caching
- **React Hook Form**: Form validation and submission
- **Zod**: Runtime type validation and schema definition

### Database and Backend
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL database
- **Express**: Web application framework

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: JavaScript bundler for production builds

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React application to `dist/public`
2. **Backend**: ESBuild bundles server code to `dist/index.js`
3. **Static Assets**: Served from build output directory

### Environment Configuration
- **Development**: Uses Vite dev server with Express backend
- **Production**: Serves static files through Express with API routes
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build of frontend and backend
- `npm run start`: Production server
- `npm run db:push`: Push database schema changes

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon Database recommended)
- Environment variables for database connection
- Static file serving capability

The application is designed to be easily deployable on platforms like Replit, Vercel, or any Node.js hosting service with minimal configuration required.