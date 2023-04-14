import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { OurStory } from "./components/OurStory";
import { Services } from "./components/Services";
import { Discount } from "./components/Discount";
import FormSection from "./components/FormSection";
import RecomendedSection from "./components/RecomendedSection";
import Footer from "./components/Footer";
import PopularMenu from "./components/PopularMenu";

const App = () => {
  return (
    <div className="bg-1 text-2 min-h-screen font-leiko overflow-x-hidden">
      <Navbar />
      <Hero />
      <OurStory />
      <Services />
      <Discount />
      <FormSection />
      <RecomendedSection />
      <PopularMenu />

      <Footer />
    </div>
  );
};

export default App;
