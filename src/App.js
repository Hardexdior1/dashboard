import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";


function App() {
 
 
  




 
  return (
    <div className="App">
     

        
      <BrowserRouter>

      <Routes>
        
      <Route
            path="/"
            element={<LandingPage  />}
          />
      </Routes>
      </BrowserRouter>
        

        <a href="">REFRESH</a>
    </div>
  );
}

export default App;
