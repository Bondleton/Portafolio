import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"; 

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
        {/* Los componentes se cierran automáticamente con la etiqueta de cierre */}
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </>
  );
}

export default App