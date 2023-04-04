import HomeComponent from "./home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ProfileComponent from "./profile";
import ReviewComponent from "./review-component";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route index path="/" element={<HomeComponent />}/>
          <Route path="/profile" element={<ProfileComponent />}/>
          <Route path="/reviews/:id" element={<ReviewComponent />}/>
        </Routes>
      </div>
    </BrowserRouter>

  );
}
export default App;