import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import {
  Home,
  Navbar,
  About,
  Contact,
 
  
  Footer,
  Products,
} from "./components";

const App = () => {
  return (
    <Router> {/* Wrap your app with BrowserRouter */}
      <div className="font-poppins bg-background text-dark">
        <Navbar />
        <main>
          <Home />
          <About />
          <Products />
         
          

          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;