import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import { Box } from "@chakra-ui/react";
import PageLayout from "./ui/layouts/PageLayout";
import ScrollToTop from "./ui/ScrollTop";
import ContactUsPage from "./pages/ContactUs";
import AboutUsPage from "./pages/AboutUs";
import SermonsPage from "./pages/Sermons";
import EventsPage from "./pages/Events";
import GalleryPage from "./pages/Gallery";
// import ServicesPage from "./pages/Services";
// import ServiceDetailPage from "./pages/ServiceDetail";



function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Box overflow="hidden">
      <BrowserRouter>
        <Routes>

          <Route element={<PageLayout />}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about-us" element={<AboutUsPage/>}/>
            <Route path="/sermons" element={<SermonsPage/>}/>
            <Route path="/events" element={<EventsPage/>}/>
            <Route path="/gallery" element={<GalleryPage/>}/>
            {/* <Route path="/services" element={<ServicesPage/>}/> */}
            {/* <Route path="/services/service-detail/:slug" element={<ServiceDetailPage/>}/> */}
            {/* <Route path="/blog" element={<BlogPage/>}/> */}
            <Route path="/contact-us" element={<ContactUsPage/>}/>
          </Route>

        </Routes>
      <ScrollToTop/>
      </BrowserRouter>
    </Box>
  );
}

export default App;
