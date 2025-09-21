export default function Hero() {
  return (
    <section className="py-16 bg-white">
      <div className="grid items-center grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-4xl font-bold leading-tight">
            We are the best agency in the world
          </h2>
          <p className="mb-6 text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat.
          </p>
          <div className="flex gap-4">
            <button className="px-5 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Start a Project
            </button>
            <button className="px-5 py-3 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-600 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img src="/hero.png" alt="Hero" className="w-full h-auto max-w-md" />
        </div>
      </div>
    </section>
  )
}
