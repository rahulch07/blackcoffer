# Visualization App

Visualize your Data with ease using this Visualization App, which seamlessly transforms JSON data into various chart types. The project consists of two main parts: the Backend, responsible for establishing a connection with a MongoDB database and providing essential APIs to the Frontend, and the Frontend, which fetches data from the Backend, performs computations, and utilizes D3.js to present the data in diverse formats, including bar charts, scatter charts, packed bubble charts, time series plots, and more. The entire application is deployed on Vercel.

# Deployed Link
https://visualizationapp.vercel.app/

## Project Overview

The Visualization App is designed to facilitate the transformation of JSON data into visually appealing charts. Here's an overview of its key components:

### Backend
The Backend component serves as the bridge between the application and the MongoDB database. It offers a set of APIs to the Frontend, ensuring seamless communication and data retrieval.

### Frontend
The Frontend fetches data from the Backend, processes it, and leverages D3.js to create a variety of charts, including bar charts, scatter charts, packed bubble charts, time series plots, and more. The user interface is designed to make data visualization intuitive and user-friendly.

### Technologies Used
- MongoDB: For storing JSON data.
- D3.js: For creating interactive and dynamic charts.
- ReactJS: For frontend.
- NodeJS: ExpressJS is used for backend.
- Vercel: The platform where the project is deployed.

## Installation

To get started with the Visualization App, follow these steps:

1. Clone or download this repository:

    ```bash
    git clone https://github.com/rahulch07/blackcoffer.git
    ```

2. Navigate to the client directory and install dependencies:

    ```bash
    cd client
    npm install
    ```

3. Navigate to the Blackcoffer directory (Backend) and install dependencies:

    ```bash
    cd Blackcoffer
    npm install
    ```

## Usage

1. Start the Frontend:

    ```bash
    cd client
    npm start
    ```

2. Start the Backend:

    ```bash
    cd Blackcoffer
    node index.js
    ```

3. Open your browser and go to [http://localhost:3000](http://localhost:3000) to access the Visualization App.

## Features

-NavBar
  Light and Dark mode Toggle button.
-Dashboard
  Data Visualization Dashboard.
  Used D3.js for making graphs.
  Data fetched from MongoDB database through NodeJS backend api.
  Charts are Dynamic(change with change in data).
  Components of different charts are made.
  Good looking UI.
-Data
  Fetches all the data from backend.
  Pagination applied(to avoid to much scrolling).
  Easy readability of data.

#Home Page
![Home](https://github.com/rahulch07/blackcoffer/assets/87270395/04de28e2-4269-44bf-9e99-43f917971d4d)
#Dashboard Page
![Dashboard-1](https://github.com/rahulch07/blackcoffer/assets/87270395/8278fb5d-955c-4162-b2ff-a9a685fbdb4f)
![Dashboard-2](https://github.com/rahulch07/blackcoffer/assets/87270395/6d3c8d4a-eb6a-4068-afe8-676305523a40)
#Data Page
![Data-1](https://github.com/rahulch07/blackcoffer/assets/87270395/a434dd4e-d3df-41ca-a684-173e1fe12e78)
![Data-2](https://github.com/rahulch07/blackcoffer/assets/87270395/28f70caa-42b0-4960-bb2e-2395d14256ca)


#Made By
Rahul Chougule,
chouguler310@gmail.com


