# Finance-Platform
CapitalFlow — AI-Powered Finance Management Platform

CapitalFlow is a full-stack web application that helps users securely track, analyze, and optimize wealth portfolios using real-time analytics and AI-driven recommendations. Built with modern tools (Next.js, Supabase, Prisma, Gemini AI, Clerk, Tailwind + shadcn/ui) and engineered for security and scalability (ArcJet API protection, Clerk auth, resilient DB patterns).

Features

Responsive dashboard with real-time portfolio visualization and performance charts

AI-powered, personalized financial recommendations (Gemini AI integration)
Secure authentication and role management via Clerk
Scalable, relational storage using Supabase (Postgres) + Prisma ORM
API protection and rate-limiting using ArcJet (or similar API gateway)
Automated email notifications and workflows using Resend API
Clean, accessible UI with Tailwind CSS and shadcn/ui components
CI/CD ready: optimized for Vercel (or any Node host) with production builds and performance tuning


Tech Stack

Frontend & Server: Next.js (App Router)
Styling & UI: Tailwind CSS, shadcn/ui
Authentication: Clerk
Database: Supabase (Postgres)
ORM: Prisma
AI / LLMs: Gemini AI (or configured LLM provider)
API Security: ArcJet (rate limiting, abuse protection)
Email: Resend API (or an SMTP provider)
Deployment: Vercel, Docker optional


Architecture Overview

Next.js handles server rendering and API routes for secure server-side operations and LLM orchestration.
Prisma abstracts DB access; migrations managed through Prisma CLI.
Supabase stores normalized user, portfolio, transaction, and analytics data.
Gemini AI is called from server-side functions to generate predictions and recommendations (LLM prompts live on server; no secrets exposed client-side).
Clerk manages user sessions and role claims.
ArcJet protects public APIs from abuse and adds rate limits & bot protection.
Resend handles transactional emails (report summaries, alerts, onboarding).
