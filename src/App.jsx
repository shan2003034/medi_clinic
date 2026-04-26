import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"; 

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-800">
      
      
      <Navbar />

      
      <main className="flex-grow">
        <Home />
      </main>

     
      <Footer />

    </div>
  );
}

export default App;