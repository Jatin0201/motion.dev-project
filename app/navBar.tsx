import { useState } from "react";
import { FaHome, FaCog, FaUser, FaSignInAlt } from "react-icons/fa"; // Example FontAwesome icons
import ThemeToggle from "./theme"; // Assuming you have the ThemeToggle component
import { RiTextSpacing } from "react-icons/ri";

export default function Navbar() {
   const [searchTerm, setSearchTerm] = useState("");

   // Event handler for search input
   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
   };

   // Event handler for search form submission
   const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Search term:", searchTerm);
      // Handle search logic here (e.g., API call, filtering items, etc.)
   };

   return (
      <div>
         {/* BlazeCode Title */}
         <header style={styles.header}>
            <h1 style={styles.logo} className="italic">BlazeCode</h1>
            <ThemeToggle />
         </header>

         {/* Sticky Navbar */}
         <nav className="px-7 py-4">
            <div className="flex items-center justify-between">
               {/* Left Side: Nav Icons */}
               <div className="flex space-x-5">
                  <a
                     href="#"
                     className="text-white hover:text-blue-600 flex items-center space-x-2"
                  >
                     <FaHome className="text-xl" />
                     <span className="hidden md:inline">Home</span>
                  </a>
                  <a
                     href="#"
                     className="text-white hover:text-blue-600 flex items-center space-x-2"
                  >
                     <FaCog className="text-xl" />
                     <span className="hidden md:inline">Settings</span>
                  </a>
               </div>

               {/* Center: Search Bar */}
               <form
                  className="flex items-center bg-white/20 backdrop-blur-md rounded-xl p-2 w-full sm:w- md:w-1/3 lg:w-1/4"
                  onSubmit={handleSearchSubmit}
               >
                  <input
                     type="text"
                     placeholder="Search..."
                     className="w-full px-4 py-2 bg-transparent text-blue-500 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                     value={searchTerm}
                     onChange={handleSearchChange}
                  />
                  <button
                     type="submit"
                     className="bg-blue-600 px-4 py-2 rounded-r-lg text-white hover:bg-blue-500 focus:outline-none"
                  >
                     Search
                  </button>
               </form>

               {/* Right Side: Profile / Login */}
               <div className="flex space-x-5">
                  <a
                     href="#"
                     className="text-white hover:text-blue-600 flex items-center space-x-2"
                  >
                     <FaSignInAlt className="text-xl" />
                     <span className="hidden md:inline">Login</span>
                  </a>
                  <a
                     href="#"
                     className="text-white hover:text-blue-600 flex items-center space-x-2"
                  >
                     <FaUser className="text-xl" />
                     <span className="hidden md:inline">Profile</span>
                  </a>
               </div>
            </div>
         </nav>
      </div>
   );
}

const styles = {
   header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between", // or 'center' if you want everything centered
      padding: "1rem 2rem",
      backgroundColor: "var(--bg-color)", // Using CSS variable for dynamic background color
   },
   logo: {
      fontSize: "2rem",
      fontWeight: "medium",
      letterSpacing: "4px",
      margin: 0,
      
   },
};
