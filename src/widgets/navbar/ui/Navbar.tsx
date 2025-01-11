export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-xl font-bold">Naro's Portfolio</div>
        <nav className="flex space-x-4">
          <a href="#home" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
