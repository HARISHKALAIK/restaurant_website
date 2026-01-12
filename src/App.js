import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Navi from './pages/navigation';
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Menu from "./pages/menus";
import Events from "./pages/events";
import Chiefs from "./pages/chiefs";
import Gallery from "./pages/galery";
import ViewBookings from "./pages/ViewBookings";
import Break from "./pages/break";
import Dinner from "./pages/dinner";
import Lunch from "./pages/lunch";
import BookTable from "./pages/book";
import Footer from "./pages/footer";

function App() {
  return (
    <>
      <Router>
        <Navi />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Make menus support nested routes */}
          <Route path="/menus/*" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/chiefs" element={<Chiefs />} />
          <Route path="/galery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<BookTable/>} />
           <Route path="/break" element={<Break></Break>} />
           <Route path="/dinner" element={<Dinner/>} />
           <Route path="/lunch" element={<Lunch/>} />
           <Route path="/ViewBookings" element={<ViewBookings/>}/>


        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
