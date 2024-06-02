import React from 'react'
import Header from '../Components/Appbar'
import LatCTA from '../Components/LastCta'
import Footer from '../Components/Footer'
import Breadcrumbs from '../Components/Breadcrumbs'
import Prices from '../Components/Prices'
import Faq from '../Components/Faq'

const Pricing = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <Header />
    <Breadcrumbs 
        currentPageName= 'pricing'
        previousPage='Home'
        currentPage='pricing'
        previousPageUrl='/'
    />
    <Prices />
    <Faq />
    <LatCTA />
    <Footer />
    </div>
  )
}

export default Pricing
