import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[url('https://images.unsplash.com/photo-1487925876428-ebd8a23ee1d4?q=80&w=1922&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center text-center text-white font-sans overflow-hidden relative">
      <div className="max-w-[500px] p-5 bg-black/60 rounded-2xl shadow-2xl relative z-10 mx-4">
        <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold m-0 text-[#ffdf6b] animate-bounce">404</h1>
        <p className="text-xl sm:text-2xl my-5 text-[#f1f1f1]">Oops! You’re floating in unknown territory.</p>
        <Link 
          to="/" 
          className="inline-block py-3 px-6 text-lg sm:text-xl text-[#333] bg-[#ffdf6b] rounded-lg no-underline transition-all duration-300 shadow-[0_4px_15px_rgba(255,223,107,0.5)] hover:bg-[#ffb84d] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(255,184,77,0.8)]"
        >
          Return to Earth!
        </Link>
      </div>
      <img 
        src="https://www.freeiconspng.com/uploads/rocket-ship-png-13.png" 
        alt="Rocket"
        className="absolute top-1/2 left-1/2 w-24 sm:w-32 -ml-12 sm:-ml-16 -mt-12 sm:-mt-16 animate-[spin_4s_linear_infinite] pointer-events-none z-0"
      />
    </div>
  );
};

export default NotFound;
