import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Home from "./Home"
import Profile from "./Profile";
import Modal from "./Modal";



export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ Home } exact/>
        <Route path="/Profile" element={ <Profile /> } />
        <Route path="/Modal" element={ <Modal /> } />
      </Routes>
    </Router>
    
  )
}

export default App;
