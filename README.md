# Energy Efficiency Dashboard

A modern React application designed to visualize real-time energy data and assist users in scheduling eco-friendly EV charging sessions.

## Author: Michał Ryz

## Deployment

App is deployed at: https://codibly-frontend-michalryz.onrender.com/

***ensure the backend is running by visiting: https://codibly-backend-pljr.onrender.com/swagger-ui/index.html and wait until the app has started***

## Tech Stack

* **React** + **TypeScript**
* **Vite** - Build tool
* **Tailwind CSS** - Styling and responsive design
* **Recharts** - Data visualization (Donut charts)
* **Vitest** - Unit and Integration testing

## Features

* **Interactive Dashboard:** Displays daily energy mix forecasts using responsive charts.
* **EV Charging Calculator:** Allows users to input charging duration and retrieves the optimal low-carbon time window from the backend.
* **Atomic Design:** Built with reusable UI components (Cards, Buttons, Badges).
* **Robust Error Handling:** Visual feedback for API errors and loading states.

## Getting Started

### Prerequisites
* Node.js (v18 or higher)
* NPM

### Installation

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Start the development server:
    ```bash
    npm run dev
    ```

3.  Run tests:
    ```bash
    npm run test
    ```

## Environment Variables

Create a `.env` file in the root directory if connecting to a custom backend URL:

```env
VITE_API_URL=http://localhost:8080
