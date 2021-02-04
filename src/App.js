import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'assets/scss/style.scss';
import Landingpage from 'pages/LandingPage';
import DetailsPage from 'pages/DetailsPage';
import Checkout from 'pages/Checkout';
// import NotFound from "pages/404";
// import Example from 'pages/Example';


function App() {
  return (
    <div className="App">
     <Router>
     <Route exact path="/" component={Landingpage} />
     <Route exact path="/properties/:id" component={DetailsPage} />
     <Route exact path="/checkout" component={Checkout} />
     {/* <Route path="*" component={NotFound} /> */}
       {/* <Route path="/" component={Example}></Route> */}
     </Router>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
