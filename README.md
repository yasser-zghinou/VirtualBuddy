# **Virtual Buddy AI**

## **Prerequisites**

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can install them by following the instructions on the official Node.js website.

## **Using Git Large File Storage (LFS)**

Git LFS is an extension for Git that replaces large files with text pointers in your Git repository, while storing the file contents on a remote server. It's particularly useful when working with large files such as images, audio files, videos, datasets, and others. Follow the instructions in the document to install and initialize Git LFS.

## **Setting Up the Environment**# **Virtual Buddy AI**

## **Prerequisites**

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can install them by following the instructions on the official Node.js website.

## **Using Git Large File Storage (LFS)**

Git LFS is an extension for Git that replaces large files with text pointers in your Git repository, while storing the file contents on a remote server. It's particularly useful when working with large files such as images, audio files, videos, datasets, and others. Follow the instructions in the document to install and initialize Git LFS.

## **Setting Up the Environment**

You will need to set up a Python environment and install necessary Python packages. These include Flask for creating the web server, Transformers for using the Falcon-7B model, and Torch for the underlying computations.

## **Back End and API**

The backend of the application is built using Flask. An **`/api/ask`** endpoint is created to handle POST requests. The question is extracted from the request's JSON payload. The bot is initialized and the question is processed, generating an answer and relevant documents. The response is then returned as JSON. Make sure to install Flask and any other required dependencies in your back-end environment.

## **Front End**

The front end of the application is built using React. The **`chatbot.js`** file contains the code for the chatbot interface, which includes a function to make a request to the backend API using the fetch function. The response data will be processed accordingly, whether it's an error or a successful response.

## **Running the Application**

You can run the script, and your Flask app will be available at **http://localhost:8080/api/ask**. Now you can fetch this endpoint from your React front-end using fetch or any other HTTP library.

## **Error Handling**

The application includes error handling to catch any exceptions that may occur during the processing of the question. If an error occurs, it will be caught, and the response will include an 'error' key with a description of the error.

## **Validation**

The application includes a validation step to check if the question is valid (i.e., not empty). If the question is invalid, the response will include an 'error' key indicating the invalid question.

Please note that this is a basic structure and you may need to add more sections based on your specific project needs, such as "Installation", "Usage", "Contributing", "License", and "Contact".

## **Fetching API**

You can place the code provided in the document in a function or component within your React app. When you call the **`askQuestion`** function with a question as the argument, it will make a request to the backend API using the fetch function. The response data will be processed accordingly, whether it's an error or a successful response. Make sure to adjust the URL **`http://localhost:8080/api/ask`** to match the endpoint of your backend API.

## **Front-End Implementation**

Feel free to integrate the fetch code into your React components where you want to interact with the backend and display the results to the user. You can update the UI based on the response received from the backend API. The document provides a detailed explanation of the front-end implementation using Material-UI components.

## **Chatbot Component**

The chatbox is wrapped inside a Box component, which allows for flexible layout and spacing. Each message is rendered inside a nested Box component. The Box component that wraps each message has additional styles defined inline using the **`sx`** prop. The input field for typing messages is a TextField component from Material-UI. The send button is a Button component with the **`variant="contained"`** and **`color="primary"`** props, which give it a filled appearance with a primary color scheme.

## **Running the Application**

To run the application, use the command **`python3 app.py`**. This will start the Flask server and the application will be available at **`http://localhost:8080/api/ask`**.

## **Troubleshooting**

If you encounter any issues while running the application, please contact anyone in the team via Slack.# **Virtual Buddy AI**

## **Prerequisites**

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your system. You can install them by following the instructions on the official Node.js website.

## **Using Git Large File Storage (LFS)**

Git LFS is an extension for Git that replaces large files with text pointers in your Git repository, while storing the file contents on a remote server. It's particularly useful when working with large files such as images, audio files, videos, datasets, and others. Follow the instructions in the document to install and initialize Git LFS.

## **Setting Up the Environment**

You will need to set up a Python environment and install necessary Python packages. These include Flask for creating the web server, Transformers for using the Falcon-7B model, and Torch for the underlying computations.

## **Back End and API**

The backend of the application is built using Flask. An **`/api/ask`** endpoint is created to handle POST requests. The question is extracted from the request's JSON payload. The bot is initialized and the question is processed, generating an answer and relevant documents. The response is then returned as JSON. Make sure to install Flask and any other required dependencies in your back-end environment.

## **Front End**

The front end of the application is built using React. The **`chatbot.js`** file contains the code for the chatbot interface, which includes a function to make a request to the backend API using the fetch function. The response data will be processed accordingly, whether it's an error or a successful response.

