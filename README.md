Peterson Hub

The central portfolio landing page for showcasing AI tools, data projects, and professional background. Built with React, Vite, and Tailwind CSS.

🚀 Live Site

(Once deployed, paste your Azure Static Web App URL here, e.g., https://www.google.com/search?q=https://white-island-01234.azurestaticapps.net)

🛠️ Tech Stack

Framework: React (Vite)

Styling: Tailwind CSS v4

Icons: Lucide React

Deployment: Azure Static Web Apps (Free Tier)

💻 Local Setup

Clone the repository:

git clone [https://github.com/YourUsername/peterson-hub.git](https://github.com/YourUsername/peterson-hub.git)
cd peterson-hub


Install dependencies:

npm install


Run the development server:

npm run dev


Open http://localhost:5173 in your browser.

📦 Deployment Workflow

This project uses a Git-based workflow with branching strategies:

Develop: Make changes on the develop branch.

Test: Verify locally with npm run dev.

Push: Push changes to GitHub (git push origin develop).

Merge: Open a Pull Request on GitHub to merge develop into main.

Deploy: Azure Static Web Apps detects the change to main and automatically builds/deploys the live site.

📂 Project Structure

src/App.jsx: Main landing page logic, project data, and layout.

src/index.css: Global styles and Tailwind CSS v4 imports.

tailwind.config.js: Tailwind configuration.

postcss.config.js: PostCSS configuration for processing styles.