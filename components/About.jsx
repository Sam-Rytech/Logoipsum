export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="grid items-center grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-2">
        <div className="flex justify-center">
          <img
            src="/AboutI.png"
            alt="About"
            className="w-full h-auto max-w-md"
          />
        </div>
        <div>
          <h2 className="mb-4 text-2xl font-bold">We are a creative agency</h2>
          <p className="mb-6 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum natus quae doloremque
            molestias rerum illum minus, fugiat earum unde distinctio accusantium.
          </p>
          <button className="px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700">
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
}
