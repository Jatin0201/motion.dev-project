"use client";

import Navbar from "./navBar"; // adjust the path as needed
import ScrollTriggered from "./ScrollTriggered";


export default function Page() {
   return (
      <div className="min-h-screen w-full  overflow-hidden">
         
         <div className="relative z-10">
            <Navbar />
            <hr />
            
            
            <main className="mt-0 px-4">
               <ScrollTriggered />
            </main>
         </div>
      </div>
   );
}
