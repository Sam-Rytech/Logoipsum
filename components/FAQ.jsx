'use client'
import { useState } from 'react'

export default function FAQ() {
  const [open, setOpen] = useState(null)

  const faqs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    'Aliquam eget sapien sapien?',
    'Curabitur in ligula ex?',
    'Vivamus at sem sit amet orci luctus vestibulum?',
  ]

  return (
    <section className="py-16 text-center bg-blue-50">
      <h2 className="mb-4 text-2xl font-bold">Find the answers you need</h2>
      <div className="max-w-2xl mx-auto text-left">
        {faqs.map((q, idx) => (
          <div key={idx} className="border-b">
            <button
              className="flex items-center justify-between w-full py-4 text-left"
              onClick={() => setOpen(open === idx ? null : idx)}
            >
              <span>{q}</span>
              <span>{open === idx ? '-' : '+'}</span>
            </button>
            {open === idx && (
              <p className="pb-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, molestias?
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
