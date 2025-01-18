export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between w-[1000px] text-white py-4 px-6">
        <div className="text-xl font-bold">Naro's portfolio</div>
        <nav className="flex space-x-4">
          <a href="#home">About me</a>
          <a href="#about">Skill</a>
          <a href="#contact">Archiving</a>
          <a href="#contact">Project</a>
          <a href="#contact">Career</a>
        </nav>
      </div>
    </header>
  );
}
