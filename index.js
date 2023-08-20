
const pathLibrary = require('path');
const expressFramework = require('express');
const environmentVariables = require('dotenv').config();
const serverPort = process.env.PORT || 5000;

const webApp = expressFramework();

// Enable JSON and URL-encoded body parsing
webApp.use(expressFramework.json());
webApp.use(expressFramework.urlencoded({ extended: false }));

// Set the directory for static files such as CSS, JS, and images
webApp.use(expressFramework.static(pathLibrary.join(__dirname, 'public')));

// Define the OpenAI route by including the respective routing file
webApp.use('/openai', require('./routes/openaiRoutes'));

// Start the server on the defined port
webApp.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`));
