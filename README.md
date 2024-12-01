# Product Management Application
This is a simple React-based Product Management application that allows users to create, edit, delete, and view products. The application uses Axios for HTTP requests and interacts with a mock API to manage product data. It provides functionality to perform CRUD operations (Create, Read, Update, Delete) on products.

## Features:
- Create a Product: Allows users to add a new product with information like name, description, price, and image URL.
- View Products: Displays a list of products with the option to view and edit details.
- Edit a Product: Users can update existing products with new information.
- Delete a Product: Users can delete a product from the list.

## Technologies Used:
- React: JavaScript library for building user interfaces.
- Axios: HTTP client for making API requests.
- React Router: For routing between different pages like Home, Create, and Edit.

## Project Structure
- src/: Contains all the React components and application logic.
- components/
   - Home.js: Displays a list of products with options to edit and delete.
   - Create.js: Form to create a new product.
   - Edit.js: Form to edit an existing product.
- App.js: The main component where routing is set up.
- index.js: Entry point of the React application.

## Usage
- Home Page: Displays a list of all products. You can edit or delete each product.
- Create Product Page: Use the form to create a new product. Fields include product name, price, description, and image URL.
- Edit Product Page: After selecting a product from the Home Page, you can edit its information and update it.

## Notes
- The application is designed to be simple and easy to understand, ideal for learning and small projects.
