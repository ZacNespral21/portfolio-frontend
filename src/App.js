// App Core
import React from 'react';
import {Helmet} from "react-helmet";

// App Components
import Header from './components/global/header';
import Home from './components/home';

// App Styling
import './override.css';
import './assets/css/main.scss';

function App() {
  return (
    <>
      <Helmet>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css" />
        <script src="template/assets/js/scrollreveal.js" type="text/javascript" />
        <script src="template/assets/js/main.js" type="text/javascript" />
      </Helmet>
      <Header />
      <Home />
    </>
  );
}

export default App;