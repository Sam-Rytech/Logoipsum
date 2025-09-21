export default function Projects() {
  const projects = [
    { title: "Medical Website", image: "/P1.png" },
    { title: "Cryptocurrency Website", image: "/P2.png" },
    { title: "Bitcoin Investment Web", image: "/P3.png" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="mb-8 text-2xl font-bold text-center">More Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p, idx) => (
            <div key={idx} className="overflow-hidden bg-white rounded-lg shadow">
              <img src={p.image} alt={p.title} className="object-cover w-full h-56" />
              <div className="p-4">
                <h3 className="mb-2 font-semibold">{p.title}</h3>
                <a href="#" className="text-sm text-blue-600 hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
