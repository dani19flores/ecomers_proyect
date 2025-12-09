# E-commerce Project

A modern e-commerce application built with **React**, **TypeScript**, and **Vite**. This project demonstrates a functional shopping cart, product listing utilizing the Fake Store API, and a responsive design using Sass.

## Features

-   **Product Catalog**: Fetches and displays real-time product data from [Fake Store API](https://fakestoreapi.com/).
-   **Shopping Cart**:
    -   Add products to the cart.
    -   Remove items from the cart.
    -   View total items in the header.
-   **Responsive Design**: Mobile-friendly interface with a toggleable menu and cart sidebar.
-   **Loading States**: Visual feedback while data is being fetched.

## Technologies Used

-   **Frontend**: React 19
-   **Language**: TypeScript
-   **Build Tool**: Vite
-   **Styling**: Sass (SCSS)
-   **State Management**: React Hooks (useState, useEffect)

## Getting Started

Follow these steps to explore the project locally.

### Prerequisites

Ensure you have Node.js installed on your machine.

### Installation

1.  Clone the repository (if applicable) or navigate to the project folder:
    ```bash
    cd Proyecto-ecomers
    ```

2.  Install the required dependencies:
    ```bash
    npm install
    ```

### Running the Project

To start the development server and view the application in your browser:

1.  Run the development script:
    ```bash
    npm run dev
    ```

2.  Open your browser and navigate to the local URL shown in the terminal (usually `http://localhost:5173`).

### Building for Production

To build the application for production deployment:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
├── components/      # UI Components (Header, Banner, ProductList, Cart)
├── App.tsx          # Main application logic and state management
├── main.tsx         # Entry point
├── types.ts         # TypeScript definitions
└── ...
```

## API

This project uses the [Fake Store API](https://fakestoreapi.com/) for product data.
