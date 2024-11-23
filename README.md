# Sport Pulse

Sport Pulse is a web application built with React, TypeScript, and Vite. It provides real-time updates on live sports events, team news, standings, and more.

## Table of Contents

- [Installation](#installation)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the dependencies, run:

```bash
npm install
```

## Scripts

- **`dev`**: Starts the development server.
- **`build`**: Builds the project for production.
- **`lint`**: Runs ESLint to check for linting errors.
- **`preview`**: Previews the production build.

You can run these scripts using:

npm run <script>

## Project Structure
gitignore
.idea/
[eslint.config.js](http://_vscodecontentref_/1)
[index.html](http://_vscodecontentref_/2)
[package.json](http://_vscodecontentref_/3)
public/
[README.md](http://_vscodecontentref_/4)
src/
    App.tsx
    assets/
    components/
        common/
        layout/
        pages/
    context/
        appContext.tsx
        teamPageContext.tsx
    hooks/
    index.css
    main.tsx
    services/
    store/
    styles/
    theme/
        theme.ts
    utils/
        dateFormatter.ts
    vite-env.d.ts
[tsconfig.app.json](http://_vscodecontentref_/5)
[tsconfig.json](http://_vscodecontentref_/6)
[tsconfig.node.json](http://_vscodecontentref_/7)
[vite.config.ts](http://_vscodecontentref_/8)

## Features

- **Live Events**: Real-time updates on live sports events.
- **Team News**: Latest news about your favorite teams.
- **Standings**: Current standings of teams in various leagues.
- **Responsive Design**: Optimized for both desktop and mobile devices.


## Usage

### Contexts

- **`AppContext`**: Provides global state management for the application.
- **`TeamPageContext`**: Manages state specific to the team page.

### Components

- **Common Components**: Shared components like `LiveEvents`, `TeamBar`, `TeamNews`, etc.
- **Layout Components**: Layout components like `Header`, `Footer`, etc.
- **Page Components**: Specific pages like `Home`, `TeamPage`, `NewsPage`, etc.

### Utilities

- **`dateFormatter`**: Utility function to format dates.

## Theming

- **Custom Theme Configuration**: Using Material-UI's `createTheme`.