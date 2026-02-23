# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

FastIn is a LinkedIn-clone web app built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and shadcn/ui. Currently uses in-memory mock data (no database or auth yet). The goal is to be a blazing fast LinkedIn wrapper.

## Commands

- `bun dev` — Start dev server (port 3000) - Assume this is running already for you.
- `bun run build` — Production build
- `bun run lint` — ESLint (flat config with core-web-vitals + typescript)
- No test framework configured yet

## Architecture

### Routing (App Router)

- `app/layout.tsx` — Root layout with ThemeProvider, Geist fonts
- `app/(main)/layout.tsx` — Main layout with sticky Navbar
- `app/(main)/page.tsx` — Feed/home page (`/`)
- `app/(main)/search/page.tsx` — Search with tabs (`/search?q=...`)
- `app/(main)/profile/[slug]/page.tsx` — Dynamic profile pages

### Component Organization (`components/`)

- `ui/` — shadcn/ui primitives (Card, Button, Avatar, Tabs, etc.)
- `layout/` — Navbar, NavLinks, ThemeToggle
- `shared/` — Reusable components like UserAvatar
- `feed/`, `profile/`, `search/` — Feature-specific components

### Data Layer (`lib/`)

- `lib/data/users.ts` and `lib/data/posts.ts` — Mock data arrays
- `lib/data/index.ts` — Query functions (getUsers, getUserBySlug, getPosts, searchUsers, searchPosts, etc.)
- `lib/types.ts` — TypeScript interfaces (User, Post, Experience, Education)
- `lib/utils.ts` — `cn()` helper (clsx + tailwind-merge)

### Styling

- Tailwind CSS v4 with `@tailwindcss/postcss` plugin
- shadcn/ui (new-york style, RSC-enabled, neutral base color)
- CSS variables in oklch color space defined in `app/globals.css`
- Dark mode via next-themes with class strategy (`attribute="class"`)
- Use `cn()` from `lib/utils` for conditional class merging

### Key Conventions

- Path alias: `@/*` maps to project root
- shadcn/ui components import from `@/ui/*` (alias configured in components.json)
- `"use client"` only on interactive components (ThemeToggle, NavLinks, SearchInput)
- File naming: kebab-case for files, PascalCase for components
- External images: DiceBear avatars from `api.dicebear.com` (SVG, configured in next.config.ts)
