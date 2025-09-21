"use client";

export default function Navbar() {
  const links = ["Home", "Services", "About Us", "Portfolio"];

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        <h1 className="text-xl font-bold text-blue-600">Logoipsum</h1>
        <nav className="flex gap-6 text-sm">
          {links.map((link) => (
            <a key={link} href="#" className="hover:text-blue-600">
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#"
          className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