## **Running the Application**

You can run the script, and your Flask app will be available at **http://localhost:8080/api/ask**. Now you can fetch this endpoint from your React front-end using fetch or any other HTTP library.

## **Error Handling**

The application includes error handling to catch any exceptions that may occur during the processing of the question. If an error occurs, it will be caught, and the response will include an 'error' key with a description of the error.

## **Validation**

The application includes a validation step to check if the question is valid (i.e., not empty). If the question is invalid, the response will include an 'error' key indicating the invalid question.

Please note that this is a basic structure and you may need to add more sections based on your specific project needs, such as "Installation", "Usage", "Contributing", "License", and "Contact".

## **Fetching API**

You can place the code provided in the document in a function or component within your React app. When you call the **`askQuestion`** function with a question as the argument, it will make a request to the backend API using the fetch function. The response data will be processed accordingly, whether it's an error or a successful response. Make sure to adjust the URL **`http://localhost:8080/api/ask`** to match the endpoint of your backend API.

## **Front-End Implementation**

Feel free to integrate the fetch code into your React components where you want to interact with the backend and display the results to the user. You can update the UI based on the response received from the backend API. The document provides a detailed explanation of the front-end implementation using Material-UI components.

## **Chatbot Component**

The chatbox is wrapped inside a Box component, which allows for flexible layout and spacing. Each message is rendered inside a nested Box component. The Box component that wraps each message has additional styles defined inline using the **`sx`** prop. The input field for typing messages is a TextField component from Material-UI. The send button is a Button component with the **`variant="contained"`** and **`color="primary"`** props, which give it a filled appearance with a primary color scheme.

## **Running the Application**

To run the application, use the command **`python3 app.py`**. This will start the Flask server and the application will be available at **`http://localhost:8080/api/ask`**.

## **Troubleshooting**

If you encounter any issues while running the application, please contact anyone in the team via Slack.

You will need to set up a Python environment and install necessary Python packages. These include Flask for creating the web server, Transformers for using the Falcon-7B model, and Torch for the underlying computations.

## **Back End and API**

The backend of the application is built using Flask. An **`/api/ask`** endpoint is created to handle POST requests. The question is extracted from the request's JSON payload. The bot is initialized and the question is processed, generating an answer and relevant documents. The response is then returned as JSON. Make sure to install Flask and any other required dependencies in your back-end environment.

## **Front End**

The front end of the application is built using React. The **`chatbot.js`** file contains the code for the chatbot interface, which includes a function to make a request to the backend API using the fetch function. The response data will be processed accordingly, whether it's an error or a successful response.

## **Running the Application**

You can run the script, and your Flask app will be available at **http://localhost:8080/api/ask**. Now you can fetch this endpoint from your React front-end using fetch or any other HTTP library.

## **Error Handling**

The application includes error handling to catch any exceptions that may occur during the processing of the question. If an error occurs, it will be caught, and the response will include an 'error' key with a description of the error.

## **Validation**

The application includes a validation step to check if the question is valid (i.e., not empty). If the question is invalid, the response will include an 'error' key indicating the invalid question.

Please note that this is a basic structure and you may need to add more sections based on your specific project needs, such as "Installation", "Usage", "Contributing", "License", and "Contact".

## **Fetching API**

You can place the code provided in the document in a function or component within your React app. When you call the **`askQuestion`** function with a question as the argument, it will make a request to the backend API using the fetch function. The response data will be processed accordingly, whether it's an error or a successful response. Make sure to adjust the URL **`http://localhost:8080/api/ask`** to match the endpoint of your backend API.

## **Front-End Implementation**

Feel free to integrate the fetch code into your React components where you want to interact with the backend and display the results to the user. You can update the UI based on the response received from the backend API. The document provides a detailed explanation of the front-end implementation using Material-UI components.

## **Chatbot Component**

The chatbox is wrapped inside a Box component, which allows for flexible layout and spacing. Each message is rendered inside a nested Box component. The Box component that wraps each message has additional styles defined inline using the **`sx`** prop. The input field for typing messages is a TextField component from Material-UI. The send button is a Button component with the **`variant="contained"`** and **`color="primary"`** props, which give it a filled appearance with a primary color scheme.

## **Running the Application**

To run the application, use the command **`python3 app.py`**. This will start the Flask server and the application will be available at **`http://localhost:8080/api/ask`**.

## **Troubleshooting**

If you encounter any issues while running the application, please contact anyone in the team via Slack.