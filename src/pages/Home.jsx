import React from 'react';
import { ChevronRight, Mail, Phone, MapPin, Calendar,  Instagram, Facebook, Youtube } from 'lucide-react';
import Navbar from '../ui/Navbar';

const HomePage = () => {
  // Sample gallery images using placeholder API
  const galleryImages = [
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300",
    "/api/placeholder/400/300"
  ];

  const upcomingEvents = [
    {
      title: "Weekly Prayer Meeting",
      date: "Every Tuesday & Friday",
      time: "8:00 PM ET",
      description: "Join us for PUSH (Pray Until Something Happens) via Zoom"
    },
    {
      title: "Sunday Service",
      date: "Every Sunday",
      time: "10:00 AM ET",
      description: "Join us for worship and the word"
    }
  ];
console.log("Hello")
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="/joyful.jpeg" 
            alt="Church gathering" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Covenant Nation Toronto
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Building a community of faith, hope, and love
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Join Us
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Watch Live
            </button>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Welcome Home</h2>
            <p className="text-gray-600 text-lg mb-8">
              Experience authentic worship, powerful messages, and genuine community at The Covenant Nation Toronto.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Join Our Community</h3>
                <p className="text-gray-600">Connect with believers and grow together in faith</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Weekly Prayers</h3>
                <p className="text-gray-600">Every Tuesday and Friday at 8 PM ET via Zoom</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Get Involved</h3>
                <p className="text-gray-600">Discover opportunities to serve and make a difference</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-lg font-medium">View Image</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-1">{event.date} at {event.time}</p>
                    <p className="text-gray-500">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-600">We'd love to hear from you</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600">1464 Leda Avenue, Mississauga</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600">toronto@thecovenantnation.ca</p>
            </div>
            <div className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600">Contact us for phone details</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="py-10 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Connect With Us</h3>
              <p className="text-gray-400">Follow us on social media for updates</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition">
                <Youtube className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;