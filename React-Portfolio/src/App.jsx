import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Portfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team';
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <Footer />
    </>
  )
}

