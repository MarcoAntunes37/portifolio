import type { NextPage } from 'next'
import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import Vertical from '../component/Vertical'

const Home: NextPage = () => {
  return (
      <>
        <Navbar/>
        <div className='container-fluid 
          d-flex 
          justify-content-center mt-5'
        >
          <div className="">
            <p className='special-text thicknes'>Hi, my name is</p>
            <h1 className='primary-text thicknes'>Marco Aurélio</h1>
            <h2 className='secondary-text thicknes'>I build things for web.</h2>
            <span className='secondary-text 
              detailed-text 
              d-block 
              thicknes'
            >
              I&apos;m a software engineer based in São Paulo, SP. I love build website applications,
               and everything in between.
            </span>
          </div>
        </div>
        <Vertical/>
        <Footer/>
      </>
  )
}

export default Home
