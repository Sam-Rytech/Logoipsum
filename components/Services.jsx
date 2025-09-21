import { PenTool, Monitor, Layout, TrendingUp } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: 'Web Design',
      icon: <Monitor size={36} />,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'UI/UX Design',
      icon: <Layout size={36} />,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'Graphics Design',
      icon: <PenTool size={36} />,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      title: 'SEO Marketing',
      icon: <TrendingUp size={36} />,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]

  return (
    <section className="py-16 text-center bg-blue-50">
      <h2 className="mb-4 text-2xl font-bold">Services We Provide</h2>
      <p className="max-w-2xl mx-auto mb-10 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        incidunt error dolore.
      </p>
      <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-4">
        {services.map((s, idx) => (
          <div
            key={idx}
            className="p-6 transition bg-white rounded-lg shadow hover:shadow-lg"
          >
            <div className="mb-4 text-blue-600">{s.icon}</div>
            <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-gray-500">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
