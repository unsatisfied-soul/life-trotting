import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Experience from './Components/Pages/Experience/Experience';
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Pages/Home/Navbar/Navbar';
import SingleExperience from './Components/Pages/Home/TravelExperience/SingleExperience';
import TravelExperience from './Components/Pages/Home/TravelExperience/TravelExperience';
import PlacesToGo from './Components/Pages/PlacesToGo/PlacesToGo';
import TripPlan from './Components/Pages/TripPlan/TripPlan';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/RegistrationForm/Login';
import Registration from './Components/RegistrationForm/Registration';
import AuthProvider from './hooks/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}> 
          </Route>
          <Route path="/travelBlog/:travelId" element={<SingleExperience />} />
          <Route path="/home" element={<Home />} />
          <Route path="/places" element={<PlacesToGo />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/planTrip" element={<TripPlan />} />
          <Route path="/experience" element={<PrivateRoute><Experience /></PrivateRoute> } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          {/* <Route path ="/travelBlog/:travelId" element={<TravelExperience />} /> */}
          
        </Routes>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
