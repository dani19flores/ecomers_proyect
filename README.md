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

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to the local URL (usually `http://localhost:5173`).

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
