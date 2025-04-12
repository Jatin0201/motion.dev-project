"use client";
import Navbar from "./navBar"; // adjust the path as needed
import ScrollTriggered from "./ScrollTriggered";

export default function Page() {
  return (
    <div>
      <Navbar />
      <main className="mt-20"> {/* Add margin-top if your navbar is fixed */}
        <ScrollTriggered />
      </main>
    </div>
  );
}


