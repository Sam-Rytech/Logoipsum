"use client"
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Projects from '@/components/Projects'
import CTASection from '@/components/CTASection'
import Team from '@/components/Team'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'


export default function HomePage() {
  return (
    <main className="text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Projects />
      <FAQ />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}