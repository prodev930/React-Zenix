import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import css
import '../src/assets/vendor/animate/cursor.css'
import '../src/assets/vendor/switcher/switcher.css'
import '../src/assets/css/commanSkin.css'
import '../src/assets/css/style.css'
//import components
import Header from "./components/Header";
import Footer from "./components/Footer";
// import CursorStyle from "./element/CursorStyle";
//import pages
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs";
import Princing from "./pages/Princing";
import BlogList from "./pages/BlogList";
import BlogGrid from "./pages/BlogGrid";
import Contect from "./pages/ContectUs";
import GetScrollTop from "./constent/ScrollTo";
import BlogDetail from "./pages/BlogDetail";



function App() {

  return (
    <>
      <div className="page-wraper">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/pricing" element={<Princing />} />
            <Route path="/blog-list" element={<BlogList />} />
            <Route path="/blog-grid" element={<BlogGrid />} />
            <Route path="/blog-details" element={<BlogDetail />} />
            <Route path="/contact-us" element={<Contect />} />
          </Routes>
          <Footer />          
          <GetScrollTop />          
        </Router>
      </div>
    </>
  )
}

export default App
