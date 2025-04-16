# Password Generator

A simple web-based password generator that allows users to create secure passwords based on customizable criteria. The application features a frontend built with HTML, CSS, and JavaScript, and a backend powered by Node.js and Express.

## Features
 
- Generate passwords of specified lengths (1 to 128 characters).
- Include options for uppercase letters, lowercase letters, numbers, and symbols.
- User-friendly interface for easy password generation.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Package Manager**: npm

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (includes npm)
- A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/))

### Steps to Set Up

1. **Clone the Repository** (or create a new directory):
   ```bash
   git clone <repository-url>
   cd password-generator

2. **Install Dependencies**:
   ```bash
   npm install express cors

3. **Create the Server**:
   - Create a file named `server.js` and add the backend code provided in the project.

4. **Create the Frontend**:
   - Create a file named `index.html` and add the frontend code provided in the project.

5. **Run the Backend Server**:
   ```bash
   node server.js

6. **Open the Frontend**:
   Open `index.html` in your web browser. You can use Live Server in VS Code for a better experience.

### Usage

- Enter the desired password length (between 1 and 128).
- Select the character types you want to include (uppercase, lowercase, numbers, symbols).
- Click the "Generate Password" button.
- The generated password will be displayed below the form.

