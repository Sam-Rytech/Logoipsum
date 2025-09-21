export default function Testimonials() {
  const testimonials = [
    { name: "Jenny Wilson", role: "Marketing Coordinator", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { name: "Cody Fisher", role: "President of Sales", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { name: "Robert Fox", role: "Web Developer", review: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="mb-10 text-2xl font-bold">Customer Testimonials</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-6 rounded-lg shadow bg-gray-50">
              <p className="mb-4 text-gray-600">“{t.review}”</p>
              <h3 className="font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
