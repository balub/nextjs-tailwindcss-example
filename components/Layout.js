import Navbar from ".//Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-white dark:bg-veryDarkBlue w-screen h-screen overflow-x-hidden">
      <Navbar />
      {children}
    </div>
  );
}
