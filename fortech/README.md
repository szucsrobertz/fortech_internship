# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`


# Components

## Home

THis is a class component

In the componentDidMount method is the API call to fetch the data and store the filter variables

There are methods for every filter buttons to open/close

updateInput is a method for the search input that filters and show the desired countrys by name region and alpa2Code

The filter buttons are rendered using the map function 

The Card component is rendered also using the map function

## Card

This is a class component

This component is receiving the data from parent component(Home) through props that are used to render the flag,
country name, capital, region. populatio

## Modal

This component is a functional component that receivies the data through props

This Modal component contains a close button, the country flag and different information about the country

## Dependencies

 * Node
 * npm
 * React
 * Sass

## Project Structure

**Note: it.s a responsive design**

```
.
src
├── .components
│   ├── Card
│   │   ├── index.js
│   │   ├── styles.scss
│   ├── Home
│   │   ├── index.js
│   │   ├── styles.scss
│   ├── Modal
│   │   ├── index.jsx
│   │   ├── styles.scss
├──App.css
├──App.js
├──index.css
├──index.js
├──reportWebvitals.js
├──setupTests.js
├──.gitignore
├──package-lock.json
├──package.json
├──README.md
```
