export default function Footer() {
  const menu = ['Home', 'About Us', 'Blog', 'Portfolio', 'Contact']
  const utility = [
    'Start Here',
    'Style Guide',
    'Password Protected',
    '404 Not Found',
    'Licenses',
  ]

  return (
    <footer className="py-12 text-gray-400 bg-gray-900">
      <div className="grid grid-cols-1 gap-8 px-4 mx-auto max-w-7xl md:grid-cols-4">
        <div>
          <h2 className="mb-4 text-xl font-bold text-white">Logoipsum</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae eros vel felis.
          </p>
          <div className="flex gap-3 mt-4">
            <span>🌐</span> <span>📘</span> <span>🐦</span>
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-white">Menu</h3>
          <ul className="space-y-2 text-sm">
            {menu.map((m) => (
              <li key={m}>
                <a href="#" className="hover:text-white">
                  {m}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-white">Utility Pages</h3>
          <ul className="space-y-2 text-sm">
            {utility.map((u) => (
              <li key={u}>
                <a href="#" className="hover:text-white">
                  {u}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-semibold text-white">Subscribe</h3>
          <p className="mb-4 text-sm">
            Subscribe to our newsletter and stay updated.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-sm outline-none rounded-l-md"
            />
            <button className="px-4 py-2 text-white bg-blue-600 rounded-r-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
