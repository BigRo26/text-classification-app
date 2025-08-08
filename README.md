# Text Classification App

A React-based frontend application for authenticating and classifying text as either AI-generated or human-written.

## Features

- Clean, modern UI with gradient background
- Responsive design that works on all devices
- Text input area for pasting or typing content
- Submit button with loading states
- Beautiful glassmorphism design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── App.js          # Main application component
├── App.css         # Application styles
├── index.js        # Application entry point
└── index.css       # Global styles

public/
└── index.html      # HTML template
```

## Usage

1. Open the application in your browser
2. Type or paste text into the text area
3. Click the "Submit" button to analyze the text
4. The application will show a loading state while processing

## Backend Integration

The current version includes a placeholder for backend integration. To connect to your text classification API:

1. Update the `handleSubmit` function in `App.js`
2. Replace the setTimeout with your actual API call
3. Handle the response and display results

## Technologies Used

- React 18
- CSS3 with modern features (backdrop-filter, gradients)
- Responsive design principles
- Modern JavaScript (ES6+)

## License

This project is open source and available under the MIT License. 