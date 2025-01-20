import React from 'react'
import  Header  from '../components/Header'
import HeroSection from '../components/HeroSection'
import { RecommendationSection } from '../components/RecommendationSection'
import { Footer } from '../components/Footer'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-grow">
      <HeroSection />
      <RecommendationSection/>
    </main>
    <Footer/>
  </div>
  )
}

export default Home