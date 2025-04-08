import React from "react";
import Footer from "../../components/layout/Footer"; 

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <h1 className="text-2xl text-center mt-10">Bienvenido a Madryn Buceo</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
