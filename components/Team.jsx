export default function Team() {
  const members = [
    { name: "Jane Cooper", role: "Developer", image: "/Team1.jpg" },
    { name: "Brooklyn Simmons", role: "Designer", image: "/Team2.jpg" },
    { name: "Guy Hawkins", role: "Marketer", image: "/Team3.png" },
    { name: "Kristin Watson", role: "Photographer", image: "/Team4.png" },
  ];

  return (
    <section className="py-16 text-center bg-white">
      <h2 className="mb-4 text-2xl font-bold">Meet Our Team</h2>
      <p className="mb-10 text-gray-600">Our Expert Members</p>
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-4">
        {members.map((m, idx) => (
          <div key={idx} className="p-4 bg-white rounded-lg shadow">
            <img src={m.image} alt={m.name} className="object-cover w-full h-56 mb-4 rounded-md" />
            <h3 className="font-semibold">{m.name}</h3>
            <p className="text-sm text-gray-500">{m.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
