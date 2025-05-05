[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/zJUqLkBR)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19187927)
# My Node and React App

This project is a simple application that consists of a Node.js server and a React client. The server handles API requests, while the client provides a user interface.

## Project Structure

```
Bug-Free-Sniffle
├── server
│   ├── index.js          # Entry point for the Node.js server
│   └── package.json      # Configuration file for the Node.js server
├── client
│   ├── src
│   │   ├── App.js        # Main React component
│   │   ├── index.js      # Entry point for the React application
│   │   └── components
│   │       └── ExampleComponent.js # Example functional component
│   ├── public
│   │   └── index.html    # Main HTML file for the React application
│   └── package.json      # Configuration file for the React client
└── README.md             # Documentation for the project
└── package.json          # Configuration file for the whole project
```

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- npm (version X.X.X)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd my-node-react-app
   ```

2. Install dependencies on root folder:

   ```
   npm install
   ```

### Running the Application

1. Start the app server and client:

   ```
   npm run start
   ```

### Usage

- The server will be running on `http://localhost:9000` (or the port specified in your server configuration).
- The React client will be running on `http://localhost:9010`.

You can access the application in your web browser at the client URL. The client will communicate with the server to fetch and display data as needed.


# Edits Made
The API endpoints I made were for current and alert. I copied the url from the weather api website placed them into the externalApiCalls class so they would be called. In index.js, I created the app.get functions for current and alert as well. Lastly, in App.js, I added the urls for the parameters in which the apis would be called.

How the application works is that there is a call being sent from the backend, the server, and it sends to the client. The server-side of the application is in charge of the api calls and the javascript functions have the api endpoints. The client-side is in charge of accessing those calls so they will be displayed in the browser. When the application is running, the user is asked to type in their zipcode, which a location parameter. For current, the current weather is displayed and for forecast, the forecast for that area is displayed. For weather alerts, however, the only time alerts appear is if there is an active weather alert for that region.