# Peterson Hub

The central portfolio landing page for showcasing AI tools, data projects, and professional background. 

**Live Site:** [https://www.petersonhub.com](https://www.petersonhub.com)

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS v4
* **CMS:** Sanity.io (Headless CMS)
* **Icons:** Lucide React
* **Deployment:** Azure Static Web Apps (Frontend) + Sanity Cloud (Content)

## 📂 Project Structure

This repository uses a monorepo-style structure:

* **`/peterson-hub`** → The React Frontend (Website)
* **`/peterson-cms`** → The Sanity Studio (Content Management System)

## 🚀 Local Setup

To run the project locally, you need two terminal windows open (one for the site, one for the CMS).

### 1. Start the CMS (Backend)
```bash
cd peterson-cms
npm install  # Only first time
npm run dev