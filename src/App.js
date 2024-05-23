import React from 'react'
import Header from './ui/Header'
import Main from './featutres/home/Main'
import Tech from './featutres/home/Tech'
import Me from './featutres/home/Me'
import Footer from './ui/Footer'
import Business from './featutres/home/Business'



const App = () => {
  return (
    <>

      <Header />
      <Business />
      <Main />
      <Tech />
      <Me />
      <Footer />

    </>
  )
}
export default App